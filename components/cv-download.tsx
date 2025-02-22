"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { FileDown, Globe, Terminal } from "lucide-react"

export default function CVDownload() {
  const [isHovered, setIsHovered] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState<"es" | "en" | null>(null)
  const [showGlitch, setShowGlitch] = useState(false)

  const handleDownload = (language: "es" | "en") => {
    setSelectedLanguage(language)
    setShowGlitch(true)

    // Simular descarga con efecto glitch
    setTimeout(() => {
      setShowGlitch(false)
      // Aquí irían las URLs reales de los CVs
      const cvUrls = {
        es: "/cv-spanish.pdf",
        en: "/cv-english.pdf",
      }
      window.open(cvUrls[language], "_blank")
    }, 2000)
  }

  return (
    <div className="fixed bottom-8 right-8 z-30">
      <motion.div className="relative" onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)}>
        <motion.button
          className="bg-yellow-400 text-black p-4 rounded-full shadow-lg hover:bg-yellow-300 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FileDown className="w-6 h-6" />
        </motion.button>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.8 }}
              className="absolute bottom-full right-0 mb-2 bg-zinc-800 rounded-lg shadow-xl p-2 min-w-[200px]"
            >
              <div className="space-y-2">
                <button
                  onClick={() => handleDownload("es")}
                  className="w-full flex items-center gap-2 p-2 hover:bg-zinc-700 rounded transition-colors text-white"
                >
                  <Globe className="w-4 h-4" />
                  <span className="font-mono">Download CV (ES)</span>
                </button>
                <button
                  onClick={() => handleDownload("en")}
                  className="w-full flex items-center gap-2 p-2 hover:bg-zinc-700 rounded transition-colors text-white"
                >
                  <Globe className="w-4 h-4" />
                  <span className="font-mono">Download CV (EN)</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showGlitch && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            >
              <div className="text-center">
                <Terminal className="w-12 h-12 text-yellow-400 mx-auto mb-4 animate-spin" />
                <p className="text-yellow-400 font-mono animate-pulse">
                  Downloading {selectedLanguage === "es" ? "Spanish" : "English"} CV...
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

