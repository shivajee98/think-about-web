"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 bg-slate-50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-800 leading-tight">
                Think
                <span className="block text-blue-900 animate-pulse">Beyond</span>
                <span className="block text-slate-600">Limits</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 max-w-lg">
                Unlock your potential with our innovative educational technology platform. Learn, grow, and succeed with
                personalized learning experiences.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-900/25"
              >
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-blue-900 hover:border-blue-800 text-blue-900 hover:bg-blue-900 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 transform hover:scale-105 bg-transparent"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-900">50K+</div>
                <div className="text-slate-500 text-sm sm:text-base">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-900">200+</div>
                <div className="text-slate-500 text-sm sm:text-base">Courses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-900">95%</div>
                <div className="text-slate-500 text-sm sm:text-base">Success Rate</div>
              </div>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-blue-800/10 rounded-3xl transform rotate-6"></div>
              <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-blue-900/10">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Educational Technology"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                  priority
                />
                <div className="absolute -top-4 -right-4 bg-blue-900 text-white px-4 py-2 rounded-full font-semibold transform rotate-12 shadow-lg">
                  New Courses!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
