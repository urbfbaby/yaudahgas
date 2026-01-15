"use client"

export default function CurrentStatusSection() {
  return (
    <section className="py-24 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 tracking-tight">lagi ngapain?</h2>

        <div className="max-w-2xl">
          <p className="text-lg text-gray-400 mb-8">lagi jaga tiket sambil berharap user bales email.</p>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="inline-block w-3 h-3 rounded-full bg-green-500"></span>
              <span className="text-gray-300">aman</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-block w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className="text-gray-300">nunggu user</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-block w-3 h-3 rounded-full bg-red-500"></span>
              <span className="text-gray-300">SLA deg-degan</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
