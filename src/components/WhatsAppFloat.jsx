import { useState, useEffect } from 'react'

const WA_NUMBER = '923324258602'
const WA_URL    = `https://wa.me/${WA_NUMBER}`

export default function WhatsAppFloat() {
  const [pulse, setPulse] = useState(false)

  useEffect(() => {
    const id = setInterval(() => {
      setPulse(true)
      setTimeout(() => setPulse(false), 700)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <div style={{
      position:       'sticky',
      bottom:         '24px',
      zIndex:         9999,
      display:        'flex',
      justifyContent: 'flex-end',
      padding:        '0 24px',
      pointerEvents:  'none',
      marginTop:      '-82px',
    }}>
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      style={{
        width:          '58px',
        height:         '58px',
        borderRadius:   '50%',
        background:     '#25d366',
        boxShadow:      '0 6px 24px rgba(37,211,102,0.55)',
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        textDecoration: 'none',
        pointerEvents:  'auto',
        transition:     'transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.12)'
        e.currentTarget.style.boxShadow = '0 10px 36px rgba(37,211,102,0.75)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)'
        e.currentTarget.style.boxShadow = '0 6px 24px rgba(37,211,102,0.55)'
      }}
    >
      {/* Sonar ring */}
      {pulse && (
        <span style={{
          position:      'absolute',
          inset:         0,
          borderRadius:  '50%',
          background:    'rgba(37,211,102,0.5)',
          animation:     'wa-ping 0.7s ease-out forwards',
          pointerEvents: 'none',
        }} />
      )}

      {/* Official WhatsApp logo */}
      <svg width="32" height="32" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#fff"
          d="M4.9 43.3l2.7-9.9C5.9 30.7 5 27.4 5 24 5 13.5 13.5 5 24 5s19 8.5 19 19-8.5 19-19 19c-3.3 0-6.4-.8-9.1-2.3L4.9 43.3z"
        />
        <path
          fill="#25d366"
          d="M24 7c-9.4 0-17 7.6-17 17 0 3.1.8 6 2.3 8.6l.5.8-1.9 6.9 7.1-1.9.8.4C18.1 40.2 21 41 24 41c9.4 0 17-7.6 17-17S33.4 7 24 7z"
        />
        <path
          fill="#fff"
          d="M19.3 16c-.4-.9-.8-.9-1.1-.9h-.9c-.3 0-.8.1-1.2.6-.4.4-1.6 1.6-1.6 3.8s1.7 4.4 1.9 4.7c.2.3 3.3 5.3 8.1 7.2 4 1.6 4.8 1.3 5.7 1.2.9-.1 2.8-1.1 3.2-2.3.4-1.1.4-2.1.3-2.3-.1-.2-.4-.3-.8-.5s-2.8-1.4-3.2-1.5c-.4-.2-.7-.2-1 .2-.3.4-1.2 1.5-1.4 1.8-.3.3-.5.4-.9.1-.4-.2-1.8-.7-3.4-2.1-1.3-1.1-2.1-2.5-2.4-2.9-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.8.2-.2.3-.4.4-.7.1-.3 0-.6-.1-.8-.1-.3-1-2.5-1.4-3.3z"
        />
      </svg>

      <style>{`
        @keyframes wa-ping {
          0%   { transform: scale(1);   opacity: 0.7; }
          100% { transform: scale(2.4); opacity: 0;   }
        }
      `}</style>
    </a>
    </div>
  )
}
