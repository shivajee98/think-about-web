"use client"

import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Our Footprints", href: "#footprints" },
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
    <footer className="bg-gray-900 text-white py-16">
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
                className="w-10 h-10 filter invert"
              />
              <span className="text-2xl font-bold">Think About</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Transforming education through technology and innovation. Join thousands of students worldwide in their
              learning journey.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5" />
                <span>hello@thinkabout.edu</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5" />
                <span>123 Education St, Learning City</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Popular Courses</h3>
            <ul className="space-y-3">
              {courses.map((course, index) => (
                <li key={index}>
                  <a href={course.href} className="text-gray-300 hover:text-white transition-colors duration-200">
                    {course.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              {support.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="text-gray-300 hover:text-white transition-colors duration-200">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Newsletter */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
              <p className="text-gray-300 text-sm">Subscribe to our newsletter for the latest courses and updates</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Think About. All rights reserved. Made with ❤️ for learners worldwide.
          </p>
        </div>
      </div>
    </footer>
  )
}
