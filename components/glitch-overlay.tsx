"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function GlitchOverlay() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      className="fixed inset-0 bg-zinc-900 z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <div className="glitch-text text-6xl font-bold text-yellow-400" data-text="LOADING...">
        LOADING...
      </div>
      <style jsx>{`
        .glitch-text {
          position: relative;
          animation: glitch 1s infinite;
        }
        
        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .glitch-text::before {
          left: 2px;
          text-shadow: -2px 0 #ff0000;
          clip: rect(24px, 550px, 90px, 0);
          animation: glitch-anim 3s infinite linear alternate-reverse;
        }
        
        .glitch-text::after {
          left: -2px;
          text-shadow: -2px 0 #00ff00;
          clip: rect(85px, 550px, 140px, 0);
          animation: glitch-anim2 2.5s infinite linear alternate-reverse;
        }
        
        @keyframes glitch {
          2%, 64% { transform: translate(2px,0) skew(0deg); }
          4%, 60% { transform: translate(-2px,0) skew(0deg); }
          62% { transform: translate(0,0) skew(5deg); }
        }
        
        @keyframes glitch-anim {
          0% { clip: rect(51px, 9999px, 28px, 0); }
          20% { clip: rect(41px, 9999px, 76px, 0); }
          40% { clip: rect(16px, 9999px, 46px, 0); }
          60% { clip: rect(89px, 9999px, 29px, 0); }
          80% { clip: rect(90px, 9999px, 79px, 0); }
          100% { clip: rect(67px, 9999px, 18px, 0); }
        }
        
        @keyframes glitch-anim2 {
          0% { clip: rect(66px, 9999px, 97px, 0); }
          20% { clip: rect(89px, 9999px, 19px, 0); }
          40% { clip: rect(87px, 9999px, 93px, 0); }
          60% { clip: rect(10px, 9999px, 64px, 0); }
          80% { clip: rect(89px, 9999px, 44px, 0); }
          100% { clip: rect(31px, 9999px, 88px, 0); }
        }
      `}</style>
    </motion.div>
  )
}

