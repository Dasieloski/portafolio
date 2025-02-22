/* eslint-disable */
"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Terminal } from "lucide-react"
import TextScramble from "./text-scramble"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [isRevealed, setIsRevealed] = useState(false)

  const scrambleTexts = ["FullStack Developer", "React Specialist", "UI/UX Enthusiast", "Problem Solver"]

  const codeSnippet = `
function Developer() {
  const skills = [
    "React", "Next.js",
    "TypeScript", "Node.js",
    "Tailwind CSS", "Postgres","Nest.js",
    "Docker", "CSS", "HTML"
  ]
  
  const passion = "Building amazing web experiences"
  
  return (
    <Developer 
      skills={skills}
      passion={passion}
    />
  )
}
  `.trim()

  return (
    <section ref={ref} id="about" className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="grid md:grid-cols-2 gap-8 items-center"
      >
        <div className="space-y-4">
          <motion.h2
            className="text-4xl font-bold text-yellow-400"
            initial={{ x: -50 }}
            animate={isInView ? { x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            SYSTEM.ABOUT
          </motion.h2>
          <div className="space-y-2">
            {scrambleTexts.map((text, index) => (
              <TextScramble
                key={text}
                text={text}
                className="block text-lg text-gray-300 hover:text-yellow-400 transition-colors cursor-default"
              />
            ))}
          </div>
          <motion.p
            className="text-gray-300"
            initial={{ x: -50 }}
            animate={isInView ? { x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {isRevealed ? (
              "Frontend developer with a passion for creating interactive and responsive web applications. Specialized in React and modern JavaScript frameworks."
            ) : (
              <span className="text-red-400 animate-pulse">
                ERROR: Content corrupted. Click terminal to recover data.
              </span>
            )}
          </motion.p>
          <motion.button
            onClick={() => setIsRevealed(true)}
            className={`p-2 rounded ${isRevealed ? "bg-green-500" : "bg-red-500"} hover:opacity-80 transition-opacity`}
            initial={{ x: -50 }}
            animate={isInView ? { x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Terminal className="w-5 h-5" />
          </motion.button>
        </div>
        <div className="bg-zinc-800 p-4 rounded-lg">
          <pre className="font-mono text-sm text-gray-300 overflow-x-auto">
            <code>{codeSnippet}</code>
          </pre>
        </div>
      </motion.div>
    </section>
  )
}

