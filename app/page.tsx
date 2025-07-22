import Header from "@/components/header"
import Hero from "@/components/hero"
import Courses from "@/components/courses"
import About from "@/components/about"
import CalendlyBooking from "@/components/calendly-booking"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import CursorSpotlight from "@/components/cursor-spotlight"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 relative overflow-x-hidden">
      <CursorSpotlight />
      <Header />
      <Hero />
      <Courses />
      <About />
      <CalendlyBooking />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
