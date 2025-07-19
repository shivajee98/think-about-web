"use client"

import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Contact", href: "#contact" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
  ]

  const courses = [
    { name: "Programming", href: "#" },
    { name: "Data Science", href: "#" },
    { name: "UX/UI Design", href: "#" },
    { name: "Digital Marketing", href: "#" },
    { name: "Cybersecurity", href: "#" },
    { name: "AI & Machine Learning", href: "#" },
  ]

  const support = [
    { name: "Help Center", href: "#" },
    { name: "Student Portal", href: "#" },
    { name: "Instructor Portal", href: "#" },
    { name: "Community", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ]

  return (
    <footer className="bg-slate-800 text-white py-16 border-t border-blue-900/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo.svg"
                alt="Think About Logo"
                width={40}
                height={40}
                className="w-10 h-10 filter brightness-0 invert"
              />
              <span className="text-xl sm:text-2xl font-bold text-blue-300">Think About</span>
            </div>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              Transforming education through technology and innovation. Join thousands of students worldwide in their
              learning journey.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-slate-300 text-sm sm:text-base">
                <Mail className="w-4 sm:w-5 h-4 sm:h-5 text-blue-300" />
                <span>hello@thinkabout.edu</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300 text-sm sm:text-base">
                <Phone className="w-4 sm:w-5 h-4 sm:h-5 text-blue-300" />
                <span>+91 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300 text-sm sm:text-base">
                <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-blue-300" />
                <span>123 Education St, Learning City</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-6 text-blue-300">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-blue-300 transition-colors duration-200 text-sm sm:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-6 text-blue-300">Popular Courses</h3>
            <ul className="space-y-3">
              {courses.map((course, index) => (
                <li key={index}>
                  <a
                    href={course.href}
                    className="text-slate-300 hover:text-blue-300 transition-colors duration-200 text-sm sm:text-base"
                  >
                    {course.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-6 text-blue-300">Support</h3>
            <ul className="space-y-3">
              {support.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-slate-300 hover:text-blue-300 transition-colors duration-200 text-sm sm:text-base"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Newsletter */}
        <div className="border-t border-blue-900/20 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="text-slate-400 hover:text-blue-300 transition-colors duration-200 transform hover:scale-110"
                >
                  <social.icon className="w-5 sm:w-6 h-5 sm:h-6" />
                </a>
              ))}
            </div>
            <div className="text-center md:text-right">
              <h4 className="text-base sm:text-lg font-semibold mb-2 text-blue-300">Stay Updated</h4>
              <p className="text-slate-300 text-xs sm:text-sm">
                Subscribe to our newsletter for the latest courses and updates
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-900/20 pt-8 text-center">
          <p className="text-slate-400 text-xs sm:text-sm">
            © {new Date().getFullYear()} Think About. All rights reserved. Made with ❤️ for learners worldwide.
          </p>
        </div>
      </div>
    </footer>
  )
}
