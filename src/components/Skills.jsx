import { useRef, useEffect, useState } from 'react'
import { skillGroups, certifications } from '../data/skills'

const ACCENT = '#FFE14D'

function SkillGroup({ group, index }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el) } },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s ease ${index * 100}ms, transform 0.6s ease ${index * 100}ms`,
      }}
    >
      <div className="flex items-center gap-3 mb-4">
        <span
          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
          style={{ background: ACCENT, boxShadow: `0 0 6px rgba(255,225,77,0.6)` }}
        />
        <h3 className="font-display font-black text-xs text-white tracking-widest uppercase opacity-70">
          {group.label}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="pill cursor-default select-none transition-all duration-200"
            style={{
              background: 'rgba(255,255,255,0.05)',
              color: 'rgba(255,255,255,0.6)',
              border: '1px solid rgba(255,255,255,0.08)',
              fontSize: '0.8rem',
              padding: '0.35rem 0.9rem',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,225,77,0.1)'
              e.currentTarget.style.color = ACCENT
              e.currentTarget.style.borderColor = 'rgba(255,225,77,0.25)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
              e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <p className="section-label mb-3">Toolkit</p>
        <h2 className="font-display font-black text-3xl md:text-4xl text-white mb-12">Skills</h2>

        <div
          className="rounded-2xl p-8 md:p-10 space-y-10"
          style={{ background: '#13131A', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          {skillGroups.map((group, i) => <SkillGroup key={group.label} group={group} index={i} />)}
        </div>

        <div className="mt-8">
          <p className="section-label mb-4">Certifications & Awards</p>
          <div className="flex flex-wrap gap-3">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-body text-sm font-semibold"
                style={{ background: '#13131A', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.7)' }}
              >
                <span style={{ color: ACCENT }}>★</span>
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
