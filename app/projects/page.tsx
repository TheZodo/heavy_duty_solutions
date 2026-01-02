'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { projects } from '@/lib/projects-data'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar activePage="projects" />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-linear-to-br from-primary/10 via-accent/10 to-secondary/20 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-6">
              Our <span className="text-primary">Services & Projects</span>
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Explore our comprehensive range of manufacturing, fabrication, and
              innovative solutions including the revolutionary Hydro Master
              turbine.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <Card className="bg-background border-border hover:shadow-lg hover:border-primary/50 transition-all h-full cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition">
                      {project.title}
                    </CardTitle>
                    <CardDescription>
                      {project.shortDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-foreground/70">
                        {project.impact}
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="bg-primary/5 p-3 rounded-lg">
                          <p className="text-foreground/60 text-xs mb-1">
                            Capacity
                          </p>
                          <p className="font-semibold text-primary">
                            {project.capacity}
                          </p>
                        </div>
                        <div className="bg-accent/5 p-3 rounded-lg">
                          <p className="text-foreground/60 text-xs mb-1">
                            Status
                          </p>
                          <p className="font-semibold">{project.status}</p>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        className="w-full mt-4 group bg-transparent"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" />
                      </Button>
                    </div>
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
            Have a Project in Mind?
          </h2>
          <p className="text-lg text-balance mb-8 opacity-90">
            Whether you need prefabricated buildings, steel structures, or
            custom metal fabrication, we're ready to help bring your vision to
            life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button
                size="lg"
                className="bg-primary-foreground hover:bg-primary-foreground/90 text-secondary"
              >
                Get a Quote
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                Learn About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
