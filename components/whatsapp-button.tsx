"use client"

import { useState } from "react"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)

  // Replace with your actual WhatsApp group/channel link
  const whatsappLink = "https://wa.me/+918102117024?text=Hi! I'm interested in learning more about Think About courses."

  const handleWhatsAppClick = () => {
    window.open(whatsappLink, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      <div className="relative">
        {/* Tooltip */}
        <div
          className={`absolute bottom-full right-0 mb-2 px-2 sm:px-3 py-1 sm:py-2 bg-slate-800 text-white text-xs sm:text-sm rounded-lg shadow-lg whitespace-nowrap transition-all duration-300 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
          }`}
        >
          Chat with us on WhatsApp
          <div className="absolute top-full right-3 sm:right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
        </div>

        {/* WhatsApp Button */}
        <Button
          onClick={handleWhatsAppClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 border-0 p-0 group touch-manipulation"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform duration-200" />

          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
          <div className="absolute inset-0 rounded-full bg-green-500 animate-pulse opacity-30"></div>
        </Button>

        {/* Online indicator */}
        <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full border-1 sm:border-2 border-white shadow-sm">
          <div className="w-full h-full bg-green-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
