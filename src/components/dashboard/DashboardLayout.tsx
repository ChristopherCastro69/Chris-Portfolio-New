'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

const NAV_ITEMS = [
  { href: '/dashboard', icon: 'bx bx-home', label: 'Overview' },
  { href: '/dashboard/chats', icon: 'bx bx-chat', label: 'Chats' },
  { href: '/dashboard/analytics', icon: 'bx bx-bar-chart-alt-2', label: 'Analytics' },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/dashboard/login');
  };

  return (
    <div className="dashboard">
      <aside className={`dashboard_sidebar ${sidebarOpen ? 'dashboard_sidebar--open' : ''}`}>
        <div className="dashboard_sidebar-header">
          <h2 className="dashboard_sidebar-title">Dashboard</h2>
          <button
            className="dashboard_sidebar-close"
            onClick={() => setSidebarOpen(false)}
          >
            <i className="bx bx-x"></i>
          </button>
        </div>
        <nav className="dashboard_nav">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`dashboard_nav-link ${pathname === item.href ? 'dashboard_nav-link--active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                router.push(item.href);
                setSidebarOpen(false);
              }}
            >
              <i className={item.icon}></i>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </aside>

      {sidebarOpen && (
        <div className="dashboard_overlay" onClick={() => setSidebarOpen(false)} />
      )}

      <main className="dashboard_main">
        <header className="dashboard_topbar">
          <button
            className="dashboard_menu-toggle"
            onClick={() => setSidebarOpen(true)}
          >
            <i className="bx bx-menu"></i>
          </button>
          <div className="dashboard_topbar-spacer" />
          <button className="dashboard_logout" onClick={handleLogout}>
            <i className="bx bx-log-out"></i>
            <span>Logout</span>
          </button>
        </header>
        <div className="dashboard_content">{children}</div>
      </main>
    </div>
  );
}
