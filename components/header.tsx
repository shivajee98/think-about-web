"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="Think About Logo" width={40} height={40} className="w-10 h-10" priority />
            <span className="text-2xl font-bold text-gray-800">Think About</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("courses")}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Courses
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("footprints")}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Our Footprints
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Contact
            </button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-all duration-200 transform hover:scale-105">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("courses")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Courses
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("footprints")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Our Footprints
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Contact
              </button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full w-fit">
                Get Started
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
