"use client"

import { useState } from "react"

export default function FooterSection() {
  const [showTooltip, setShowTooltip] = useState(false)
  const [showAlert, setShowAlert] = useState(false)

  const handleClick = () => {
    setShowAlert(true)
    setTimeout(() => setShowAlert(false), 3000)
  }

  return (
    <footer className="border-t border-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center space-y-2">
        <p className="text-gray-400">dibikin sambil nunggu user reply.</p>
        <div className="relative">
          <span
            className="cursor-pointer inline-block"
            tabIndex={0}
            role="button"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            onFocus={() => setShowTooltip(true)}
            onBlur={() => setShowTooltip(false)}
            onClick={handleClick}
            onKeyDown={(e) => e.key === "Enter" && handleClick()}
          >
            <p className="text-sm text-gray-600">© yaudahgas.dev — Rizky Bagas</p>
            {showTooltip && (
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-700 text-gray-100 text-xs whitespace-nowrap rounded opacity-100 transition-opacity pointer-events-none">
                jangan di klik plisssssss
              </span>
            )}
          </span>
          {showAlert && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-2 bg-gray-700 text-gray-100 text-xs rounded whitespace-nowrap animate-pulse">
              gw ngomong jangaan diklik, orang gada apa apa juga
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}
