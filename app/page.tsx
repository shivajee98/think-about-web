import Header from "@/components/header"
import Hero from "@/components/hero"
import Courses from "@/components/courses"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 relative">
      <Header />
      <Hero />
      <Courses />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
