import { NextResponse } from 'next/server';
import { createToken } from '../../../../lib/auth';

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    const dashboardPassword = process.env.DASHBOARD_PASSWORD;

    if (!dashboardPassword) {
      return NextResponse.json({ error: 'Dashboard not configured.' }, { status: 500 });
    }

    if (password !== dashboardPassword) {
      return NextResponse.json({ error: 'Invalid password.' }, { status: 401 });
    }

    const token = createToken();
    const response = NextResponse.json({ success: true });

    response.cookies.set('dashboard_auth', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24, // 24 hours
      path: '/',
    });

    return response;
  } catch {
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
