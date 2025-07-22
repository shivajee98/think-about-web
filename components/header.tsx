"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth, UserButton } from "@clerk/nextjs"

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
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-blue-900/10" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link href="/">
              <Image src="/logo.svg" alt="Think About Logo" width={100} height={40} className="w-100 h-100" priority />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link href="/" className="text-slate-600 hover:text-blue-900 transition-colors duration-200 font-medium">
              Home
            </Link>
            <button
              onClick={() => scrollToSection("courses")}
              className="text-slate-600 hover:text-blue-900 transition-colors duration-200 font-medium"
            >
              Courses
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-slate-600 hover:text-blue-900 transition-colors duration-200 font-medium"
            >
              About Us
            </button>
            <Link
              href="/career"
              className="text-slate-600 hover:text-blue-900 transition-colors duration-200 font-medium"
            >
              Career
            </Link>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-slate-600 hover:text-blue-900 transition-colors duration-200 font-medium"
            >
              Contact
            </button>

            {/* Auth Buttons */}
            {/* Show UserButton if logged in, else show Login/Sign Up */}
            {/* Assuming useAuth from Clerk */}
            {useAuth().isSignedIn ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <>
                <Button variant="ghost" className="text-slate-600 hover:text-blue-900 hover:bg-blue-50 font-medium">
                  Login
                </Button>
                <Button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-full transition-all duration-200 transform hover:scale-105 font-semibold">
                  Sign Up
                </Button>
              </>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 text-blue-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-blue-900/10">
            <div className="flex flex-col space-y-4 pt-4">
              <Link
                href="/"
                className="text-left text-slate-600 hover:text-blue-900 transition-colors duration-200 font-medium"
              >
                Home
              </Link>
              <button
                onClick={() => scrollToSection("courses")}
                className="text-left text-slate-600 hover:text-blue-900 transition-colors duration-200 font-medium"
              >
                Courses
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-slate-600 hover:text-blue-900 transition-colors duration-200 font-medium"
              >
                About Us
              </button>
              <Link
                href="/career"
                className="text-left text-slate-600 hover:text-blue-900 transition-colors duration-200 font-medium"
              >
                Career
              </Link>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-slate-600 hover:text-blue-900 transition-colors duration-200 font-medium"
              >
                Contact
              </button>

              {/* Mobile Auth Buttons */}
              <div className="flex flex-col space-y-3 pt-4 border-t border-blue-900/10">
                <Button
                  variant="ghost"
                  className="text-left justify-start text-slate-600 hover:text-blue-900 hover:bg-blue-50 font-medium"
                >
                  Login
                </Button>
                <Button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-full w-fit font-semibold">
                  Sign Up
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
