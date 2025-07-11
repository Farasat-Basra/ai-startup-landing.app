import { Hero } from "@/components/hero"
import { Mission } from "@/components/mission"
import { Features } from "@/components/features"
import { CaseStudies } from "@/components/case-studies"
import { BlogPreview } from "@/components/blog-preview"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Mission />
        <Features />
        <CaseStudies />
        <BlogPreview />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
