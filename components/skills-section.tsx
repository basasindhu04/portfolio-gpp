"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { skills } from "@/lib/data"

const skillCategories = [
  { key: "languages", label: "Languages", color: "from-red-500 to-orange-500" },
  { key: "backend", label: "Backend", color: "from-primary to-red-400" },
  { key: "coreCS", label: "Core CS", color: "from-orange-500 to-yellow-500" },
  { key: "systems", label: "Systems", color: "from-red-600 to-primary" },
  { key: "databases", label: "Databases", color: "from-primary to-orange-400" },
  { key: "tools", label: "Tools", color: "from-red-400 to-primary" },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 relative bg-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Technical <span className="text-primary">Skills</span>
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 rounded-xl blur transition-opacity duration-300" style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }} />
                <div className="relative p-6 rounded-xl bg-card border border-border group-hover:border-primary/30 transition-colors duration-300">
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-gradient-to-r ${category.color} text-white`}>
                    {category.label}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills[category.key as keyof typeof skills].map(
                      (skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{
                            duration: 0.3,
                            delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          }}
                          className="px-3 py-1.5 text-sm bg-muted rounded-lg text-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                        >
                          {skill}
                        </motion.span>
                      )
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
