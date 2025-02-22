/* eslint-disable */
"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { X } from "lucide-react"

export default function ConstructionWarning() {
  const [isVisible, setIsVisible] = useState(true)
  const [failedAttempts, setFailedAttempts] = useState(0)

  const handleClose = () => {
    if (failedAttempts < 2) {
      setFailedAttempts((prev) => prev + 1)
      // Shake animation will be triggered
    } else {
      setIsVisible(false)
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          className="fixed top-4 left-4 right-4 z-40 bg-yellow-400 text-black p-4 rounded-lg shadow-lg"
          style={{ maxWidth: "600px", margin: "0 auto" }}
          animate={
            failedAttempts < 2
              ? {
                  x: [-10, 10, -10, 10, 0],
                  transition: { duration: 0.4 },
                }
              : {}
          }
        >
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-xl font-bold mb-2 glitch-text">⚠️ SITE UNDER CONSTRUCTION</h2>
              <p className="text-sm">
                {failedAttempts === 0 && "Please come back later when the site is ready."}
                {failedAttempts === 1 && "ERROR: Unable to close warning. Please try again."}
                {failedAttempts === 2 && "FINAL WARNING: Are you sure you want to proceed?"}
              </p>
            </div>
            <button onClick={handleClose} className="p-1 hover:bg-yellow-500 rounded transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

