"use client"

export default function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-16 sm:py-24">
      <div className="max-w-2xl w-full text-center">
        {/* Updated headline */}
        <h1 className="text-6xl sm:text-7xl font-bold mb-6 tracking-tight">nyari apa lu?</h1>

        {/* Updated subtext */}
        <p className="text-lg sm:text-xl text-gray-400 mb-12 leading-relaxed max-w-xl mx-auto">
          kalau nemu error, berarti nemu jati diri.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={scrollToProjects}
            className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors duration-200 font-medium"
          >
            liat yang kebetulan jadi
          </button>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-white text-black hover:bg-gray-200 transition-colors duration-200 font-medium"
          >
            github
          </a>
        </div>

        <p className="text-sm text-gray-500">yang serius ada di tempat lain.</p>
      </div>
    </section>
  )
}
