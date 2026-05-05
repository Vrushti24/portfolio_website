import { useEffect, useState } from 'react'

export default function Toast({ message, visible }) {
  return (
    <div className={`toast${visible ? ' show' : ''}`} aria-live="polite">
      {message}
    </div>
  )
}
