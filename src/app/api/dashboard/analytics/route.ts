import { NextRequest, NextResponse } from 'next/server';
import { isAuthenticated } from '../../../../lib/auth';
import { getSupabase } from '../../../../lib/supabase';

export async function GET(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const supabase = getSupabase();
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  const { data: pageViews } = await supabase
    .from('page_views')
    .select('page, referrer, user_agent, created_at')
    .gte('created_at', thirtyDaysAgo.toISOString())
    .order('created_at', { ascending: false });

  const rows = pageViews || [];

  // Page views per day (last 30 days)
  const dailyMap = new Map<string, number>();
  for (const row of rows) {
    const day = row.created_at.slice(0, 10);
    dailyMap.set(day, (dailyMap.get(day) || 0) + 1);
  }
  const dailyViews = Array.from(dailyMap.entries())
    .map(([date, count]) => ({ date, count }))
    .sort((a, b) => a.date.localeCompare(b.date));

  // Top 10 pages
  const pageMap = new Map<string, number>();
  for (const row of rows) {
    pageMap.set(row.page, (pageMap.get(row.page) || 0) + 1);
  }
  const topPages = Array.from(pageMap.entries())
    .map(([page, count]) => ({ page, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  // Top 10 referrers
  const refMap = new Map<string, number>();
  for (const row of rows) {
    const ref = row.referrer || '(direct)';
    refMap.set(ref, (refMap.get(ref) || 0) + 1);
  }
  const topReferrers = Array.from(refMap.entries())
    .map(([referrer, count]) => ({ referrer, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  // Top 20 user agents
  const uaMap = new Map<string, number>();
  for (const row of rows) {
    const ua = row.user_agent || '(unknown)';
    uaMap.set(ua, (uaMap.get(ua) || 0) + 1);
  }
  const topUserAgents = Array.from(uaMap.entries())
    .map(([user_agent, count]) => ({ user_agent, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 20);

  return NextResponse.json({ dailyViews, topPages, topReferrers, topUserAgents });
}
