import { NextRequest, NextResponse } from 'next/server';
import { isAuthenticated } from '../../../../lib/auth';
import { getSupabase } from '../../../../lib/supabase';

export async function GET(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const supabase = getSupabase();
  const visitorId = request.nextUrl.searchParams.get('visitor_id');

  if (visitorId) {
    const { data } = await supabase
      .from('chat_logs')
      .select('*')
      .eq('visitor_id', visitorId)
      .order('created_at', { ascending: true });

    return NextResponse.json({ messages: data || [] });
  }

  // List unique visitors with message count and last active
  const { data } = await supabase
    .from('chat_logs')
    .select('visitor_id, created_at')
    .order('created_at', { ascending: false });

  const visitorMap = new Map<string, { count: number; lastActive: string }>();

  for (const row of data || []) {
    const existing = visitorMap.get(row.visitor_id);
    if (existing) {
      existing.count++;
    } else {
      visitorMap.set(row.visitor_id, { count: 1, lastActive: row.created_at });
    }
  }

  const visitors = Array.from(visitorMap.entries())
    .map(([visitor_id, info]) => ({ visitor_id, ...info }))
    .sort((a, b) => new Date(b.lastActive).getTime() - new Date(a.lastActive).getTime());

  return NextResponse.json({ visitors });
}
