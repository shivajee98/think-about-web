"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Target, Award, BookOpen } from "lucide-react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById("about")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: <Users className="w-8 h-8 text-blue-900" />,
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of real-world experience"
    },
    {
      icon: <Target className="w-8 h-8 text-blue-900" />,
      title: "Personalized Learning",
      description: "Customized learning paths tailored to your career goals and skill level"
    },
    {
      icon: <Award className="w-8 h-8 text-blue-900" />,
      title: "Industry Recognition",
      description: "Certificates and skills recognized by top companies and organizations"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-blue-900" />,
      title: "Comprehensive Curriculum",
      description: "Complete courses covering all aspects of professional development"
    }
  ]

  const achievements = [
    "5000+ successful career transformations",
    "95% job placement rate within 6 months",
    "50+ industry partnerships",
    "24/7 student support and mentorship"
  ]

  return (
    <section id="about" className="py-20 px-4 bg-slate-50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              About Think About
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              We're dedicated to transforming careers through comprehensive professional development programs. 
              Our mission is to bridge the gap between academic learning and industry requirements.
            </p>
            
            <div className="space-y-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-900 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">{achievement}</span>
                </div>
              ))}
            </div>

            <Button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 font-semibold">
              Learn More About Us
            </Button>
          </div>

          {/* Image */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600&text=About+Think+About"
                alt="About Think About"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Why Choose Think About?</h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We provide comprehensive support and resources to ensure your success in every step of your career journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-blue-900 mb-3">{feature.title}</h4>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
