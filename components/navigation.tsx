"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function Navigation() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const navItems = [
    { id: "about", label: "SYSTEM.ABOUT" },
    { id: "projects", label: "PROJECTS.EXE" },
    { id: "contact", label: "CONTACT.BAT" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-30 bg-zinc-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <motion.div
            className="text-xl font-mono text-yellow-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            {"<DASIEL/>"}
          </motion.div>
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5 }}
              >
                <a
                  href={`#${item.id}`}
                  className="font-mono text-sm relative group"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <span className={`transition-colors ${hoveredItem === item.id ? "text-yellow-400" : "text-white"}`}>
                    {item.label}
                  </span>
                  <motion.span
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-400"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: hoveredItem === item.id ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

