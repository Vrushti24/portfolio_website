import { useState, useRef, useEffect } from 'react'

const SUGGESTED = [
  "What's her current experience?",
  "Tell me about her AI projects",
  "What tech stack does she know?",
]

function ChatIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
        fill="#060608"
      />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M18 6L6 18M6 6l12 12"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function SendIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"
        stroke="#060608"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [hovering, setHovering] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100)
  }, [open])

  const send = async (text) => {
    const trimmed = text.trim()
    if (!trimmed || loading) return

    const userMsg = { role: 'user', content: trimmed }
    const updatedMessages = [...messages, userMsg]
    setMessages(updatedMessages)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedMessages.map(m => ({ role: m.role, content: m.content })),
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error ?? `HTTP ${res.status}`)
      setMessages(prev => [...prev, { role: 'assistant', content: data.text }])
    } catch (err) {
      console.error('Chat error:', err)
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: `Error: ${err.message ?? 'Something went wrong. Try again!'}` },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Chat panel */}
      {open && (
        <div
          style={{
            position: 'fixed',
            bottom: '92px',
            right: '24px',
            width: '360px',
            height: '520px',
            background: '#0D0D16',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '20px',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxShadow: '0 16px 64px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,225,77,0.06)',
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '16px 18px',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'rgba(255,225,77,0.03)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  background: '#FFE14D',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '11px',
                  fontWeight: 900,
                  color: '#060608',
                  fontFamily: 'Unbounded, sans-serif',
                  flexShrink: 0,
                }}
              >
                VS
              </div>
              <div>
                <div
                  style={{
                    color: '#fff',
                    fontSize: '13px',
                    fontWeight: 700,
                    fontFamily: 'Unbounded, sans-serif',
                    letterSpacing: '-0.01em',
                  }}
                >
                  Ask about Vrushti
                </div>
                <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '11px', marginTop: '1px' }}>
                  Powered by Llama 3.3
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: 'none',
                cursor: 'pointer',
                borderRadius: '8px',
                width: '30px',
                height: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <CloseIcon />
            </button>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              scrollbarWidth: 'none',
            }}
          >
            {messages.length === 0 && (
              <div>
                <p
                  style={{
                    color: 'rgba(255,255,255,0.4)',
                    fontSize: '13px',
                    lineHeight: '1.5',
                    marginBottom: '14px',
                  }}
                >
                  Hi! I know everything about Vrushti. Ask me about her experience, skills, or projects.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                  {SUGGESTED.map(q => (
                    <button
                      key={q}
                      onClick={() => send(q)}
                      style={{
                        background: 'rgba(255,225,77,0.07)',
                        border: '1px solid rgba(255,225,77,0.18)',
                        borderRadius: '20px',
                        color: '#FFE14D',
                        fontSize: '12px',
                        padding: '6px 13px',
                        cursor: 'pointer',
                        fontFamily: 'Plus Jakarta Sans, sans-serif',
                      }}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                <div
                  style={{
                    maxWidth: '82%',
                    padding: '10px 14px',
                    borderRadius:
                      m.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                    background: m.role === 'user' ? '#FFE14D' : '#1C1C2E',
                    color: m.role === 'user' ? '#060608' : 'rgba(255,255,255,0.85)',
                    fontSize: '13px',
                    lineHeight: '1.55',
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    whiteSpace: 'pre-wrap',
                  }}
                >
                  {m.content}
                </div>
              </div>
            ))}

            {loading && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div
                  style={{
                    padding: '10px 16px',
                    borderRadius: '16px 16px 16px 4px',
                    background: '#1C1C2E',
                    display: 'flex',
                    gap: '5px',
                    alignItems: 'center',
                  }}
                >
                  {[0, 1, 2].map(i => (
                    <div
                      key={i}
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: '#FFE14D',
                        opacity: 0.6,
                        animation: `pulse 1.2s ease-in-out ${i * 0.2}s infinite`,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div
            style={{
              padding: '12px 14px',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
            }}
          >
            <input
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  send(input)
                }
              }}
              placeholder="Ask about Vrushti..."
              style={{
                flex: 1,
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '10px',
                padding: '9px 13px',
                color: '#fff',
                fontSize: '13px',
                outline: 'none',
                fontFamily: 'Plus Jakarta Sans, sans-serif',
              }}
            />
            <button
              onClick={() => send(input)}
              disabled={loading || !input.trim()}
              style={{
                background: '#FFE14D',
                border: 'none',
                borderRadius: '10px',
                width: '36px',
                height: '36px',
                cursor: loading || !input.trim() ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                opacity: loading || !input.trim() ? 0.45 : 1,
                transition: 'opacity 0.15s',
              }}
            >
              <SendIcon />
            </button>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setOpen(o => !o)}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: '#FFE14D',
          border: 'none',
          cursor: 'pointer',
          zIndex: 10000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: hovering
            ? '0 6px 32px rgba(255,225,77,0.5)'
            : '0 4px 20px rgba(255,225,77,0.3)',
          transform: hovering ? 'scale(1.08)' : 'scale(1)',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
        aria-label="Chat with Vrushti's AI assistant"
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M18 6L6 18M6 6l12 12"
              stroke="#060608"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <ChatIcon />
        )}
      </button>

      <style>{`
        @keyframes pulse {
          0%, 80%, 100% { opacity: 0.3; transform: scale(0.85); }
          40% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </>
  )
}
