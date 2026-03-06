export function Logo({ className = "", size = 40 }: { className?: string; size?: number }) {
  const h = size
  const w = size * 2.2

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 88 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Hexagon emblem */}
      <polygon
        points="20,1 35,1 42,13 35,25 20,25 13,13"
        fill="#14532d"
        stroke="#22c55e"
        strokeWidth="1.2"
      />

      {/* Cockroach body */}
      <ellipse cx="27" cy="14" rx="5" ry="7" fill="#4ade80" />
      {/* Head */}
      <ellipse cx="27" cy="7.5" rx="3" ry="2.5" fill="#4ade80" />
      {/* Body segment line */}
      <line x1="27" y1="9" x2="27" y2="21" stroke="#14532d" strokeWidth="0.8" />
      <line x1="22.2" y1="12" x2="31.8" y2="12" stroke="#14532d" strokeWidth="0.6" />
      <line x1="22.2" y1="15" x2="31.8" y2="15" stroke="#14532d" strokeWidth="0.6" />
      <line x1="22.2" y1="18" x2="31.8" y2="18" stroke="#14532d" strokeWidth="0.6" />

      {/* Antennae */}
      <line x1="25" y1="6" x2="20" y2="2" stroke="#4ade80" strokeWidth="0.9" strokeLinecap="round" />
      <line x1="29" y1="6" x2="34" y2="2" stroke="#4ade80" strokeWidth="0.9" strokeLinecap="round" />

      {/* Left legs */}
      <line x1="22.5" y1="11" x2="16" y2="9" stroke="#4ade80" strokeWidth="0.9" strokeLinecap="round" />
      <line x1="22.5" y1="11" x2="16" y2="9.5" stroke="#4ade80" strokeWidth="0.9" strokeLinecap="round" />
      <line x1="22" y1="14" x2="15" y2="13" stroke="#4ade80" strokeWidth="0.9" strokeLinecap="round" />
      <line x1="22" y1="17.5" x2="15.5" y2="17" stroke="#4ade80" strokeWidth="0.9" strokeLinecap="round" />
      <line x1="22" y1="17.5" x2="15" y2="19" stroke="#4ade80" strokeWidth="0.9" strokeLinecap="round" />

      {/* Right legs */}
      <line x1="31.5" y1="11" x2="38" y2="9" stroke="#4ade80" strokeWidth="0.9" strokeLinecap="round" />
      <line x1="32" y1="14" x2="39" y2="13" stroke="#4ade80" strokeWidth="0.9" strokeLinecap="round" />
      <line x1="32" y1="17.5" x2="38.5" y2="17" stroke="#4ade80" strokeWidth="0.9" strokeLinecap="round" />
      <line x1="32" y1="17.5" x2="39" y2="19" stroke="#4ade80" strokeWidth="0.9" strokeLinecap="round" />

      {/* Tail */}
      <line x1="27" y1="21" x2="24" y2="25" stroke="#4ade80" strokeWidth="0.9" strokeLinecap="round" />
      <line x1="27" y1="21" x2="30" y2="25" stroke="#4ade80" strokeWidth="0.9" strokeLinecap="round" />

      {/* Company name */}
      <text x="65" y="14" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="700" fill="#ffffff" textAnchor="middle">ЭКО</text>
      <text x="65" y="24" fontFamily="Arial, sans-serif" fontSize="7.5" fontWeight="400" fill="#4ade80" textAnchor="middle">КОМФОРТ</text>
    </svg>
  )
}
