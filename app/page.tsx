"use client"

import { useState, useEffect } from "react"
import HeroSection from "@/components/hero-section"
import ProjectsSection from "@/components/projects-section"
import CurrentStatusSection from "@/components/current-status-section"
import TechStackSection from "@/components/tech-stack-section"
import DisclaimerSection from "@/components/disclaimer-section"
import FooterSection from "@/components/footer-section"

export default function Home() {
  const [isVisible, setIsVisible] = useState<string[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => [...new Set([...prev, entry.target.id])])
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll("[data-fade-in]").forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <main className="bg-black text-white min-h-screen">
      <HeroSection />
      <ProjectsSection isVisible={isVisible.includes("projects")} />
      <CurrentStatusSection />
      <DisclaimerSection />
      <TechStackSection isVisible={isVisible.includes("tech-stack")} />
      <FooterSection />
    </main>
  )
}
