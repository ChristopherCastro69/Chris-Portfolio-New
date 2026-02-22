import { NextRequest, NextResponse } from 'next/server';
import { isAuthenticated } from '../../../../lib/auth';
import { getSupabase } from '../../../../lib/supabase';

export async function GET(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const supabase = getSupabase();
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayISO = today.toISOString();

  const [
    pageViewsTotal,
    pageViewsToday,
    visitorsTotal,
    visitorsToday,
    chatTotal,
    groqTokensTotal,
    groqTokensToday,
    mem0Total,
    mem0Today,
    recentActivity,
  ] = await Promise.all([
    supabase.from('page_views').select('*', { count: 'exact', head: true }),
    supabase.from('page_views').select('*', { count: 'exact', head: true }).gte('created_at', todayISO),
    supabase.from('page_views').select('visitor_id'),
    supabase.from('page_views').select('visitor_id').gte('created_at', todayISO),
    supabase.from('chat_logs').select('visitor_id'),
    supabase.from('api_usage').select('tokens_used').eq('service', 'groq'),
    supabase.from('api_usage').select('tokens_used').eq('service', 'groq').gte('created_at', todayISO),
    supabase.from('api_usage').select('*', { count: 'exact', head: true }).eq('service', 'mem0'),
    supabase.from('api_usage').select('*', { count: 'exact', head: true }).eq('service', 'mem0').gte('created_at', todayISO),
    supabase.from('page_views').select('*').order('created_at', { ascending: false }).limit(10),
  ]);

  const uniqueVisitorsTotal = new Set(visitorsTotal.data?.map((r) => r.visitor_id)).size;
  const uniqueVisitorsToday = new Set(visitorsToday.data?.map((r) => r.visitor_id)).size;
  const uniqueChats = new Set(chatTotal.data?.map((r) => r.visitor_id)).size;
  const groqTokensSumTotal = groqTokensTotal.data?.reduce((sum, r) => sum + (r.tokens_used || 0), 0) || 0;
  const groqTokensSumToday = groqTokensToday.data?.reduce((sum, r) => sum + (r.tokens_used || 0), 0) || 0;

  return NextResponse.json({
    pageViews: { total: pageViewsTotal.count || 0, today: pageViewsToday.count || 0 },
    visitors: { total: uniqueVisitorsTotal, today: uniqueVisitorsToday },
    chats: { total: uniqueChats },
    groqTokens: { total: groqTokensSumTotal, today: groqTokensSumToday },
    mem0Calls: { total: mem0Total.count || 0, today: mem0Today.count || 0 },
    recentActivity: recentActivity.data || [],
  });
}
