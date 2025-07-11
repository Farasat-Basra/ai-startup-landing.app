import { Card, CardContent } from "@/components/ui/card"
import { Brain, BarChart3, Shield, Zap, Users, Globe } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI Models",
      description:
        "Leverage cutting-edge machine learning algorithms for predictive analytics and pattern recognition.",
    },
    {
      icon: BarChart3,
      title: "Real-time Dashboards",
      description: "Beautiful, interactive dashboards that update in real-time with customizable widgets and charts.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2 compliance, end-to-end encryption, and role-based access control.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Process millions of data points in seconds with our optimized cloud infrastructure.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Share insights, create reports, and collaborate seamlessly with your entire team.",
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Deploy worldwide with our global CDN and multi-region data centers for optimal performance.",
    },
  ]

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Powerful Features</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to transform your data into actionable insights. Built for scale, designed for
            simplicity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
