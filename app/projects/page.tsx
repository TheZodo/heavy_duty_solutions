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

      {/* Hero Section with Parallax */}
      <section
        className="relative min-h-[50vh] flex items-center parallax-hero"
        style={{
          backgroundImage: 'url(/images/industrial_background.jpg)',
        }}
      >
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/70 to-black/60"></div>
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-6 text-white text-shadow-industrial">
              Our{' '}
              <span className="text-primary text-shadow-glow">
                Services & Projects
              </span>
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto text-shadow-subtle">
              Explore our comprehensive range of manufacturing, fabrication, and
              innovative solutions including the revolutionary Hydro Master
              turbine.
            </p>
          </div>
        </div>

        {/* Gradient fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent"></div>
      </section>

      {/* Projects Grid with Parallax Background */}
      <section
        className="relative py-20 md:py-32 parallax-section"
        style={{
          backgroundImage:
            'url(/images/industrial-metallic-parallax-extension.jpg)',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/75"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <Card className="glass-card card-industrial h-full cursor-pointer group">
                  <CardHeader>
                    <CardTitle className="text-xl text-white group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-white/70">
                      {project.shortDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-white/60">{project.impact}</p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="bg-primary/10 p-3 rounded-lg border border-primary/20">
                          <p className="text-white/50 text-xs mb-1">Capacity</p>
                          <p className="font-semibold text-primary">
                            {project.capacity}
                          </p>
                        </div>
                        <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                          <p className="text-white/50 text-xs mb-1">Status</p>
                          <p className="font-semibold text-white">
                            {project.status}
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        className="w-full mt-4 border-primary/30 text-white hover:bg-primary/20 hover:border-primary bg-black/30"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
      <section className="py-20 md:py-32 bg-background relative">
        <div className="absolute inset-0 bg-linear-to-t from-primary/5 to-transparent"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance text-white">
            Have a Project in Mind?
          </h2>
          <p className="text-lg text-balance mb-8 text-white/80">
            Whether you need prefabricated buildings, steel structures, or
            custom metal fabrication, we're ready to help bring your vision to
            life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground btn-industrial"
              >
                Get a Quote
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 hover:border-primary bg-transparent"
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
