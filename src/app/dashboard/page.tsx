'use client';

import { useEffect, useState } from 'react';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import StatsCard from '../../components/dashboard/StatsCard';

interface Stats {
  pageViews: { total: number; today: number };
  visitors: { total: number; today: number };
  chats: { total: number };
  groqTokens: { total: number; today: number };
  mem0Calls: { total: number; today: number };
  recentActivity: { page: string; visitor_id: string; created_at: string }[];
}

export default function DashboardPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/dashboard/stats')
      .then((r) => r.json())
      .then(setStats)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <DashboardLayout>
      <h1 className="dashboard_page-title">Overview</h1>

      {loading ? (
        <div className="loading">
          <div className="loading__spinner" />
        </div>
      ) : stats ? (
        <>
          <div className="dashboard_grid">
            <StatsCard
              icon="bx bx-show"
              title="Page Views"
              value={stats.pageViews.total}
              subtitle={`${stats.pageViews.today} today`}
            />
            <StatsCard
              icon="bx bx-user"
              title="Unique Visitors"
              value={stats.visitors.total}
              subtitle={`${stats.visitors.today} today`}
            />
            <StatsCard
              icon="bx bx-chat"
              title="Chat Conversations"
              value={stats.chats.total}
            />
            <StatsCard
              icon="bx bx-coin-stack"
              title="Groq Tokens"
              value={stats.groqTokens.total.toLocaleString()}
              subtitle={`${stats.groqTokens.today.toLocaleString()} today`}
            />
            <StatsCard
              icon="bx bx-brain"
              title="Mem0 Calls"
              value={stats.mem0Calls.total}
              subtitle={`${stats.mem0Calls.today} today`}
            />
          </div>

          <h2 className="dashboard_section-title">Recent Activity</h2>
          <div className="dashboard_table-wrapper">
            <table className="dashboard_table">
              <thead>
                <tr>
                  <th>Page</th>
                  <th>Visitor</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {stats.recentActivity.map((item, i) => (
                  <tr key={i}>
                    <td>{item.page}</td>
                    <td className="dashboard_table-mono">{item.visitor_id?.slice(0, 8) || '—'}</td>
                    <td>{new Date(item.created_at).toLocaleString()}</td>
                  </tr>
                ))}
                {stats.recentActivity.length === 0 && (
                  <tr>
                    <td colSpan={3} className="dashboard_table-empty">No activity yet</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <p>Failed to load stats.</p>
      )}
    </DashboardLayout>
  );
}
