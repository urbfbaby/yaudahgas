"use client"

import ProjectCard from "./project-card"

const projects = [
  {
    name: "Personal Website",
    description:
      "versi diri saya yang paling jinak di internet.\ndibikin biar kalau disuruh kirim portfolio, nggak panik.\nisinya serius dikit, sisanya pura-pura rapi.",
    status: "✅ hidup dan tidak memalukan",
    href: "https://yaelahgas.my.id",
    linkText: "yaelahgas.my.id",
  },
  {
    name: "Monitoring Tracker",
    description:
      "dashboard buat mantau hal-hal yang katanya penting.\ngrafik jalan terus biar keliatan sehat, padahal alert baru bunyi pas semua orang panik.\ndibikin biar nggak cuma buka-buka tab dan nebak-nebak.",
    status: "🧪 jalan terus, dipercaya secukupnya",
  },
  {
    name: "Ticket Tracker",
    description:
      "alat bertahan hidup customer service yang hidupnya di ConnectWise.\nisinya tiket 'waiting on customer', SLA yang deg-degan, dan follow up ke-3 yang masih di-read doang.\ndibikin biar nggak cuma ngandelin dashboard bawaan dan ingatan manusia.",
    status: "🚧 nunggu user reply sejak entah kapan",
  },
  {
    name: "Random API",
    description:
      "endpoint ada. dokumentasi menyusul.\nkadang kepake buat testing, kadang cuma buat buktiin bisa.\nerror? ya namanya juga random.",
    status: "🧪 tidak jelas tapi hidup",
  },
]

interface ProjectsSectionProps {
  isVisible: boolean
}

export default function ProjectsSection({ isVisible }: ProjectsSectionProps) {
  return (
    <section
      id="projects"
      data-fade-in
      className={`py-24 px-4 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-3 tracking-tight">yang kebetulan jadi</h2>
        <p className="text-gray-400 mb-16 text-lg">sisanya masih wacana, kopi, dan deadline.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
