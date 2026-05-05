export default function Footer() {
  return (
    <footer className="py-10 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <p className="font-body text-sm" style={{ color: 'rgba(255,255,255,0.3)' }}>
        Designed &amp; built by{' '}
        <span style={{ color: '#FFE14D' }}>Vrushti Shah</span>
      </p>
      <p className="font-body text-xs mt-1.5" style={{ color: 'rgba(255,255,255,0.2)' }}>
        Made with React + ☕ · {new Date().getFullYear()}
      </p>
    </footer>
  )
}
