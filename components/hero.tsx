"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16 sm:pt-20 px-4 bg-slate-50">
      <div className="container mx-auto max-w-7xl">
        {/* Main Hero Content - Centered */}
        <div className="text-center">
          <div
            className={`space-y-6 sm:space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-slate-800 leading-tight tracking-tight">
                Think
                <span className="block text-blue-900 animate-pulse">Beyond</span>
                <span className="block text-slate-600">Limits</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                Unlock your potential with our innovative educational technology platform. Learn, grow, and succeed with
                personalized learning experiences designed for the future.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-blue-900 hover:bg-blue-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-900/25"
              >
                Start Learning
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-2 border-blue-900 hover:border-blue-800 text-blue-900 hover:bg-blue-900 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-200 transform hover:scale-105 bg-transparent"
              >
                <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Watch Demo
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 pt-6 sm:pt-8 px-4 sm:px-0">
              <div className="text-center min-w-[80px]">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900">50K+</div>
                <div className="text-slate-500 text-xs sm:text-sm md:text-base">Students</div>
              </div>
              <div className="text-center min-w-[80px]">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900">200+</div>
                <div className="text-slate-500 text-xs sm:text-sm md:text-base">Courses</div>
              </div>
              <div className="text-center min-w-[80px]">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900">95%</div>
                <div className="text-slate-500 text-xs sm:text-sm md:text-base">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
