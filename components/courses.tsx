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
      title: "Advanced Programming Bootcamp",
      description: "Intensive 12-week program covering full-stack development",
      image: "/placeholder.svg?height=200&width=300",
      duration: "12 weeks",
      students: 25,
      rating: 4.9,
      price: "$2,999",
      location: "New York Campus",
    },
    {
      title: "Data Science Immersive",
      description: "Comprehensive data science program with hands-on projects",
      image: "/placeholder.svg?height=200&width=300",
      duration: "16 weeks",
      students: 20,
      rating: 4.8,
      price: "$3,499",
      location: "San Francisco Campus",
    },
    {
      title: "UX/UI Design Workshop",
      description: "Learn design thinking and create stunning user experiences",
      image: "/placeholder.svg?height=200&width=300",
      duration: "8 weeks",
      students: 30,
      rating: 4.7,
      price: "$1,999",
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
      price: "$2,499",
      earlyBird: true,
    },
    {
      title: "Blockchain Development",
      description: "Build decentralized applications on various blockchain platforms",
      image: "/placeholder.svg?height=200&width=300",
      startDate: "April 1, 2024",
      duration: "12 weeks",
      price: "$2,799",
      earlyBird: false,
    },
    {
      title: "Cybersecurity Essentials",
      description: "Protect systems and networks from digital attacks",
      image: "/placeholder.svg?height=200&width=300",
      startDate: "April 20, 2024",
      duration: "14 weeks",
      price: "$3,199",
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
      price: "$199",
      level: "Beginner to Advanced",
    },
    {
      title: "React Development Pro",
      description: "Build modern web applications with React and its ecosystem",
      image: "/placeholder.svg?height=200&width=300",
      duration: "6 weeks",
      students: 890,
      rating: 4.8,
      price: "$299",
      level: "Intermediate",
    },
    {
      title: "Python for Data Analysis",
      description: "Analyze data and create visualizations using Python",
      image: "/placeholder.svg?height=200&width=300",
      duration: "8 weeks",
      students: 2100,
      rating: 4.9,
      price: "$249",
      level: "Beginner",
    },
  ]

  return (
    <section id="courses" className="py-20 px-4">
      <div className="container mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Our Courses</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of courses designed to help you achieve your learning goals
          </p>
        </div>

        <Tabs defaultValue="offline" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12">
            <TabsTrigger value="offline" className="text-lg py-3">
              Offline Courses
            </TabsTrigger>
            <TabsTrigger value="upcoming" className="text-lg py-3">
              Upcoming
            </TabsTrigger>
            <TabsTrigger value="online" className="text-lg py-3">
              Online Courses
            </TabsTrigger>
          </TabsList>

          <TabsContent value="offline">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {offlineCourses.map((course, index) => (
                <Card
                  key={index}
                  className={`group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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
                      <Badge className="absolute top-4 left-4 bg-green-500 hover:bg-green-600">Offline</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                    <CardDescription className="text-gray-600 mb-4">{course.description}</CardDescription>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-2" />
                        {course.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="w-4 h-4 mr-2" />
                        {course.students} students
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Star className="w-4 h-4 mr-2 fill-yellow-400 text-yellow-400" />
                        {course.rating} rating
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                      <Button className="bg-blue-600 hover:bg-blue-700">Enroll Now</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="upcoming">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingCourses.map((course, index) => (
                <Card
                  key={index}
                  className={`group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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
                      <Badge className="absolute top-4 left-4 bg-orange-500 hover:bg-orange-600">Coming Soon</Badge>
                      {course.earlyBird && (
                        <Badge className="absolute top-4 right-4 bg-red-500 hover:bg-red-600">Early Bird</Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                    <CardDescription className="text-gray-600 mb-4">{course.description}</CardDescription>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        Starts {course.startDate}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-2" />
                        {course.duration}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                      <Button
                        variant="outline"
                        className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {onlineCourses.map((course, index) => (
                <Card
                  key={index}
                  className={`group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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
                      <Badge className="absolute top-4 left-4 bg-blue-500 hover:bg-blue-600">Online</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                    <CardDescription className="text-gray-600 mb-4">{course.description}</CardDescription>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-2" />
                        {course.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="w-4 h-4 mr-2" />
                        {course.students} students
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Star className="w-4 h-4 mr-2 fill-yellow-400 text-yellow-400" />
                        {course.rating} rating
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                      <Button className="bg-blue-600 hover:bg-blue-700">Start Learning</Button>
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
