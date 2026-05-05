import { useRef, useEffect, useState } from 'react'
import { experience } from '../data/experience'

const ACCENT = '#FFE14D'

function TimelineCard({ item, index }) {
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
      className="relative flex gap-6 md:gap-10"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.6s ease ${index * 120}ms, transform 0.6s ease ${index * 120}ms`,
      }}
    >
      {/* Dot + connector */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className="w-3.5 h-3.5 rounded-full border-2 flex-shrink-0 mt-1.5"
          style={{ borderColor: ACCENT, background: '#060608', boxShadow: `0 0 10px rgba(255,225,77,0.4)` }}
        />
        {index < experience.length - 1 && (
          <div className="w-px flex-1 mt-2 min-h-[3rem]" style={{ background: 'rgba(255,255,255,0.07)' }} />
        )}
      </div>

      {/* Card */}
      <div
        className="card flex-1 p-6 mb-8 cursor-default"
        style={{ borderLeft: `3px solid rgba(255,255,255,0.07)`, transition: 'box-shadow 0.3s ease, border-color 0.3s ease, transform 0.3s ease' }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 8px 40px rgba(255,225,77,0.08)'
          e.currentTarget.style.borderLeftColor = ACCENT
          e.currentTarget.style.transform = 'translateY(-2px)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = ''
          e.currentTarget.style.borderLeftColor = 'rgba(255,255,255,0.07)'
          e.currentTarget.style.transform = ''
        }}
      >
        <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
          <div>
            <h3 className="font-display font-black text-lg text-white">{item.role}</h3>
            <p className="font-body font-semibold text-sm mt-0.5" style={{ color: ACCENT }}>
              {item.company}
            </p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span
              className="font-body text-xs px-3 py-1 rounded-full flex-shrink-0"
              style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              {item.duration}
            </span>
            {item.location && (
              <span className="font-body text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
                {item.location}
              </span>
            )}
          </div>
        </div>

        <p className="font-body text-sm leading-relaxed mt-3 mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>
          {item.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="pill"
              style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.45)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <p className="section-label mb-3">Career</p>
        <h2 className="font-display font-black text-3xl md:text-4xl text-white mb-12">Experience</h2>
        <div>
          {experience.map((item, i) => <TimelineCard key={item.id} item={item} index={i} />)}
        </div>
      </div>
    </section>
  )
}
