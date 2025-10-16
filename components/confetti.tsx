"use client"

import { useEffect, useState } from "react"

interface ConfettiPiece {
  id: number
  left: string
  animationDuration: string
  animationDelay: string
  backgroundColor: string
  size: number
}

export function Confetti() {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([])

  useEffect(() => {
    const colors = [
      "#a855f7", // purple
      "#ec4899", // pink
      "#f472b6", // light pink
      "#c084fc", // light purple
      "#ffffff", // white
    ]

    const pieces: ConfettiPiece[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${3 + Math.random() * 4}s`,
      animationDelay: `${Math.random() * 3}s`,
      backgroundColor: colors[Math.floor(Math.random() * colors.length)],
      size: 6 + Math.random() * 6,
    }))

    setConfetti(pieces)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute top-0 rounded-full opacity-70"
          style={{
            left: piece.left,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.backgroundColor,
            animation: `confetti-fall ${piece.animationDuration} linear infinite`,
            animationDelay: piece.animationDelay,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes confetti-fall {
          0% {
            transform: translateY(-10vh) rotate(0deg);
          }
          100% {
            transform: translateY(110vh) rotate(720deg);
          }
        }
      `}</style>
    </div>
  )
}
