"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-blue-900/10" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-3">
              <Link href="/">
                <Image src="/logo.svg" alt="Think About Logo" width={130} height={40} className="w-100 h-100" priority />
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-slate-700 hover:text-blue-900 font-medium transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("courses")}
              className="text-slate-700 hover:text-blue-900 font-medium transition-colors duration-200"
            >
              Courses
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-slate-700 hover:text-blue-900 font-medium transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("calendly-booking")}
              className="text-slate-700 hover:text-blue-900 font-medium transition-colors duration-200"
            >
              Book Meeting
            </button>
            <a href="/career" className="text-slate-700 hover:text-blue-900 font-medium transition-colors duration-200">
              Career
            </a>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-slate-700 hover:text-blue-900 font-medium transition-colors duration-200"
            >
              Contact
            </button>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" className="text-slate-700 hover:text-blue-900 hover:bg-blue-50">
              Login
            </Button>
            <Button className="bg-blue-900 hover:bg-blue-800 text-white">Sign Up</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-slate-700 hover:text-blue-900 hover:bg-blue-50 transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-blue-900/10">
            <div className="px-4 py-6 space-y-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="block w-full text-left text-slate-700 hover:text-blue-900 font-medium py-2 transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("courses")}
                className="block w-full text-left text-slate-700 hover:text-blue-900 font-medium py-2 transition-colors duration-200"
              >
                Courses
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left text-slate-700 hover:text-blue-900 font-medium py-2 transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("calendly-booking")}
                className="block w-full text-left text-slate-700 hover:text-blue-900 font-medium py-2 transition-colors duration-200"
              >
                Book Meeting
              </button>
              <a
                href="/career"
                className="block w-full text-left text-slate-700 hover:text-blue-900 font-medium py-2 transition-colors duration-200"
              >
                Career
              </a>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left text-slate-700 hover:text-blue-900 font-medium py-2 transition-colors duration-200"
              >
                Contact
              </button>

              {/* Mobile Auth Buttons */}
              <div className="pt-4 border-t border-blue-900/10 space-y-3">
                <Button variant="ghost" className="w-full text-slate-700 hover:text-blue-900 hover:bg-blue-50">
                  Login
                </Button>
                <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white">Sign Up</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
