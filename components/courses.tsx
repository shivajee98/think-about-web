"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Users, Star, MapPin, Calendar } from "lucide-react"
import EnrollForm from "@/components/EnrollForm"


export default function Courses() {
  const [isVisible, setIsVisible] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [selectedCourseTitle, setSelectedCourseTitle] = useState("")


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
      subtitle: "LaunchPad: Interview & Communication Skills",
      description:
        "A comprehensive course for freshers focusing on Interview Preparation, Personality Development, and Communication Skills. Perfect for students starting their career journey.",
      image: "/placeholder.svg?height=300&width=400&text=Interview+Skills",
      duration: "12 weeks",
      students: 150,
      rating: 4.9,
      price: "₹4,999",
      features: ["Mock Interviews", "Personality Development", "Communication Training", "Resume Building"],
    },
    {
      title: "Mid-Career Growth",
      subtitle: "Pathfinder: Career Growth & Networking",
      description:
        "Aimed at professionals with some experience, covering Career Guidance, Advanced Communication, and Professional Networking strategies.",
      image: "/placeholder.svg?height=300&width=400&text=Career+Growth",
      duration: "16 weeks",
      students: 120,
      rating: 4.8,
      price: "₹4,999",
      features: ["Leadership Skills", "Advanced Communication", "Networking", "Career Strategy"],
    },
    {
      title: "Executive Edge",
      subtitle: "Leadership Summit: Executive Interview & Impact",
      description:
        "For senior professionals, focusing on Executive Interview Preparation, Leadership Development, and High-Level Communication skills.",
      image: "/placeholder.svg?height=300&width=400&text=Executive+Leadership",
      duration: "8 weeks",
      students: 80,
      rating: 4.7,
      price: "₹4,999",
      features: ["Executive Presence", "Strategic Thinking", "Team Leadership", "Public Speaking"],
    },
    {
      title: "USP (Unified Course Offering)",
      subtitle: "Career Acceleration Blueprint",
      description:
        "The all-in-one, structured learning journey for individuals at any stage of their career, designed to accelerate growth and success across all domains.",
      image: "/placeholder.svg?height=300&width=400&text=Complete+Package",
      duration: "20 weeks",
      students: 200,
      rating: 4.9,
      price: "₹11,999",
      features: ["Complete Career Package", "All Skill Levels", "Mentorship", "Job Placement Support"],
    },
  ]

  const onlineCourses = [
    {
      title: "Digital Communication Mastery",
      subtitle: "Master Online Communication & Virtual Presence",
      description:
        "Learn to communicate effectively in digital environments, master video calls, online presentations, and virtual team collaboration.",
      image: "/placeholder.svg?height=300&width=400&text=Digital+Communication",
      duration: "Self-paced",
      rating: 4.9,
      price: "₹2,999",
      level: "Beginner to Advanced",
      features: ["Video Call Etiquette", "Online Presentations", "Digital Body Language", "Virtual Team Management"],
    },
    {
      title: "Professional Writing & Documentation",
      subtitle: "Master Business Writing & Technical Documentation",
      description:
        "Develop professional writing skills for emails, reports, proposals, and technical documentation that gets results.",
      image: "/placeholder.svg?height=300&width=400&text=Professional+Writing",
      duration: "8 weeks",
      rating: 4.8,
      price: "₹3,999",
      level: "Intermediate",
      features: ["Business Writing", "Email Etiquette", "Report Writing", "Technical Documentation"],
    },
    {
      title: "Interview Preparation Bootcamp",
      subtitle: "Comprehensive Interview Success Program",
      description:
        "Complete interview preparation covering technical interviews, behavioral questions, salary negotiation, and follow-up strategies.",
      image: "/placeholder.svg?height=300&width=400&text=Interview+Prep",
      duration: "6 weeks",
      rating: 4.9,
      price: "₹4,999",
      level: "All Levels",
      features: ["Mock Interviews", "Technical Prep", "Behavioral Questions", "Salary Negotiation"],
    },
    {
      title: "Personal Branding & LinkedIn Optimization",
      subtitle: "Build Your Professional Brand Online",
      description:
        "Create a powerful personal brand, optimize your LinkedIn profile, and learn networking strategies that open doors to opportunities.",
      image: "/placeholder.svg?height=300&width=400&text=Personal+Branding",
      duration: "4 weeks",
      rating: 4.7,
      price: "₹2,499",
      level: "Beginner",
      features: ["LinkedIn Optimization", "Personal Branding", "Content Strategy", "Professional Networking"],
    },
  ]

  return (
    <section id="courses" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Our Courses</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Choose from our comprehensive range of courses designed to accelerate your career growth and professional
            development
          </p>
        </div>

        <Tabs defaultValue="offline" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-12 bg-slate-100 border border-blue-900/10 max-w-md mx-auto">
            <TabsTrigger
              value="offline"
              className="text-base py-3 text-slate-600 data-[state=active]:text-white data-[state=active]:bg-blue-900"
            >
              Offline Courses
            </TabsTrigger>
            <TabsTrigger
              value="online"
              className="text-base py-3 text-slate-600 data-[state=active]:text-white data-[state=active]:bg-blue-900"
            >
              Online Courses
            </TabsTrigger>
          </TabsList>

          <TabsContent value="offline">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {offlineCourses.map((course, index) => (
                <div
                  key={index}
                  className={`group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-500 transform hover:-translate-y-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                    <Badge className="absolute top-4 left-4 bg-blue-900 hover:bg-blue-800 text-white font-semibold">
                      Offline
                    </Badge>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-blue-900 mb-2">{course.subtitle}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">{course.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-slate-500">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500">
                        <Users className="w-4 h-4" />
                        <span className="text-sm">{course.students} students</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500">
                        <Star className="w-4 h-4 fill-blue-900 text-blue-900" />
                        <span className="text-sm">{course.rating} rating</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h5 className="font-semibold text-blue-900 mb-3">Key Features:</h5>
                      <div className="grid grid-cols-2 gap-2">
                        {course.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                            <span className="text-sm text-slate-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-blue-900">{course.price}</span>
                      <Button
                        className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-8 py-3"
                        onClick={() => {
                          setSelectedCourseTitle(course.title)
                          setShowForm(true)
                        }}
                      >
                        Enroll Now
                      </Button>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="online">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {onlineCourses.map((course, index) => (
                <div
                  key={index}
                  className={`group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-500 transform hover:-translate-y-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                    <Badge className="absolute top-4 left-4 bg-green-600 hover:bg-green-700 text-white font-semibold">
                      Upcoming
                    </Badge>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-blue-900 mb-2">{course.title}</h3>
                    <h4 className="text-lg font-semibold text-slate-700 mb-3">{course.subtitle}</h4>
                    <p className="text-slate-600 mb-6 leading-relaxed">{course.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-slate-500">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500">
                        <Star className="w-4 h-4 fill-blue-900 text-blue-900" />
                        <span className="text-sm">{course.rating} rating</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{course.level}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h5 className="font-semibold text-blue-900 mb-3">What You'll Learn:</h5>
                      <div className="grid grid-cols-1 gap-2">
                        {course.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                            <span className="text-sm text-slate-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-blue-900">{course.price}</span>
                      <Button
                        className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-8 py-3"
                        onClick={() => {
                          setSelectedCourseTitle(course.title)
                          setShowForm(true)
                        }}
                      >
                        Start Learning
                      </Button>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <EnrollForm open={showForm} onClose={() => setShowForm(false)} courseTitle={selectedCourseTitle} />
    </section>
  )
}
