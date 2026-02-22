import { NextResponse } from 'next/server';
import { getSupabase } from '../../../../lib/supabase';

export async function POST(request: Request) {
  try {
    const { page, referrer, visitor_id } = await request.json();
    const userAgent = request.headers.get('user-agent') || '';

    getSupabase()
      .from('page_views')
      .insert({ page, referrer, user_agent: userAgent, visitor_id })
      .then();

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to track.' }, { status: 500 });
  }
}
