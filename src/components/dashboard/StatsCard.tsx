'use client';

interface StatsCardProps {
  icon: string;
  title: string;
  value: string | number;
  subtitle?: string;
}

export default function StatsCard({ icon, title, value, subtitle }: StatsCardProps) {
  return (
    <div className="dashboard_card">
      <i className={`${icon} dashboard_card-icon`}></i>
      <h3 className="dashboard_card-value">{value}</h3>
      <p className="dashboard_card-title">{title}</p>
      {subtitle && <span className="dashboard_card-subtitle">{subtitle}</span>}
    </div>
  );
}
