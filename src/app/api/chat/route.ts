import { NextResponse } from 'next/server';
import { buildSystemPrompt } from '../../../data/resume';
import { getSupabase } from '../../../lib/supabase';

function logChatMessages(visitorId: string, userContent: string, assistantContent: string) {
  getSupabase()
    .from('chat_logs')
    .insert([
      { visitor_id: visitorId, role: 'user', content: userContent },
      { visitor_id: visitorId, role: 'assistant', content: assistantContent },
    ])
    .then();
}

function logApiUsage(service: string, endpoint: string, tokensUsed?: number) {
  getSupabase()
    .from('api_usage')
    .insert({ service, endpoint, tokens_used: tokensUsed || null })
    .then();
}

const SYSTEM_PROMPT = buildSystemPrompt();
const MEM0_BASE_URL = 'https://api.mem0.ai/v1';

async function searchMemories(query: string, userId: string): Promise<string> {
  const apiKey = process.env.MEM0_API_KEY;
  if (!apiKey) return '';

  try {
    const res = await fetch(`${MEM0_BASE_URL}/memories/search/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${apiKey}`,
      },
      body: JSON.stringify({ query, user_id: userId }),
    });

    if (!res.ok) return '';

    logApiUsage('mem0', 'memories/search');

    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) return '';

    const memories = data
      .slice(0, 5)
      .map((m: { memory: string }) => m.memory)
      .join('\n- ');

    return `\n\nRelevant context from previous conversations with this visitor:\n- ${memories}`;
  } catch {
    return '';
  }
}

function storeMemory(messages: { role: string; content: string }[], userId: string) {
  const apiKey = process.env.MEM0_API_KEY;
  if (!apiKey) return;

  fetch(`${MEM0_BASE_URL}/memories/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${apiKey}`,
    },
    body: JSON.stringify({ messages, user_id: userId }),
  }).catch(() => {});

  logApiUsage('mem0', 'memories/store');
}

export async function POST(request: Request) {
  try {
    const { message, userId } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required.' },
        { status: 400 }
      );
    }

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Chat service is not configured.' },
        { status: 500 }
      );
    }

    // Search Mem0 for relevant past context
    const memoryContext = userId ? await searchMemories(message, userId) : '';

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT + memoryContext },
          { role: 'user', content: message },
        ],
        max_tokens: 300,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error('Groq API error:', text);
      return NextResponse.json(
        { error: 'Failed to get response.' },
        { status: 500 }
      );
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || 'Sorry, I could not process that.';

    // Fire-and-forget: log Groq usage and chat messages
    logApiUsage('groq', 'chat/completions', data.usage?.total_tokens);
    if (userId) {
      logChatMessages(userId, message, reply);
    }

    // Fire-and-forget: store conversation in Mem0
    if (userId) {
      storeMemory(
        [
          { role: 'user', content: message },
          { role: 'assistant', content: reply },
        ],
        userId
      );
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    );
  }
}
