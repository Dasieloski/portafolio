/* eslint-disable */
"use client"

import { useEffect, useState } from "react"

interface TextScrambleProps {
  text: string
  className?: string
}

export default function TextScramble({ text, className = "" }: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text)
  const [isScrambling, setIsScrambling] = useState(false)

  const chars = "!<>-_\\/[]{}—=+*^?#________"

  useEffect(() => {
    let frameRequest: number
    const frame = 0
    let queue: string[] = []
    let resolve: (() => void) | null = null

    const scramble = () => {
      let output = ""
      let complete = 0

      for (let i = 0, n = text.length; i < n; i++) {
        const char = text[i]
        if (char === " ") {
          output += char
          complete++
        } else if (queue[i] === char) {
          output += char
          complete++
        } else {
          output += chars[Math.floor(Math.random() * chars.length)]
          queue[i] = char
        }
      }

      setDisplayText(output)

      if (complete === text.length && resolve) {
        resolve()
      } else {
        frameRequest = requestAnimationFrame(scramble)
      }
    }

    const startScramble = () => {
      setIsScrambling(true)
      queue = []
      new Promise<void>((res) => {
        resolve = res
        frameRequest = requestAnimationFrame(scramble)
      }).then(() => {
        setIsScrambling(false)
        resolve = null
      })
    }

    const handleMouseEnter = () => {
      if (!isScrambling) {
        startScramble()
      }
    }

    const element = document.getElementById(`scramble-${text}`)
    if (element) {
      element.addEventListener("mouseenter", handleMouseEnter)
    }

    return () => {
      if (element) {
        element.removeEventListener("mouseenter", handleMouseEnter)
      }
      cancelAnimationFrame(frameRequest)
    }
  }, [text, isScrambling])

  return (
    <span id={`scramble-${text}`} className={className}>
      {displayText}
    </span>
  )
}

