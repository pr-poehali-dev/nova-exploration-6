export function Logo({ className = "", size = 40 }: { className?: string; size?: number }) {
  const h = size
  const w = size * 1.9

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 76 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Hexagon emblem */}
      <polygon
        points="20,2 34,2 40,12 34,22 20,22 14,12"
        fill="#166534"
        stroke="#22c55e"
        strokeWidth="1"
      />
      {/* Leaf shape inside hex */}
      <path
        d="M27 7 C27 7 33 10 33 15 C33 18 30 19.5 27 19 C24 19.5 21 18 21 15 C21 10 27 7 27 7Z"
        fill="#4ade80"
      />
      <line x1="27" y1="7" x2="27" y2="19" stroke="#166534" strokeWidth="1" />
      <line x1="21.5" y1="11" x2="32.5" y2="14.5" stroke="#166534" strokeWidth="0.7" />
      {/* Small bug — crossed */}
      <circle cx="31" cy="9" r="2.5" fill="#0a0a0a" opacity="0.6" />
      <line x1="29.2" y1="7.2" x2="32.8" y2="10.8" stroke="#4ade80" strokeWidth="1" strokeLinecap="round" />
      <line x1="32.8" y1="7.2" x2="29.2" y2="10.8" stroke="#4ade80" strokeWidth="1" strokeLinecap="round" />

      {/* Company name */}
      <text x="44" y="12" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="700" fill="#ffffff" textAnchor="middle">ЭКО</text>
      <text x="44" y="21" fontFamily="Arial, sans-serif" fontSize="7" fontWeight="400" fill="#4ade80" textAnchor="middle">КОМФОРТ</text>
    </svg>
  )
}
