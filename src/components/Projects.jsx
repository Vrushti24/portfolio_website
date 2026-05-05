import { useState, useRef, useEffect } from 'react'
import { LOCAL_META, MANUAL_PROJECTS, fallbackProjects } from '../data/projects'

const ACCENT = '#FFE14D'

function GitHubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function StarIcon({ size = 13 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el) } },
      { threshold: 0.08 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="card group flex flex-col p-6 h-full"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.6s ease ${(index % 4) * 80}ms, transform 0.6s ease ${(index % 4) * 80}ms, box-shadow 0.3s ease, border-color 0.3s ease`,
        borderLeft: '3px solid rgba(255,255,255,0.07)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.02) translateY(-2px)'
        e.currentTarget.style.boxShadow = `0 12px 40px rgba(255,225,77,0.09)`
        e.currentTarget.style.borderLeftColor = ACCENT
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = ''
        e.currentTarget.style.boxShadow = ''
        e.currentTarget.style.borderLeftColor = 'rgba(255,255,255,0.07)'
      }}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="font-display font-black text-base text-white leading-tight">
          {project.displayName}
        </h3>
        <div className="flex items-center gap-2 flex-shrink-0">
          {project.stars > 0 && (
            <span className="inline-flex items-center gap-1 text-xs font-body" style={{ color: 'rgba(255,255,255,0.35)' }}>
              <StarIcon />{project.stars}
            </span>
          )}
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-200 hover:scale-110"
              style={{ color: 'rgba(255,255,255,0.35)' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = ACCENT }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.35)' }}
              aria-label={`View ${project.displayName} on GitHub`}
            >
              <GitHubIcon size={18} />
            </a>
          ) : (
            <span
              className="text-xs font-body px-2 py-0.5 rounded-full"
              style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.3)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              private
            </span>
          )}
        </div>
      </div>

      {project.language && (
        <span
          className="inline-block mb-3 text-xs font-body font-semibold px-2 py-0.5 rounded-full w-fit"
          style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.45)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          {project.language}
        </span>
      )}

      <p className="font-body text-sm leading-relaxed flex-1" style={{ color: 'rgba(255,255,255,0.55)' }}>
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mt-4">
        {project.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="pill"
            style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.45)', border: '1px solid rgba(255,255,255,0.08)', fontSize: '0.7rem' }}
          >
            {tag}
          </span>
        ))}
        {project.tags.length > 4 && (
          <span className="pill" style={{ background: 'rgba(255,255,255,0.03)', color: 'rgba(255,255,255,0.25)', fontSize: '0.7rem' }}>
            +{project.tags.length - 4}
          </span>
        )}
      </div>
    </div>
  )
}

function mapGitHubRepo(repo) {
  const meta = LOCAL_META[repo.name]
  return {
    id: repo.id,
    name: repo.name,
    displayName: meta.displayName || repo.name,
    description: meta.description,
    tags: meta.tags,
    language: repo.language || null,
    github: repo.html_url,
    stars: repo.stargazers_count || 0,
  }
}

const INITIAL_VISIBLE = 8

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    fetch('https://api.github.com/users/Vrushti24/repos?sort=pushed&per_page=100&type=public')
      .then((r) => r.json())
      .then((repos) => {
        if (!Array.isArray(repos)) throw new Error()
        const fromGitHub = repos
          .filter((r) => !r.fork && LOCAL_META[r.name])
          .map(mapGitHubRepo)
        setProjects([...fromGitHub, ...MANUAL_PROJECTS])
      })
      .catch(() => setProjects([...fallbackProjects, ...MANUAL_PROJECTS]))
      .finally(() => setLoading(false))
  }, [])

  const visible = expanded ? projects : projects.slice(0, INITIAL_VISIBLE)

  return (
    <section id="projects" className="section-pad">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <p className="section-label mb-3">Work</p>
        <h2 className="font-display font-black text-3xl md:text-4xl text-white mb-4">Projects</h2>
        <p className="font-body text-sm mb-12" style={{ color: 'rgba(255,255,255,0.3)' }}>
          Fetched live from{' '}
          <a href="https://github.com/Vrushti24" target="_blank" rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-white"
            style={{ color: 'rgba(255,255,255,0.45)' }}>
            github.com/Vrushti24
          </a>
        </p>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="card p-6 h-52 animate-pulse" style={{ animationDelay: `${i * 80}ms` }} />
            ))}
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {visible.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
            </div>

            {projects.length > INITIAL_VISIBLE && (
              <div className="flex justify-center mt-10">
                <button
                  onClick={() => setExpanded((v) => !v)}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-body font-semibold text-sm transition-all duration-300 hover:scale-105"
                  style={{ background: ACCENT, color: '#000', boxShadow: expanded ? 'none' : '0 0 20px rgba(255,225,77,0.2)' }}
                >
                  {expanded ? <>Show less <span>↑</span></> : <>View all {projects.length} projects <span>↓</span></>}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}
