/* eslint-disable */
"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { AlertTriangle } from "lucide-react"

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [revealedProjects, setRevealedProjects] = useState<number[]>([])

  const projects = [
    {
      title: "Project Alpha",
      description: "A web-based e-commerce application dedicated to tattoo supplies and supplements",
      image: "/MK.png?height=200&width=300",
      link: "https://mktattoo.vercel.app/",
    },
    {
      title: "Project Beta",
      description: "A classic Sudoku game",
      image: "/sudoku.png?height=200&width=300",
      link: "https://sudokumaritza.vercel.app/",
    },
    {
      title: "Project Gamma",
      description: "A gym website that manages clients, trainers, and memberships",
      image: "/gymvictoria.png?height=200&width=300",
      link: "https://gymvictoria.vercel.app/",
    },
    {
      title: "Project Delta",
      description: "A 99-store website for a variety of products.",
      image: "/99store.png?height=200&width=300",
      link: "https://99store.vercel.app/",
    },
    {
      title: "Project Epsilon",
      description: "A basic task management website.",
      image: "/basictasks.png?height=200&width=300",
      link: "https://basictasks.vercel.app/",
    },
    {
      title: "Project Zeta",
      description: "A pharmacy website for the sale of all types of veterinary products",
      image: "/valea.png?height=200&width=300",
      link: "https://valea.vercel.app/",
    },
    {
      title: "Project Eta",
      description: "A website for the sale of motorcycle products, inventory management, and a POS (Point of Sale) system.",
      image: "/reinier.png?height=200&width=300",
      link: "https://reinierstore.vercel.app/",
    },
    {
      title: "Project Theta",
      description: "A gym trainer's website",
      image: "/coach.png?height=200&width=300",
      link: "https://alain-coach.vercel.app/",
    },
    {
      title: "Project Iota",
      description: "A professional chauffeur service website",
      image: "/driver.png?height=200&width=300",
      link: "https://alain-driver.vercel.app/",
    },

  ]

  const revealProject = (index: number) => {
    setRevealedProjects((prev) => [...prev, index])
  }

  return (
    <section ref={ref} id="projects" className="relative">
      <motion.h2
        className="text-4xl font-bold text-yellow-400 mb-8"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
      >
        PROJECTS.EXE
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="group relative"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.2 }}
          >
            <div
              className={`relative overflow-hidden rounded-lg ${
                revealedProjects.includes(index) ? "border-green-500" : "border-red-500"
              } border-2`}
            >
              {!revealedProjects.includes(index) && (
                <div
                  className="absolute inset-0 bg-zinc-900/80 backdrop-blur-sm flex items-center justify-center cursor-pointer z-10"
                  onClick={() => revealProject(index)}
                >
                  <div className="text-center">
                    <AlertTriangle className="w-8 h-8 text-red-500 mx-auto mb-2 animate-pulse" />
                    <p className="text-red-500 text-sm">Click to decrypt project data</p>
                  </div>
                </div>
              )}
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full aspect-video object-cover"
              />
              <div className="p-4 bg-zinc-800">
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-block mt-4 text-yellow-400 hover:text-yellow-300 transition-colors"
                >
                  View Project →
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

