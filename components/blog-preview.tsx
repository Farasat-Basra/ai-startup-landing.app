import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, User } from "lucide-react"

export function BlogPreview() {
  const blogPosts = [
    {
      title: "The Future of AI in Business Analytics",
      excerpt:
        "Explore how artificial intelligence is revolutionizing the way businesses analyze data and make strategic decisions.",
      author: "Alex Thompson",
      date: "Jan 15, 2024",
      readTime: "5 min read",
      category: "AI Trends",
    },
    {
      title: "Building Scalable Data Pipelines",
      excerpt:
        "Learn best practices for creating robust data pipelines that can handle massive amounts of information efficiently.",
      author: "Maria Garcia",
      date: "Jan 12, 2024",
      readTime: "8 min read",
      category: "Engineering",
    },
    {
      title: "Privacy-First Analytics: A New Standard",
      excerpt:
        "Discover how to implement powerful analytics while maintaining user privacy and complying with global regulations.",
      author: "David Kim",
      date: "Jan 10, 2024",
      readTime: "6 min read",
      category: "Privacy",
    },
  ]

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Latest Insights</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends in AI, analytics, and data science from our expert team.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
            >
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-br from-purple-400 to-blue-500 rounded-t-lg"></div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
