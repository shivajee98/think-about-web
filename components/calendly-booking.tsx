"use client"

import { useState, useEffect } from "react"
import { Calendar, Clock, Video, Users } from "lucide-react"

export default function CalendlyBooking() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("calendly-booking")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="calendly-booking" className="py-20 px-4 bg-slate-50">
      <div className="container mx-auto max-w-6xl">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">Book a Meeting with Us</h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            Schedule a personalized consultation to discuss your learning goals and get expert guidance on your career
            path.
          </p>
        </div>

        {/* Features */}
        <div
          className={`mb-12 grid grid-cols-1 md:grid-cols-4 gap-6 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-blue-900/10">
            <Calendar className="w-12 h-12 text-blue-900 mx-auto mb-4" />
            <h3 className="font-semibold text-slate-800 mb-2">Easy Scheduling</h3>
            <p className="text-sm text-slate-600">Pick a time that works best for your schedule</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-blue-900/10">
            <Video className="w-12 h-12 text-blue-900 mx-auto mb-4" />
            <h3 className="font-semibold text-slate-800 mb-2">Video Consultation</h3>
            <p className="text-sm text-slate-600">Face-to-face meeting via Google Meet or Zoom</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-blue-900/10">
            <Users className="w-12 h-12 text-blue-900 mx-auto mb-4" />
            <h3 className="font-semibold text-slate-800 mb-2">Expert Guidance</h3>
            <p className="text-sm text-slate-600">Get advice from industry professionals</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-blue-900/10">
            <Clock className="w-12 h-12 text-blue-900 mx-auto mb-4" />
            <h3 className="font-semibold text-slate-800 mb-2">30 Min Session</h3>
            <p className="text-sm text-slate-600">Focused discussion tailored to your needs</p>
          </div>
        </div>

        {/* Calendly Embed */}
        <div
          className={`transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white rounded-lg shadow-lg border border-blue-900/10 overflow-hidden">
            <div className="p-6 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Schedule Your Consultation</h3>
              <p className="text-blue-100">Choose a convenient time slot and we'll send you the meeting details</p>
            </div>

            <div className="relative">
              <iframe
                src="https://calendly.com/pratyanshudevang/30min"
                width="100%"
                height="700"
                frameBorder="0"
                scrolling="no"
                className="min-h-[700px]"
                title="Schedule a meeting with Think About"
              />

              {/* Loading overlay */}
              <div
                className="absolute inset-0 bg-slate-50 flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300"
                id="calendly-loading"
              >
                <div className="text-center">
                  <div className="inline-flex space-x-2 mb-4">
                    <div className="w-3 h-3 bg-blue-900 rounded-full animate-bounce"></div>
                    <div
                      className="w-3 h-3 bg-blue-900 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-3 h-3 bg-blue-900 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                  <p className="text-slate-600">Loading calendar...</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div
          className={`mt-12 text-center transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-4xl mx-auto">
            <h4 className="font-semibold text-blue-900 mb-3">What to Expect</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-blue-800">
              <div>
                <strong>Before the Meeting:</strong>
                <p>You'll receive a confirmation email with the video call link and agenda</p>
              </div>
              <div>
                <strong>During the Meeting:</strong>
                <p>We'll discuss your goals, answer questions, and provide personalized recommendations</p>
              </div>
              <div>
                <strong>After the Meeting:</strong>
                <p>You'll get a follow-up email with resources and next steps</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
