import { useState, useEffect } from 'react'
import useScrollSpy from '../hooks/useScrollSpy'

const NAV_LINKS = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Writing', id: 'writing' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
]

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useScrollSpy(NAV_LINKS.map((l) => l.id))

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          background: scrolled ? 'rgba(6,6,8,0.85)' : 'rgba(6,6,8,0.4)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-display font-black text-lg tracking-tight flex items-center gap-1 select-none"
            aria-label="Back to top"
          >
            <span className="text-white">VS</span>
            <span style={{ color: '#FFE14D', fontSize: '0.5rem', lineHeight: 1 }}>●</span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`nav-link ${active === link.id ? 'active' : ''}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span
              className="block w-6 h-0.5 bg-white transition-all duration-300 origin-center"
              style={open ? { transform: 'rotate(45deg) translateY(8px)' } : {}}
            />
            <span
              className="block w-6 h-0.5 bg-white transition-all duration-300"
              style={open ? { opacity: 0 } : {}}
            />
            <span
              className="block w-6 h-0.5 bg-white transition-all duration-300 origin-center"
              style={open ? { transform: 'rotate(-45deg) translateY(-8px)' } : {}}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className="fixed inset-0 z-40 md:hidden transition-opacity duration-300"
        style={{
          background: 'rgba(6,6,8,0.97)',
          backdropFilter: 'blur(20px)',
          pointerEvents: open ? 'auto' : 'none',
          opacity: open ? 1 : 0,
        }}
        aria-hidden={!open}
      >
        <div className="flex flex-col justify-center items-center h-full gap-10">
          {NAV_LINKS.map((link, i) => (
            <button
              key={link.id}
              onClick={() => { scrollTo(link.id); setOpen(false) }}
              className="font-display font-black text-3xl text-white hover:text-primary transition-colors duration-200"
              style={{
                transitionDelay: open ? `${i * 60}ms` : '0ms',
                transform: open ? 'translateY(0)' : 'translateY(20px)',
                opacity: open ? 1 : 0,
                transition: `transform 0.4s ease ${i * 60}ms, opacity 0.4s ease ${i * 60}ms, color 0.2s ease`,
                color: active === link.id ? '#FFE14D' : undefined,
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
