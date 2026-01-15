"use client"

interface TechStackSectionProps {
  isVisible: boolean
}

export default function TechStackSection({ isVisible }: TechStackSectionProps) {
  const tools = [
    { name: "Next.js", description: "biar keliatan modern" },
    { name: "Tailwind", description: "biar cepet kelar" },
    { name: "Grafana", description: "biar grafiknya gerak" },
    { name: "Cloudflare", description: "biar aman dikit" },
    { name: "Docker", description: "biar gampang dipindah-pindah" },
  ]

  return (
    <section
      id="tech-stack"
      data-fade-in
      className={`py-24 px-4 border-t border-gray-800 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 tracking-tight">dipake apaan sih?</h2>

        <div className="max-w-2xl space-y-4 mb-12">
          {tools.map((tool, index) => (
            <div
              key={index}
              className={`transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <p className="font-medium">
                {tool.name} — <span className="text-gray-400">{tool.description}</span>
              </p>
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-500">toolsnya serius. niatnya santai.</p>
      </div>
    </section>
  )
}
