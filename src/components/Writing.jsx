import { useRef, useEffect, useState } from 'react'
import { articles } from '../data/articles'

const ACCENT = '#FFE14D'

const SOURCE_LABEL = { medium: 'Medium', substack: 'Substack' }
const SOURCE_CTA = { medium: 'Read on Medium →', substack: 'Read on Substack →' }

function ArticleCard({ article, index }) {
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
    <a
      ref={ref}
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      className="card block p-7 group"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.6s ease ${index * 150}ms, transform 0.6s ease ${index * 150}ms, box-shadow 0.3s ease, border-color 0.3s ease`,
        borderLeft: '3px solid rgba(255,255,255,0.07)',
        textDecoration: 'none',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.02) translateY(-2px)'
        e.currentTarget.style.boxShadow = '0 16px 50px rgba(255,225,77,0.09)'
        e.currentTarget.style.borderLeftColor = ACCENT
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = ''
        e.currentTarget.style.boxShadow = ''
        e.currentTarget.style.borderLeftColor = 'rgba(255,255,255,0.07)'
      }}
    >
      <div className="flex items-center gap-2 mb-4">
        <span
          className="text-xs font-semibold font-body px-2 py-0.5 rounded-full"
          style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.45)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          {SOURCE_LABEL[article.source] || 'Article'}
        </span>
      </div>

      <h3 className="font-display font-black text-lg text-white leading-tight mb-3">
        {article.title}
      </h3>

      <p className="font-body text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.55)' }}>
        {article.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {article.tags.map((tag) => (
          <span
            key={tag}
            className="pill"
            style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.45)', border: '1px solid rgba(255,255,255,0.08)', fontSize: '0.7rem' }}
          >
            {tag}
          </span>
        ))}
      </div>

      <span
        className="inline-flex items-center gap-1.5 text-sm font-semibold font-body transition-colors duration-200"
        style={{ color: 'rgba(255,255,255,0.45)' }}
      >
        ✍️ {SOURCE_CTA[article.source] || 'Read →'}
      </span>
    </a>
  )
}

export default function Writing() {
  return (
    <section id="writing" className="section-pad">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <p className="section-label mb-3">Published Work</p>
        <h2 className="font-display font-black text-3xl md:text-4xl text-white mb-3">Writing</h2>
        <p className="font-body text-sm mb-12" style={{ color: 'rgba(255,255,255,0.35)' }}>
          Technical articles on{' '}
          <a href="https://medium.com/@vrushtishah24" target="_blank" rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-white" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Medium
          </a>
          {' '}and essays on{' '}
          <a href="https://substack.com/@vrushti24" target="_blank" rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-white" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Substack
          </a>
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article, i) => <ArticleCard key={article.id} article={article} index={i} />)}
        </div>
      </div>
    </section>
  )
}
