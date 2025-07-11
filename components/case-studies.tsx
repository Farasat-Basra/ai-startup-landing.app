import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function CaseStudies() {
  const caseStudies = [
    {
      company: "TechCorp",
      industry: "E-commerce",
      result: "300% increase in conversion rates",
      quote:
        "Neural-AI helped us identify customer behavior patterns we never knew existed. The AI insights transformed our entire marketing strategy.",
      author: "Sarah Johnson",
      role: "Head of Analytics",
      logo: "🛒",
    },
    {
      company: "FinanceFlow",
      industry: "Fintech",
      result: "50% reduction in fraud detection time",
      quote:
        "The real-time fraud detection capabilities are incredible. We can now prevent fraudulent transactions before they happen.",
      author: "Michael Chen",
      role: "CTO",
      logo: "💳",
    },
    {
      company: "HealthTech",
      industry: "Healthcare",
      result: "40% improvement in patient outcomes",
      quote:
        "The predictive analytics help us identify at-risk patients early, allowing for proactive care that saves lives.",
      author: "Dr. Emily Rodriguez",
      role: "Chief Medical Officer",
      logo: "🏥",
    },
  ]

  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how leading companies are transforming their businesses with Neural-AI's AI-powered analytics.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-4">{study.logo}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{study.company}</h3>
                    <p className="text-gray-600">{study.industry}</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-lg mb-6">
                  <p className="text-lg font-semibold">{study.result}</p>
                </div>

                <Quote className="h-8 w-8 text-gray-300 mb-4" />
                <p className="text-gray-600 mb-6 italic">"{study.quote}"</p>

                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{study.author}</p>
                  <p className="text-gray-600 text-sm">{study.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
