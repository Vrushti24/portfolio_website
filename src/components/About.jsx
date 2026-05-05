import useInView from '../hooks/useInView'
import useCountUp from '../hooks/useCountUp'

const stats = [
  { value: '15', suffix: '+', label: 'Apps Shipped' },
  { value: '4', suffix: '', label: 'WCAG-Compliant Sites' },
  { value: '3', suffix: '+', label: 'Industry Internships' },
]

function StatCounter({ value, suffix, label }) {
  const [ref, count] = useCountUp(value)
  return (
    <div ref={ref} className="text-center">
      <div
        className="font-display font-black text-4xl md:text-5xl"
        style={{ color: '#FFE14D' }}
      >
        {count}{suffix}
      </div>
      <div className="mt-1 font-body text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
        {label}
      </div>
    </div>
  )
}

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="section-pad">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <p className="section-label mb-10">About Me</p>

        <div
          ref={ref}
          className="grid md:grid-cols-2 gap-16 items-center reveal"
          style={inView ? { opacity: 1, transform: 'none' } : {}}
        >
          {/* Avatar column */}
          <div className="flex justify-center md:justify-start order-2 md:order-1">
            <div className="relative">
              {/* Photo frame */}
              <div
                className="w-64 h-64 md:w-80 md:h-80 rounded-3xl relative overflow-hidden"
                style={{
                  border: '1px solid rgba(255,255,255,0.10)',
                  boxShadow: '0 0 60px rgba(255,225,77,0.10), 0 0 120px rgba(255,51,102,0.06)',
                }}
              >
                <img
                  src="/headshot.jpg"
                  alt="Vrushti Shah"
                  className="w-full h-full object-cover object-top"
                />
                {/* Subtle gradient overlay at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1/4"
                  style={{ background: 'linear-gradient(to top, rgba(6,6,8,0.5), transparent)' }}
                />
              </div>

              {/* Floating skill badge */}
              <div
                className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl text-xs font-semibold font-body"
                style={{
                  background: '#13131A',
                  border: '1px solid rgba(255,225,77,0.3)',
                  color: '#FFE14D',
                  boxShadow: '0 0 20px rgba(255,225,77,0.1)',
                }}
              >
                Boston, MA 📍
              </div>
            </div>
          </div>

          {/* Text column */}
          <div className="order-1 md:order-2">
            <h2
              className="font-display font-black text-3xl md:text-4xl text-white mb-6 leading-tight"
            >
              Hi, I'm Vrushti
              <span style={{ color: '#FFE14D' }}>.</span>
            </h2>

            <div className="space-y-4 font-body text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
              <p>
                I'm a software engineer who genuinely loves building things. My journey has taken me across the full stack: shipping production features on{' '}
                <span className="text-white font-medium">Onshape</span> (a cloud CAD platform used by millions of engineers worldwide), building{' '}
                <span className="text-white font-medium">15+ mobile apps</span> end-to-end at Firebolt, and rebuilding four{' '}
                <span className="text-white font-medium">accessibility-first research websites</span> for Dr. Mona Minkara's lab at Northeastern — because great software should work for everyone.
              </p>
              <p>
                These days I'm exploring the edges of what's possible with{' '}
                <span style={{ color: '#00E5CC' }} className="font-medium">agentic AI</span> — multi-agent pipelines, LLM-powered developer tools, and systems that think a few steps ahead.
              </p>
              <p>
                I thrive at the intersection of ambition and craft. Whether it's a mobile app, a distributed system, or an AI pipeline — I care deeply about getting it right.
              </p>
            </div>
          </div>
        </div>

        {/* Stat counters */}
        <div
          className="mt-16 grid grid-cols-3 gap-8 py-10 rounded-2xl"
          style={{
            background: '#13131A',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          {stats.map((s) => (
            <StatCounter key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
