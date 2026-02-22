const store = new Map<string, { count: number; resetTime: number }>();

let lastCleanup = Date.now();
const CLEANUP_INTERVAL = 60_000;

function cleanup(now: number) {
  if (now - lastCleanup < CLEANUP_INTERVAL) return;
  lastCleanup = now;
  for (const [key, entry] of store) {
    if (now >= entry.resetTime) {
      store.delete(key);
    }
  }
}

interface RateLimitConfig {
  maxRequests: number;
  windowMs: number;
}

interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetTime: number;
}

export function rateLimit(
  ip: string,
  config: RateLimitConfig
): RateLimitResult {
  const now = Date.now();
  cleanup(now);

  const entry = store.get(ip);

  if (!entry || now >= entry.resetTime) {
    store.set(ip, { count: 1, resetTime: now + config.windowMs });
    return { allowed: true, remaining: config.maxRequests - 1, resetTime: now + config.windowMs };
  }

  entry.count++;

  if (entry.count > config.maxRequests) {
    return { allowed: false, remaining: 0, resetTime: entry.resetTime };
  }

  return { allowed: true, remaining: config.maxRequests - entry.count, resetTime: entry.resetTime };
}
