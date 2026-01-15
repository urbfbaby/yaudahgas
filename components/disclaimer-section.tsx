"use client"

export default function DisclaimerSection() {
  const points = [
    "tidak semua yang ada di sini dipake di production",
    "grafik naik bukan berarti bisnis naik",
    "kalau error, berarti lagi belajar",
  ]

  return (
    <section className="py-24 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto max-w-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 tracking-tight">catatan kecil</h2>

        <ul className="space-y-3">
          {points.map((point, index) => (
            <li key={index} className="text-gray-400 text-sm flex gap-3">
              <span className="text-gray-600 flex-shrink-0">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
