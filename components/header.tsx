"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "Courses", id: "courses" },
    { label: "About", id: "about" },
    { label: "Book Meeting", id: "calendar-booking" },
    { label: "Contact", id: "contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-blue-900/10" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg sm:text-xl">T</span>
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-slate-800">
                <span className="text-blue-900">Think</span> About
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-700 hover:text-blue-900 font-medium transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-900 transition-all duration-200 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/career">
              <Button variant="ghost" className="text-slate-700 hover:text-blue-900 hover:bg-blue-50">
                Career
              </Button>
            </Link>
            <Button variant="ghost" className="text-slate-700 hover:text-blue-900 hover:bg-blue-50">
              Login
            </Button>
            <Button className="bg-blue-900 hover:bg-blue-800 text-white px-6">Sign Up</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6 text-slate-700" /> : <Menu className="w-6 h-6 text-slate-700" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-blue-900/10 shadow-lg">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-slate-700 hover:text-blue-900 font-medium py-2 transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <Link href="/career" className="block">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-slate-700 hover:text-blue-900 hover:bg-blue-50"
                  >
                    Career
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-slate-700 hover:text-blue-900 hover:bg-blue-50"
                >
                  Login
                </Button>
                <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white">Sign Up</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
