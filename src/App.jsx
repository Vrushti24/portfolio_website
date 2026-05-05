import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Writing from './components/Writing'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />

      {/* Global background gradient mesh */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: -1 }}>
        <div
          style={{
            position: 'absolute',
            width: '800px',
            height: '800px',
            top: '-200px',
            right: '-200px',
            background: 'radial-gradient(circle, rgba(255,225,77,0.05) 0%, transparent 65%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '600px',
            height: '600px',
            bottom: '20%',
            left: '-100px',
            background: 'radial-gradient(circle, rgba(0,229,204,0.04) 0%, transparent 65%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '500px',
            height: '500px',
            top: '50%',
            right: '20%',
            background: 'radial-gradient(circle, rgba(255,51,102,0.04) 0%, transparent 65%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <main>
        <Hero />

        {/* Section divider */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }} />

        <About />

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }} />

        <Experience />

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }} />

        <Projects />

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }} />

        <Writing />

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }} />

        <Skills />

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }} />

        <Contact />
      </main>

      <Footer />
    </>
  )
}
