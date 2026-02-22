'use client';

import { useEffect, useState } from 'react';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';

interface AnalyticsData {
  dailyViews: { date: string; count: number }[];
  topPages: { page: string; count: number }[];
  topReferrers: { referrer: string; count: number }[];
  topUserAgents: { user_agent: string; count: number }[];
}

export default function AnalyticsPage() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/dashboard/analytics')
      .then((r) => r.json())
      .then(setData)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <DashboardLayout>
      <h1 className="dashboard_page-title">Analytics</h1>

      {loading ? (
        <div className="loading">
          <div className="loading__spinner" />
        </div>
      ) : data ? (
        <>
          <h2 className="dashboard_section-title">Daily Page Views (Last 30 Days)</h2>
          <div className="dashboard_table-wrapper">
            <table className="dashboard_table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Views</th>
                </tr>
              </thead>
              <tbody>
                {data.dailyViews.map((row) => (
                  <tr key={row.date}>
                    <td>{row.date}</td>
                    <td>{row.count}</td>
                  </tr>
                ))}
                {data.dailyViews.length === 0 && (
                  <tr><td colSpan={2} className="dashboard_table-empty">No data yet</td></tr>
                )}
              </tbody>
            </table>
          </div>

          <h2 className="dashboard_section-title">Top Pages</h2>
          <div className="dashboard_table-wrapper">
            <table className="dashboard_table">
              <thead>
                <tr>
                  <th>Page</th>
                  <th>Views</th>
                </tr>
              </thead>
              <tbody>
                {data.topPages.map((row) => (
                  <tr key={row.page}>
                    <td>{row.page}</td>
                    <td>{row.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="dashboard_section-title">Top Referrers</h2>
          <div className="dashboard_table-wrapper">
            <table className="dashboard_table">
              <thead>
                <tr>
                  <th>Referrer</th>
                  <th>Views</th>
                </tr>
              </thead>
              <tbody>
                {data.topReferrers.map((row, i) => (
                  <tr key={i}>
                    <td>{row.referrer}</td>
                    <td>{row.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="dashboard_section-title">Top User Agents</h2>
          <div className="dashboard_table-wrapper">
            <table className="dashboard_table">
              <thead>
                <tr>
                  <th>User Agent</th>
                  <th>Views</th>
                </tr>
              </thead>
              <tbody>
                {data.topUserAgents.map((row, i) => (
                  <tr key={i}>
                    <td className="dashboard_table-ua">{row.user_agent}</td>
                    <td>{row.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <p>Failed to load analytics.</p>
      )}
    </DashboardLayout>
  );
}
