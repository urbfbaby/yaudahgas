"use client"

interface ProjectCardProps {
  name: string
  description: string
  status: string
  href?: string
  linkText?: string
}

export default function ProjectCard({ name, description, status, href, linkText }: ProjectCardProps) {
  return (
    <div className="p-6 border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <h3 className="text-xl font-semibold mb-4">{name}</h3>

      <p className="text-gray-400 mb-4 text-sm leading-relaxed whitespace-pre-line">{description}</p>

      {href && linkText && (
        <div className="mb-4">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline text-sm transition-colors"
          >
            {linkText}
          </a>
        </div>
      )}

      <div className="inline-block px-3 py-1 text-xs text-gray-400 border border-gray-800 rounded">{status}</div>
    </div>
  )
}
