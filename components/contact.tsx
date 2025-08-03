"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("contact")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (data.success) {
        alert("Message sent successfully!")
      } else {
        console.error("Email failed:", data.error)
        alert("Failed to send message. Please try again.")
      }
    } catch (err) {
      console.error("Fetch error:", err)
      alert("Unexpected error occurred.")
    }

    setFormData({ name: "", email: "", subject: "", message: "" })
  }


  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "care@thinkabout.in",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+918102117024",
      description: "Mon-Fri from 8am to 6pm",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Mithanpura Muzaffarpur, Bihar",
      description: "Come visit our main campus",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Mon-Fri: 8am-6pm",
      description: "Weekend: 10am-4pm",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">Get In Touch</h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            Have questions about our courses or need guidance on your learning journey? We're here to help you every
            step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div
            className={`lg:col-span-2 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
          >
            <Card className="shadow-lg bg-slate-50 border-blue-900/10">
                <CardHeader>
                    <CardTitle className="text-xl sm:text-2xl text-slate-800">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                                    Full Name
                                </label>
                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Your full name"
                                    required
                                    className="w-full bg-white border-slate-300 placeholder-slate-400 focus:border-blue-900 text-black"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                                    Email Address
                                </label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="your.email@example.com"
                                    required
                                    className="w-full bg-white border-slate-300 placeholder-slate-400 focus:border-blue-900 text-black"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                                Subject
                            </label>
                            <Input
                                id="subject"
                                name="subject"
                                type="text"
                                value={formData.subject}
                                onChange={handleInputChange}
                                placeholder="What's this about?"
                                required
                                className="w-full bg-white border-slate-300 placeholder-slate-400 focus:border-blue-900 text-black"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                                Message
                            </label>
                            <Textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder="Tell us more about your inquiry..."
                                required
                                rows={6}
                                className="w-full bg-white border-slate-300 placeholder-slate-400 focus:border-blue-900 text-black"
                            />
                        </div>
                        <Button
                            type="submit"
                            className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 text-lg font-semibold transition-all duration-200 transform hover:scale-105"
                        >
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                        </Button>
                    </form>
                </CardContent>
            </Card>
          </div>

          <div
            className={`space-y-6 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
          >
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="p-4 sm:p-6 hover:shadow-lg hover:shadow-blue-900/10 transition-all duration-300 transform hover:-translate-y-1 bg-slate-50 border-blue-900/10"
              >
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-900/10 p-3 rounded-lg border border-blue-900/10">
                      <info.icon className="w-5 sm:w-6 h-5 sm:h-6 text-blue-900" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-1 text-sm sm:text-base">{info.title}</h3>
                      <p className="text-blue-900 font-medium mb-1 text-sm sm:text-base">{info.details}</p>
                      <p className="text-xs sm:text-sm text-slate-500">{info.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="p-4 sm:p-6 bg-slate-50 border-blue-900/10">
              <CardContent className="p-0">
                <h3 className="font-semibold text-slate-800 mb-3 text-sm sm:text-base">Quick Response</h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-4">
                  We typically respond to all inquiries within 24 hours. For urgent matters, please call us directly
                  during business hours.
                </p>
                <div className="flex items-center space-x-2 text-xs sm:text-sm text-blue-900">
                  <Clock className="w-4 h-4" />
                  <span>Average response time: 2-4 hours</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
