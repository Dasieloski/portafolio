/* eslint-disable */
"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Sparkles } from "lucide-react"

export default function HiddenEasterEgg() {
  const [sequence, setSequence] = useState<string[]>([])
  const [showEasterEgg, setShowEasterEgg] = useState(false)
  const correctSequence = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight"]

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newSequence = [...sequence, e.key]
      if (newSequence.length > correctSequence.length) {
        newSequence.shift()
      }
      setSequence(newSequence)

      if (newSequence.join("") === correctSequence.join("")) {
        setShowEasterEgg(true)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [sequence])

  return (
    <AnimatePresence>
      {showEasterEgg && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="fixed bottom-24 left-8 z-30 bg-yellow-400 text-black p-4 rounded-lg shadow-lg"
        >
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            <span className="font-mono text-sm">¡Easter egg encontrado! Código Konami activado</span>
          </div>
          <div className="mt-2 text-xs">
            Has desbloqueado el modo secreto. Presiona cualquier tecla para continuar...
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

