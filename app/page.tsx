"use client"

import { Suspense, lazy } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import LoadingSpinner from "@/components/loading-spinner"

// Lazy load components for better performance
const Courses = lazy(() => import("@/components/courses"))
const About = lazy(() => import("@/components/about"))
const Footprints = lazy(() => import("@/components/footprints"))
const Contact = lazy(() => import("@/components/contact"))
const Footer = lazy(() => import("@/components/footer"))

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <Hero />

      <Suspense fallback={<LoadingSpinner />}>
        <Courses />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <About />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Footprints />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Contact />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </main>
  )
}
