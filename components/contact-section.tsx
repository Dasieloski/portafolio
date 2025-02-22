"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Send } from "lucide-react"

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [isGlitching, setIsGlitching] = useState(false)
  const [messageStatus, setMessageStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessageStatus("sending")
    setIsGlitching(true)

    // Simulate sending message
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setMessageStatus("sent")
    setIsGlitching(false)
  }

  return (
    <section ref={ref} id="contact" className="relative">
      <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} className="max-w-xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-yellow-400 mb-8 text-center"
          initial={{ y: 50 }}
          animate={isInView ? { y: 0 } : {}}
        >
          CONTACT.BAT
        </motion.h2>
        <div className="bg-zinc-800 p-6 rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-mono mb-2">USER.NAME</label>
              <input
                type="text"
                className="w-full bg-zinc-900 border border-zinc-700 rounded p-2 text-white focus:border-yellow-400 focus:outline-none transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-mono mb-2">USER.EMAIL</label>
              <input
                type="email"
                className="w-full bg-zinc-900 border border-zinc-700 rounded p-2 text-white focus:border-yellow-400 focus:outline-none transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-mono mb-2">MESSAGE.TXT</label>
              <textarea
                className="w-full bg-zinc-900 border border-zinc-700 rounded p-2 text-white focus:border-yellow-400 focus:outline-none transition-colors h-32"
                required
              />
            </div>
            <button
              type="submit"
              disabled={messageStatus === "sending" || messageStatus === "sent"}
              className={`w-full p-3 rounded font-mono transition-colors flex items-center justify-center gap-2 ${
                messageStatus === "sent"
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-yellow-400 hover:bg-yellow-500 text-black"
              } ${isGlitching ? "animate-glitch" : ""}`}
            >
              <Send className="w-4 h-4" />
              {messageStatus === "idle" && "EXECUTE SEND.EXE"}
              {messageStatus === "sending" && "PROCESSING..."}
              {messageStatus === "sent" && "MESSAGE SENT SUCCESSFULLY"}
              {messageStatus === "error" && "ERROR: RETRY SEND.EXE"}
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  )
}

