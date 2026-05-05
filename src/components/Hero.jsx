import useTypewriter from '../hooks/useTypewriter'

const ROLES = [
  'Software Engineer',
  'Full-Stack Developer',
  'Mobile Developer',
  'AI/ML Enthusiast',
]

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  const typed = useTypewriter(ROLES)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ paddingTop: '6rem' }}
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="orb-1 absolute rounded-full"
          style={{
            width: '600px',
            height: '600px',
            top: '-100px',
            left: '-150px',
            background: 'radial-gradient(circle, rgba(255,225,77,0.12) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="orb-2 absolute rounded-full"
          style={{
            width: '500px',
            height: '500px',
            top: '20%',
            right: '-100px',
            background: 'radial-gradient(circle, rgba(255,225,77,0.05) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="orb-3 absolute rounded-full"
          style={{
            width: '450px',
            height: '450px',
            bottom: '5%',
            left: '35%',
            background: 'radial-gradient(circle, rgba(255,225,77,0.04) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 w-full">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
            style={{
              background: 'rgba(0,229,204,0.1)',
              border: '1px solid rgba(0,229,204,0.25)',
              color: '#00E5CC',
            }}
          >
          </span>
        </div>

        {/* Giant name */}
        <h1 className="font-display font-black leading-[0.9] tracking-tight select-none">
          <span
            className="block text-white"
            style={{ fontSize: 'clamp(4rem, 14vw, 12rem)', lineHeight: 0.9 }}
          >
            VRUSHTI
          </span>
          <span
            className="block text-stroke"
            style={{ fontSize: 'clamp(4rem, 14vw, 12rem)', lineHeight: 0.9 }}
          >
            SHAH
          </span>
        </h1>

        {/* Typewriter subtitle */}
        <div
          className="mt-8 font-body text-lg md:text-2xl font-medium"
          style={{ color: 'rgba(255,255,255,0.55)', minHeight: '2rem' }}
        >
          <span style={{ color: '#FFE14D' }}>{typed}</span>
          <span className="cursor" aria-hidden="true" />
        </div>

        {/* Description */}
        <p
          className="mt-5 font-body text-base md:text-lg max-w-xl"
          style={{ color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}
        >
          MS Software Engineering Systems @ Northeastern University (April 2026).
          Building at the intersection of craft and ambition.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap gap-4">
          <button
            onClick={() => scrollTo('projects')}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-body font-semibold text-sm transition-all duration-300 hover:scale-105"
            style={{
              background: '#FFE14D',
              color: '#000',
              boxShadow: '0 0 20px rgba(255,225,77,0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 35px rgba(255,225,77,0.5)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 20px rgba(255,225,77,0.3)'
            }}
          >
            View Projects
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <a
            href="public/Vrushti_Shah_Resume_SDE_Role.pdf"
            download
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-body font-semibold text-sm transition-all duration-300 hover:scale-105"
            style={{
              border: '1px solid rgba(255,255,255,0.25)',
              color: 'rgba(255,255,255,0.85)',
              background: 'transparent',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'
              e.currentTarget.style.background = 'transparent'
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2v8M5 7l3 3 3-3M3 12h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Download Resume
          </a>
        </div>

        {/* Location badge */}
        <div className="mt-8 flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.35)' }}>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M8 1.5C5.51 1.5 3.5 3.51 3.5 6c0 3.75 4.5 8.5 4.5 8.5S12.5 9.75 12.5 6c0-2.49-2.01-4.5-4.5-4.5zM8 7.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill="currentColor"/>
          </svg>
          <span className="text-xs font-body">Boston, MA</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bounce-arrow flex flex-col items-center gap-1">
        <span className="text-xs font-body" style={{ color: 'rgba(255,255,255,0.3)' }}>scroll</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ color: 'rgba(255,255,255,0.3)' }}>
          <path d="M10 4v12M5 11l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  )
}
