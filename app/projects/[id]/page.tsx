'use client'
import { use } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, CheckCircle2, MapPin, Gauge } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { projects } from '@/lib/projects-data'
import { notFound } from 'next/navigation'

export default function ProjectDetailPage(props: {
  params: Promise<{ id: string }>
}) {
  const params = use(props.params)
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar activePage="projects" />

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-linear-to-br from-primary/10 via-accent/10 to-secondary/20 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-foreground/70 mb-8">
            {project.fullDescription}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-background border-border">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Gauge className="w-5 h-5 text-primary" />
                  <p className="text-sm text-foreground/60">Capacity</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary">
                  {project.capacity}
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background border-border">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-accent" />
                  <p className="text-sm text-foreground/60">Location</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">{project.location}</p>
              </CardContent>
            </Card>
            <Card className="bg-background border-border">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <p className="text-sm text-foreground/60">Status</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">{project.status}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Key Features</h2>
              <ul className="space-y-4">
                {project.details.map((detail, index) => (
                  <li key={index} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground/80">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Card className="bg-linear-to-br from-primary/10 to-accent/10 border-primary/20 sticky top-24">
                <CardHeader>
                  <CardTitle>Project Impact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <p className="text-sm text-foreground/60 mb-2">
                      Primary Impact
                    </p>
                    <p className="text-lg font-semibold text-primary">
                      {project.impact}
                    </p>
                  </div>
                  <div className="border-t border-border pt-6">
                    <h3 className="font-semibold mb-4">
                      Interested in this service?
                    </h3>
                    <div className="space-y-3">
                      <a href="/#contact">
                        <Button
                          size="lg"
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                        >
                          Get a Quote
                        </Button>
                      </a>
                      <Link href="/about">
                        <Button
                          size="lg"
                          variant="outline"
                          className="w-full bg-transparent"
                        >
                          Learn About Us
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 md:py-32 bg-card/50 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Other Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((p) => p.id !== project.id)
              .slice(0, 3)
              .map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  href={`/projects/${relatedProject.id}`}
                >
                  <Card className="bg-background border-border hover:shadow-lg hover:border-primary/50 transition-all h-full cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-lg">
                        {relatedProject.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-foreground/70 mb-4">
                        {relatedProject.shortDescription}
                      </p>
                      <Button
                        variant="outline"
                        className="w-full bg-transparent"
                        size="sm"
                      >
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-linear-to-r from-secondary via-primary to-accent text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-balance mb-8 opacity-90">
            Contact us today to discuss {project.title} or any of our other
            manufacturing and fabrication services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contact">
              <Button
                size="lg"
                className="bg-primary-foreground hover:bg-primary-foreground/90 text-secondary"
              >
                Get a Quote
              </Button>
            </a>
            <Link href="/projects">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
