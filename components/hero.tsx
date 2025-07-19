"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, Clock, Users, Star, Code, Database, Palette, Brain } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const featuredCourses = [
    {
      title: "Full Stack Development",
      description: "Master modern web development with React, Node.js, and databases",
      icon: Code,
      duration: "12 weeks",
      students: 1250,
      rating: 4.9,
      price: "₹29,999",
      level: "Beginner to Advanced",
      color: "bg-blue-500",
    },
    {
      title: "Data Science & AI",
      description: "Learn Python, machine learning, and data analysis techniques",
      icon: Brain,
      duration: "16 weeks",
      students: 890,
      rating: 4.8,
      price: "₹34,999",
      level: "Intermediate",
      color: "bg-purple-500",
    },
    {
      title: "Database Management",
      description: "Master SQL, NoSQL, and database design principles",
      icon: Database,
      duration: "8 weeks",
      students: 650,
      rating: 4.7,
      price: "₹19,999",
      level: "Beginner",
      color: "bg-green-500",
    },
    {
      title: "UI/UX Design",
      description: "Create stunning user experiences with modern design tools",
      icon: Palette,
      duration: "10 weeks",
      students: 720,
      rating: 4.9,
      price: "₹24,999",
      level: "Beginner to Intermediate",
      color: "bg-pink-500",
    },
  ]

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-20 px-4 bg-slate-50">
      <div className="container mx-auto">
        {/* Main Hero Content - Centered */}
        <div className="text-center mb-16">
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-800 leading-tight">
                Think
                <span className="block text-blue-900 animate-pulse">Beyond</span>
                <span className="block text-slate-600">Limits</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
                Unlock your potential with our innovative educational technology platform. Learn, grow, and succeed with
                personalized learning experiences designed for the future.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 pt-8">
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
        </div>

        {/* Featured Courses Cards */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2">Featured Courses</h2>
            <p className="text-slate-600">Start your learning journey with our most popular courses</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCourses.map((course, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 transform hover:-translate-y-2 bg-white border-blue-900/10 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${(index + 6) * 100}ms` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2 rounded-lg ${course.color} bg-opacity-10`}>
                      <course.icon className={`w-6 h-6 ${course.color.replace("bg-", "text-")}`} />
                    </div>
                    <Badge className="bg-blue-900 hover:bg-blue-800 text-white text-xs">{course.level}</Badge>
                  </div>
                  <CardTitle className="text-lg text-slate-800 group-hover:text-blue-900 transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 text-sm">{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-xs text-slate-500">
                      <Clock className="w-3 h-3 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center text-xs text-slate-500">
                      <Users className="w-3 h-3 mr-1" />
                      {course.students} students
                    </div>
                    <div className="flex items-center text-xs text-slate-500">
                      <Star className="w-3 h-3 mr-1 fill-blue-900 text-blue-900" />
                      {course.rating} rating
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-blue-900">{course.price}</span>
                    <Button size="sm" className="bg-blue-900 hover:bg-blue-800 text-white text-xs px-3 py-1">
                      Enroll
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 bg-transparent"
              onClick={() => {
                const element = document.getElementById("courses")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              View All Courses
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
