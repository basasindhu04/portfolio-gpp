"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { about } from "@/lib/data"
import { Code2, Server, Database, Cpu } from "lucide-react"

const highlights = [
  {
    icon: Server,
    title: "Backend Development",
    description: "Building robust APIs and microservices",
  },
  {
    icon: Database,
    title: "System Design",
    description: "Architecting scalable solutions",
  },
  {
    icon: Cpu,
    title: "Distributed Systems",
    description: "High availability & fault tolerance",
  },
  {
    icon: Code2,
    title: "Problem Solving",
    description: "500+ DSA problems solved",
  },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {about}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I love diving deep into complex problems, whether it&apos;s optimizing
                database queries, designing fault-tolerant systems, or implementing
                efficient algorithms. My goal is to build software that&apos;s not just
                functional, but performant and maintainable.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="group p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 glow-primary-hover"
                >
                  <item.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
