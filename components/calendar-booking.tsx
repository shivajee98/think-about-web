"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, CalendarIcon, Video, User } from "lucide-react"

const timeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"]

const meetingTypes = [
  { id: "consultation", label: "Course Consultation", duration: "30 min", color: "bg-blue-100 text-blue-800" },
  { id: "demo", label: "Live Demo", duration: "45 min", color: "bg-green-100 text-green-800" },
  { id: "career", label: "Career Guidance", duration: "60 min", color: "bg-purple-100 text-purple-800" },
  { id: "technical", label: "Technical Discussion", duration: "45 min", color: "bg-orange-100 text-orange-800" },
]

export default function CalendarBooking() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedTime, setSelectedTime] = useState("")
  const [selectedMeetingType, setSelectedMeetingType] = useState("")
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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

    const element = document.getElementById("calendar-booking")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleBooking = () => {
    const selectedMeeting = meetingTypes.find((type) => type.id === selectedMeetingType)
    const dateStr = selectedDate?.toLocaleDateString("en-IN")

    const message = `Hi! I'd like to book a ${selectedMeeting?.label} meeting.
    
Details:
📅 Date: ${dateStr}
⏰ Time: ${selectedTime}
👤 Name: ${formData.name}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}
💬 Message: ${formData.message}

Please confirm the Google Meet link. Thank you!`

    const whatsappUrl = `https://wa.me/918102117024?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const isFormValid = selectedDate && selectedTime && selectedMeetingType && formData.name && formData.email

  return (
    <section id="calendar-booking" className="py-20 px-4 bg-slate-50">
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

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Calendar and Time Selection */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <Card className="shadow-lg bg-white border-blue-900/10">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-slate-800 flex items-center gap-2">
                  <CalendarIcon className="w-6 h-6 text-blue-900" />
                  Select Date & Time
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Meeting Type Selection */}
                <div>
                  <h3 className="font-semibold text-slate-700 mb-3">Choose Meeting Type</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {meetingTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setSelectedMeetingType(type.id)}
                        className={`p-3 rounded-lg border-2 transition-all duration-200 text-left ${
                          selectedMeetingType === type.id
                            ? "border-blue-900 bg-blue-50"
                            : "border-slate-200 hover:border-blue-300"
                        }`}
                      >
                        <div className="font-medium text-slate-800">{type.label}</div>
                        <Badge className={`mt-1 ${type.color}`}>{type.duration}</Badge>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Calendar */}
                <div>
                  <h3 className="font-semibold text-slate-700 mb-3">Select Date</h3>
                  <div className="flex justify-center">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => date < new Date() || date.getDay() === 0}
                      className="rounded-md border border-slate-200"
                    />
                  </div>
                </div>

                {/* Time Slots */}
                {selectedDate && (
                  <div>
                    <h3 className="font-semibold text-slate-700 mb-3">Available Time Slots</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`p-2 rounded-lg border transition-all duration-200 text-sm font-medium ${
                            selectedTime === time
                              ? "border-blue-900 bg-blue-900 text-white"
                              : "border-slate-300 hover:border-blue-900 hover:bg-blue-50"
                          }`}
                        >
                          <Clock className="w-4 h-4 mx-auto mb-1" />
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Booking Form */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <Card className="shadow-lg bg-white border-blue-900/10">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-slate-800 flex items-center gap-2">
                  <User className="w-6 h-6 text-blue-900" />
                  Your Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="bg-white border-slate-300 focus:border-blue-900"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-white border-slate-300 focus:border-blue-900"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="bg-white border-slate-300 focus:border-blue-900"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message (Optional)
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your goals or any specific topics you'd like to discuss..."
                    rows={4}
                    className="bg-white border-slate-300 focus:border-blue-900"
                  />
                </div>

                {/* Booking Summary */}
                {selectedDate && selectedTime && selectedMeetingType && (
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2">Booking Summary</h4>
                    <div className="space-y-1 text-sm text-blue-800">
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="w-4 h-4" />
                        <span>
                          {selectedDate.toLocaleDateString("en-IN", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{selectedTime}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Video className="w-4 h-4" />
                        <span>{meetingTypes.find((type) => type.id === selectedMeetingType)?.label}</span>
                      </div>
                    </div>
                  </div>
                )}

                <Button
                  onClick={handleBooking}
                  disabled={!isFormValid}
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 text-lg font-semibold transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <Video className="w-5 h-5 mr-2" />
                  Book Google Meet Session
                </Button>

                <div className="text-center text-sm text-slate-500">
                  <p>You'll receive a Google Meet link via WhatsApp after booking confirmation.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features */}
        <div
          className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-blue-900/10">
            <Video className="w-12 h-12 text-blue-900 mx-auto mb-4" />
            <h3 className="font-semibold text-slate-800 mb-2">Google Meet Integration</h3>
            <p className="text-sm text-slate-600">Secure video calls with screen sharing and recording capabilities</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-blue-900/10">
            <Clock className="w-12 h-12 text-blue-900 mx-auto mb-4" />
            <h3 className="font-semibold text-slate-800 mb-2">Flexible Scheduling</h3>
            <p className="text-sm text-slate-600">Choose from available time slots that work best for your schedule</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-blue-900/10">
            <User className="w-12 h-12 text-blue-900 mx-auto mb-4" />
            <h3 className="font-semibold text-slate-800 mb-2">Expert Guidance</h3>
            <p className="text-sm text-slate-600">
              Get personalized advice from industry experts and career counselors
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
