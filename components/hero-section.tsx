"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { personalInfo, typingTexts } from "@/lib/data"
import { NeuralNetworkBackground } from "./neural-network-background"

export function HeroSection() {
  const typeSequence = typingTexts.flatMap((text) => [text, 2000])
  const ref = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  // Parallax values
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const opacity = useTransform(scrollYProgress, [0.5, 1], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background with Parallax */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
        <NeuralNetworkBackground />
      </motion.div>

      <motion.div style={{ y: yContent, opacity }} className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        
        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-6 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>

              <span className="text-sm text-primary font-medium">
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-4 leading-tight"
            >
              {personalInfo.name}
            </motion.h1>

            {/* Typing Text */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-6"
            >
              <span className="text-gray-400">{"I'm a "}</span>

              <span className="text-[#FF5733]">
                <TypeAnimation
                  sequence={typeSequence}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  cursor={true}
                />
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
            >
              Backend-focused developer specializing in scalable systems,
              distributed architectures, and solving complex problems with
              elegant solutions.
            </motion.p>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-black/40 border border-red-500/20 hover:border-red-500 hover:text-red-500 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-black/40 border border-red-500/20 hover:border-red-500 hover:text-red-500 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 rounded-xl bg-black/40 border border-red-500/20 hover:border-red-500 hover:text-red-500 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative flex items-end justify-center">
              {/* IMAGE */}
              <img
                src="/profile.png"
                alt="Basa Sindhu Latha"
                className="
                  relative z-10
                  w-[420px]
                  lg:w-[580px]
                  h-auto
                  object-contain
                "
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Down */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-400 hover:text-[#FF5733] transition-colors"
          >
            <span className="text-xs mb-2">Scroll Down</span>
            <ArrowDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}