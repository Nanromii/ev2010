"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Confetti } from "@/components/confetti"

export default function Page() {
  const [showMessage, setShowMessage] = useState(false)
  const [buttonScale, setButtonScale] = useState(1)
  const [badButtonPosition, setBadButtonPosition] = useState({ x: 0, y: 0 })
  const [goodButtonPosition, setGoodButtonPosition] = useState({ x: 0, y: 0 })

  const handleGoodButton = () => {
    setShowMessage(true)
  }

  const handleBadButton = () => {
    setButtonScale((prev) => Math.min(prev + 0.15, 20))

    const maxX = window.innerWidth * 0.3
    const maxY = window.innerHeight * 0.2

    setBadButtonPosition({
      x: (Math.random() - 0.5) * maxX,
      y: (Math.random() - 0.5) * maxY,
    })

    setGoodButtonPosition({
      x: (Math.random() - 0.5) * maxX,
      y: (Math.random() - 0.5) * maxY,
    })
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-100 to-purple-200">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url(/background.jpg?height=1080&width=1920&query=cute+pink+purple+hearts+and+stars+pattern+kawaii+style)`,
          animation: "subtle-zoom 20s ease-in-out infinite",
        }}
      />

      <div className="absolute top-10 left-10 w-32 h-32 opacity-90 z-0 animate-move-1">
        <img src="/kuromi1.jpg" alt="Kuromi" className="w-full h-full object-contain drop-shadow-lg" />
      </div>
      <div className="absolute top-20 right-20 w-40 h-40 opacity-90 z-0 animate-move-2">
        <img src="/kuromi2.jpg" alt="Kuromi with heart" className="w-full h-full object-contain drop-shadow-lg" />
      </div>
      <div className="absolute bottom-20 left-1/4 w-36 h-36 opacity-90 z-0 animate-move-3">
        <img src="/kuromi3.jpg" alt="Kuromi happy" className="w-full h-full object-contain drop-shadow-lg" />
      </div>
      <div className="absolute bottom-32 right-1/4 w-32 h-32 opacity-90 z-0 animate-move-4">
        <img src="/kuromi4.jpg" alt="Kuromi winking" className="w-full h-full object-contain drop-shadow-lg" />
      </div>
      <div className="absolute top-1/2 left-10 w-28 h-28 opacity-90 z-0 animate-move-5">
        <img src="/kuromi5.jpg" alt="Kuromi" className="w-full h-full object-contain drop-shadow-lg" />
      </div>
      <div className="absolute top-1/3 right-10 w-28 h-28 opacity-90 z-0 animate-move-6">
        <img src="/kuromi6.jpg" alt="Kuromi" className="w-full h-full object-contain drop-shadow-lg" />
      </div>

      <Confetti />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-400/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-20 w-40 h-40 bg-pink-400/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-purple-300/20 rounded-full blur-3xl animate-float" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/30" />

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <div className="mb-8 space-y-4">
          <div className="inline-block px-6 py-2 bg-purple-600/90 backdrop-blur-sm rounded-full mb-4 shadow-lg">
            <span className="text-white font-semibold text-sm tracking-wider uppercase">20 Tháng 10</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-6 text-balance leading-tight drop-shadow-sm">
            Chúc Mừng Ngày Phụ Nữ Việt Nam
          </h1>
          <p className="text-xl md:text-2xl text-gray-800 font-medium text-pretty max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
            Chúc bạn luôn xinh đẹp, vui vẻ và làm gì cũng suôn sẻ u3u
            Học giỏi không phải chúc vì các bạn giỏi vcl rồi :c
          </p>
        </div>

        <div className="relative flex flex-col gap-5 items-center justify-center min-h-[240px] mt-12">
          <Button
            onClick={handleGoodButton}
            className="relative z-20 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold px-8 py-7 text-base md:text-lg transition-all duration-600 ease-out whitespace-normal h-auto rounded-2xl shadow-xl hover:shadow-2xl border-2 border-white/50"
            style={{
              transform: `scale(${buttonScale}) translate(${goodButtonPosition.x}px, ${goodButtonPosition.y}px)`,
              transformOrigin: "center",
            }}
          >
            Mình nhận lời chúc và cảm ơn bạn Quang Nam đẹp trai
          </Button>

          <Button
            onClick={handleBadButton}
            variant="outline"
            className="relative z-10 bg-white/95 backdrop-blur-sm hover:bg-white text-gray-700 hover:text-gray-900 font-semibold px-8 py-7 text-base md:text-lg transition-all duration-600 ease-out whitespace-normal h-auto rounded-2xl shadow-lg hover:shadow-xl border-2 border-purple-200"
            style={{
              transform: `scale(${Math.max(1 - (buttonScale - 1) * 0.4, 0.1)}) translate(${badButtonPosition.x}px, ${badButtonPosition.y}px)`,
              opacity: Math.max(1 - (buttonScale - 1) * 0.3, 0.3),
            }}
          >
            Mình cũng nhận lời chúc và bạn Quang Nam xấu vcl
          </Button>
        </div>
      </div>

      {showMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md">
          <div className="bg-white rounded-3xl p-12 shadow-2xl animate-in zoom-in duration-300 border-4 border-purple-200">
            <div className="text-center space-y-4">
              <div className="flex justify-center mb-4">
                <video
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kuromi-d9N0NFKuDVEObHNTvI3rrWDkb8YUDr.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-64 h-64 object-contain rounded-2xl"
                />
              </div>
              <p className="text-5xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Hehe
              </p>
              <p className="text-gray-600 text-lg">Cảm ơn bạn đã chọn đúng, nếu bạn quên thì tôi họ Vũ nhé=)</p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes subtle-zoom {
          0%, 100% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.05) rotate(1deg);
          }
        }
        
        @keyframes move-1 {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(200px, 150px) rotate(15deg);
          }
          50% {
            transform: translate(100px, 300px) rotate(-10deg);
          }
          75% {
            transform: translate(-100px, 200px) rotate(20deg);
          }
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
        }
        
        @keyframes move-2 {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(-150px, 200px) rotate(-20deg);
          }
          50% {
            transform: translate(-250px, 100px) rotate(15deg);
          }
          75% {
            transform: translate(-100px, -50px) rotate(-15deg);
          }
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
        }
        
        @keyframes move-3 {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(150px, -100px) rotate(10deg);
          }
          50% {
            transform: translate(300px, -200px) rotate(-20deg);
          }
          75% {
            transform: translate(200px, -50px) rotate(15deg);
          }
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
        }
        
        @keyframes move-4 {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(-200px, -150px) rotate(-15deg);
          }
          50% {
            transform: translate(-100px, -250px) rotate(20deg);
          }
          75% {
            transform: translate(50px, -100px) rotate(-10deg);
          }
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
        }
        
        @keyframes move-5 {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(250px, -50px) rotate(25deg);
          }
          50% {
            transform: translate(150px, 100px) rotate(-15deg);
          }
          75% {
            transform: translate(300px, 50px) rotate(10deg);
          }
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
        }
        
        @keyframes move-6 {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(-180px, 120px) rotate(-25deg);
          }
          50% {
            transform: translate(-280px, -80px) rotate(18deg);
          }
          75% {
            transform: translate(-150px, 180px) rotate(-12deg);
          }
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
        }
        
        .animate-move-1 {
          animation: move-1 20s ease-in-out infinite;
        }
        .animate-move-2 {
          animation: move-2 25s ease-in-out infinite;
        }
        .animate-move-3 {
          animation: move-3 22s ease-in-out infinite;
        }
        .animate-move-4 {
          animation: move-4 24s ease-in-out infinite;
        }
        .animate-move-5 {
          animation: move-5 23s ease-in-out infinite;
        }
        .animate-move-6 {
          animation: move-6 21s ease-in-out infinite;
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
