"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X, Download, Terminal } from "lucide-react"
import { navItems } from "@/lib/data"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = navItems.map((item) =>
        item.href.replace("#", "")
      )

      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)

        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2 text-lg font-bold text-foreground"
            whileHover={{ scale: 1.05 }}
          >
            <Terminal className="w-5 h-5 text-primary" />
            <span className="text-primary">Sindhu.dev</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300",
                  activeSection === item.href.replace("#", "")
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {item.label}
              </a>
            ))}

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              download
              className="ml-4 flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold bg-primary text-black hover:scale-105 hover:shadow-[0_0_25px_rgba(255,0,0,0.5)] transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border"
        >
          <div className="px-4 py-4 space-y-2">

            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "block px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300",
                  activeSection === item.href.replace("#", "")
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}

            {/* Mobile Resume Button */}
            <a
              href="/resume.pdf"
              download
              className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-black bg-primary rounded-lg hover:scale-105 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>

          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}