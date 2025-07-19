"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Users, Star, Calendar } from "lucide-react"

export default function Courses() {
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

    const element = document.getElementById("courses")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const offlineCourses = [
    {
      title: "Beginner's Pathway",
      description: "LaunchPad: Interview & Communication Skills. " +
        "A comprehensive course for freshers focusing on Interview Preparation, Personality Development, and Communication",
      image: "/placeholder.svg?height=200&width=300",
      duration: "12 weeks",
      students: 25,
      rating: 4.9,
      price: "₹4,999",
      location: "New York Campus",
    },
    {
      title: "Mid-Career Growth",
      description: "Pathfinder: Career Growth & Networking. Aimed at professionals with some experience, covering Career Guidance, Advanced Communication, and Networking) ",
      image: "/placeholder.svg?height=200&width=300",
      duration: "16 weeks",
      students: 20,
      rating: 4.8,
      price: "₹4,999",
      location: "San Francisco Campus",
    },
    {
      title: "Executive Edge",
      description: "Leadership Summit: Executive Interview & Impact. For senior professionals, focusing on Executive Interview Preparation, Leadership Development, and High-Level Communication",
      image: "/placeholder.svg?height=200&width=300",
      duration: "8 weeks",
      students: 30,
      rating: 4.7,
      price: "₹4,999",
      location: "Los Angeles Campus",
    },
    {
      title: "USP (Unified Course Offering)",
      description: "Career Acceleration Blueprint. The all-in-one, structured learning journey for individuals at any stage of their career, designed to accelerate growth and success)",
      image: "/placeholder.svg?height=200&width=300",
      duration: "8 weeks",
      students: 30,
      rating: 4.7,
      price: "₹11,999",
      location: "Los Angeles Campus",
    },
  ]

  const upcomingCourses = [
    {
      title: "AI & Machine Learning Fundamentals",
      description: "Introduction to artificial intelligence and ML algorithms",
      image: "/placeholder.svg?height=200&width=300",
      startDate: "March 15, 2024",
      duration: "10 weeks",
      price: "₹4,999",
      earlyBird: true,
    },
    {
      title: "Blockchain Development",
      description: "Build decentralized applications on various blockchain platforms",
      image: "/placeholder.svg?height=200&width=300",
      startDate: "April 1, 2024",
      duration: "12 weeks",
      price: "₹4,999",
      earlyBird: false,
    },
    {
      title: "Cybersecurity Essentials",
      description: "Protect systems and networks from digital attacks",
      image: "/placeholder.svg?height=200&width=300",
      startDate: "April 20, 2024",
      duration: "14 weeks",
      price: "₹3,999",
      earlyBird: true,
    },
  ]

  const onlineCourses = [
    {
      title: "JavaScript Mastery",
      description: "From basics to advanced concepts in modern JavaScript",
      image: "/placeholder.svg?height=200&width=300",
      duration: "Self-paced",
      students: 1250,
      rating: 4.9,
      price: "₹4,999",
      level: "Beginner to Advanced",
    },
    {
      title: "React Development Pro",
      description: "Build modern web applications with React and its ecosystem",
      image: "/placeholder.svg?height=200&width=300",
      duration: "6 weeks",
      students: 890,
      rating: 4.8,
      price: "₹3,999",
      level: "Intermediate",
    },
    {
      title: "Python for Data Analysis",
      description: "Analyze data and create visualizations using Python",
      image: "/placeholder.svg?height=200&width=300",
      duration: "8 weeks",
      students: 2100,
      rating: 4.9,
      price: "₹4,999",
      level: "Beginner",
    },
  ]

  return (
    <section id="courses" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">Our Courses</h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of courses designed to help you achieve your learning goals
          </p>
        </div>

        <Tabs defaultValue="offline" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12 bg-slate-100 border border-blue-900/10">
            <TabsTrigger
              value="offline"
              className="text-base sm:text-lg py-3 text-slate-600 data-[state=active]:text-white data-[state=active]:bg-blue-900"
            >
              Offline Courses
            </TabsTrigger>
            <TabsTrigger
              value="upcoming"
              className="text-base sm:text-lg py-3 text-slate-600 data-[state=active]:text-white data-[state=active]:bg-blue-900"
            >
              Upcoming
            </TabsTrigger>
            <TabsTrigger
              value="online"
              className="text-base sm:text-lg py-3 text-slate-600 data-[state=active]:text-white data-[state=active]:bg-blue-900"
            >
              Online Courses
            </TabsTrigger>
          </TabsList>

          <TabsContent value="offline">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {offlineCourses.map((course, index) => (
                <Card
                  key={index}
                  className={`group hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 transform hover:-translate-y-2 bg-slate-50 border-blue-900/10 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                      <Badge className="absolute top-4 left-4 bg-blue-900 hover:bg-blue-800 text-white font-semibold">
                        Offline
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-xl mb-2 text-slate-800">{course.title}</CardTitle>
                    <CardDescription className="text-slate-600 mb-4">{course.description}</CardDescription>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-slate-500">
                        <Clock className="w-4 h-4 mr-2" />
                        {course.duration}
                      </div>
                      <div className="flex items-center text-sm text-slate-500">
                        <Users className="w-4 h-4 mr-2" />
                        {course.students} students
                      </div>
                      <div className="flex items-center text-sm text-slate-500">
                        <Star className="w-4 h-4 mr-2 fill-blue-900 text-blue-900" />
                        {course.rating} rating
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xl sm:text-2xl font-bold text-blue-900">{course.price}</span>
                      <Button className="bg-blue-900 hover:bg-blue-800 text-white font-semibold">Enroll Now</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="upcoming">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {upcomingCourses.map((course, index) => (
                <Card
                  key={index}
                  className={`group hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 transform hover:-translate-y-2 bg-slate-50 border-blue-900/10 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                      <Badge className="absolute top-4 left-4 bg-slate-600 hover:bg-slate-500 text-white">
                        Coming Soon
                      </Badge>
                      {course.earlyBird && (
                        <Badge className="absolute top-4 right-4 bg-blue-900 hover:bg-blue-800 text-white font-semibold">
                          Early Bird
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-xl mb-2 text-slate-800">{course.title}</CardTitle>
                    <CardDescription className="text-slate-600 mb-4">{course.description}</CardDescription>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-slate-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        Starts {course.startDate}
                      </div>
                      <div className="flex items-center text-sm text-slate-500">
                        <Clock className="w-4 h-4 mr-2" />
                        {course.duration}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xl sm:text-2xl font-bold text-blue-900">{course.price}</span>
                      <Button
                        variant="outline"
                        className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white bg-transparent"
                      >
                        Pre-Register
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="online">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {onlineCourses.map((course, index) => (
                <Card
                  key={index}
                  className={`group hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 transform hover:-translate-y-2 bg-slate-50 border-blue-900/10 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                      <Badge className="absolute top-4 left-4 bg-blue-900 hover:bg-blue-800 text-white font-semibold">
                        Online
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-xl mb-2 text-slate-800">{course.title}</CardTitle>
                    <CardDescription className="text-slate-600 mb-4">{course.description}</CardDescription>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-slate-500">
                        <Clock className="w-4 h-4 mr-2" />
                        {course.duration}
                      </div>
                      <div className="flex items-center text-sm text-slate-500">
                        <Users className="w-4 h-4 mr-2" />
                        {course.students} students
                      </div>
                      <div className="flex items-center text-sm text-slate-500">
                        <Star className="w-4 h-4 mr-2 fill-blue-900 text-blue-900" />
                        {course.rating} rating
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xl sm:text-2xl font-bold text-blue-900">{course.price}</span>
                      <Button className="bg-blue-900 hover:bg-blue-800 text-white font-semibold">Start Learning</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
