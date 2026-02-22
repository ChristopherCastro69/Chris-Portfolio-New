import crypto from 'crypto';
import { NextRequest } from 'next/server';

const SECRET = process.env.DASHBOARD_PASSWORD || 'default-secret';

export function createToken(): string {
  const payload = JSON.stringify({ ts: Date.now() });
  const hmac = crypto.createHmac('sha256', SECRET).update(payload).digest('hex');
  const token = Buffer.from(`${payload}.${hmac}`).toString('base64');
  return token;
}

export function verifyToken(token: string): boolean {
  try {
    const decoded = Buffer.from(token, 'base64').toString('utf-8');
    const dotIndex = decoded.lastIndexOf('.');
    if (dotIndex === -1) return false;

    const payload = decoded.slice(0, dotIndex);
    const hmac = decoded.slice(dotIndex + 1);

    const expected = crypto.createHmac('sha256', SECRET).update(payload).digest('hex');
    if (hmac !== expected) return false;

    const { ts } = JSON.parse(payload);
    const age = Date.now() - ts;
    const ONE_DAY = 24 * 60 * 60 * 1000;
    return age < ONE_DAY;
  } catch {
    return false;
  }
}

export function isAuthenticated(request: NextRequest): boolean {
  const cookie = request.cookies.get('dashboard_auth');
  if (!cookie?.value) return false;
  return verifyToken(cookie.value);
}
