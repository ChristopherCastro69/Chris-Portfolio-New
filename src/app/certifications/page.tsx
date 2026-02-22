import { DATA } from '@/data/resume';
import Link from 'next/link';

export const metadata = {
  title: 'Certifications | Christopher Castro',
  description: 'Education and certifications earned by Christopher Castro.',
};

export default function CertificationsPage() {
  const certs = DATA.qualifications.education.filter((e) => e.image);

  return (
    <main className="container" style={{ paddingTop: '6rem', paddingBottom: '4rem' }}>
      <Link href="/" style={{ color: 'var(--title-color)', marginBottom: '2rem', display: 'inline-block' }}>
        &larr; Back
      </Link>
      <h1 className="section_title" style={{ marginBottom: '2rem' }}>Certifications</h1>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 'var(--small-font-size)' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid rgba(0,0,0,0.1)', textAlign: 'left' }}>
              <th style={{ padding: '0.75rem', color: 'var(--title-color)' }}>Date</th>
              <th style={{ padding: '0.75rem', color: 'var(--title-color)' }}>Title</th>
              <th style={{ padding: '0.75rem', color: 'var(--title-color)' }}>Provider</th>
            </tr>
          </thead>
          <tbody>
            {certs.map((cert) => (
              <tr key={cert.id} style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                <td style={{ padding: '0.75rem', whiteSpace: 'nowrap', color: 'var(--text-color)' }}>
                  {cert.calendar}
                </td>
                <td style={{ padding: '0.75rem', fontWeight: 500, color: 'var(--title-color)' }}>
                  {cert.title}
                </td>
                <td style={{ padding: '0.75rem', color: 'var(--text-color)' }}>
                  {cert.subtitle}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
