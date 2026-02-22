'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function PageViewTracker() {
  const pathname = usePathname();
  const tracked = useRef(false);

  useEffect(() => {
    if (tracked.current) return;
    if (pathname.startsWith('/dashboard')) return;

    tracked.current = true;

    let visitorId = localStorage.getItem('portfolio_chat_user_id');
    if (!visitorId) {
      visitorId = crypto.randomUUID();
      localStorage.setItem('portfolio_chat_user_id', visitorId);
    }

    fetch('/api/analytics/pageview', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        page: pathname,
        referrer: document.referrer,
        visitor_id: visitorId,
      }),
    }).catch(() => {});
  }, [pathname]);

  return null;
}
