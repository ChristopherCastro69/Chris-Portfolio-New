import { DATA } from '@/data/resume';
import Link from 'next/link';

export const metadata = {
  title: 'Projects | Christopher Castro',
  description: 'Archive of all projects and contributions by Christopher Castro.',
};

export default function ProjectsPage() {
  return (
    <main className="container" style={{ paddingTop: '6rem', paddingBottom: '4rem' }}>
      <Link href="/" style={{ color: 'var(--title-color)', marginBottom: '2rem', display: 'inline-block' }}>
        &larr; Back
      </Link>
      <h1 className="section_title" style={{ marginBottom: '2rem' }}>All Projects</h1>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 'var(--small-font-size)' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid rgba(0,0,0,0.1)', textAlign: 'left' }}>
              <th style={{ padding: '0.75rem', color: 'var(--title-color)' }}>Year</th>
              <th style={{ padding: '0.75rem', color: 'var(--title-color)' }}>Title</th>
              <th style={{ padding: '0.75rem', color: 'var(--title-color)' }}>Tech</th>
              <th style={{ padding: '0.75rem', color: 'var(--title-color)' }}>Links</th>
            </tr>
          </thead>
          <tbody>
            {DATA.projects.items.map((project) => (
              <tr key={project.id} style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                <td style={{ padding: '0.75rem', whiteSpace: 'nowrap', color: 'var(--text-color)' }}>
                  {project.category}
                </td>
                <td style={{ padding: '0.75rem', fontWeight: 500, color: 'var(--title-color)' }}>
                  {project.title}
                </td>
                <td style={{ padding: '0.75rem', color: 'var(--text-color)' }}>
                  {project.lang}
                </td>
                <td style={{ padding: '0.75rem' }}>
                  <a href={project.link} target="_blank" rel="noreferrer" style={{ marginRight: '0.75rem', color: 'var(--title-color)' }}>
                    <i className="bx bx-link-external"></i>
                  </a>
                  <a href={project.repo} target="_blank" rel="noreferrer" style={{ color: 'var(--title-color)' }}>
                    <i className="bx bxl-github"></i>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
