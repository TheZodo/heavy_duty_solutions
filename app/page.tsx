'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/lib/projects-data'

export default function Home() {
  const [name, setName] = useState('')
  const [contactType, setContactType] = useState('individual')
  const [question, setQuestion] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const subject = encodeURIComponent(`Contact from ${name} (${contactType})`)
    const body = encodeURIComponent(
      `Name: ${name}\nType: ${
        contactType === 'individual' ? 'Individual' : 'Company'
      }\n\nQuestion/Inquiry:\n${question}`
    )

    window.location.href = `mailto:heavydutysolutions.co.zm?subject=${subject}&body=${body}`
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar activePage="home" />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-accent/10 to-secondary/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/30 rounded-full mb-6">
                <span className="text-sm font-medium text-primary">
                  Built to Last, Crafted with Precision
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-6">
                Industrial{' '}
                <span className="text-primary">Manufacturing Solutions</span>{' '}
                for Every Need
              </h1>
              <p className="text-lg text-foreground/70 text-balance mb-8">
                Heavy Duty Solutions specializes in prefabricated buildings,
                steel structures, CNC laser cutting, and metal fabrication. From
                corporate projects to private ventures, we deliver quality
                craftsmanship that stands the test of time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/projects">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    View Our Projects
                  </Button>
                </Link>
                <a href="#contact">
                  <Button size="lg" variant="outline">
                    Get a Quote
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative h-64 md:h-96 lg:h-full">
              <Image
                src="/images/oie_transparent.png"
                alt="Zambia Power Production - Solar, Wind, Hydro, and Nuclear Energy"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="features"
        className="py-20 md:py-32 bg-card/50 border-t border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Our Services & Projects
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Discover our comprehensive range of manufacturing and fabrication
              solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {projects.slice(0, 3).map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <Card className="bg-background border-border hover:shadow-lg hover:border-primary/50 transition-all h-full cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <CardDescription>
                      {project.shortDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/70 mb-4">
                      {project.impact}
                    </p>
                    <div className="flex items-center text-primary hover:gap-2 transition-all">
                      <span className="text-sm font-medium">View Details</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/projects">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Explore All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section - Our Achievements */}
      <section id="impact" className="py-20 md:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Our Track Record
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Delivering excellence in manufacturing and fabrication across
              Zambia
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '200+', label: 'Projects Completed' },
              { number: '50+', label: 'Corporate Clients' },
              { number: '15+', label: 'Years Experience' },
              { number: '100%', label: 'Quality Commitment' },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-xl bg-linear-to-br from-primary/10 to-accent/10 border border-primary/20"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <p className="text-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section
        id="contact"
        className="relative py-20 md:py-32 bg-card/50 border-t border-border"
        style={{ position: 'relative', zIndex: 21 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Get In Touch
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Have a project in mind or need a quote? We'd love to hear from
              you. Reach out to the Heavy Duty Solutions team.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
            <Card className="bg-background border-border">
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-3">
                    <Label>
                      I am a{contactType === 'individual' ? 'n' : ''}
                    </Label>
                    <div className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card/50">
                      <div className="flex items-center gap-2">
                        {contactType === 'individual' ? (
                          <Image
                            src={'/images/lightbulb-off.png'}
                            alt={'Lightbulb off'}
                            width={32}
                            height={32}
                            className="object-contain transition-all duration-300 shrink-0 pt-2.5 pl-1"
                          />
                        ) : (
                          <Image
                            src={'/images/lightbulb_on2.png'}
                            alt={'Lightbulb on'}
                            width={54}
                            height={54}
                            className="object-contain transition-all duration-300 shrink-0"
                          />
                        )}
                        <span className="text-sm font-medium">
                          {contactType === 'individual'
                            ? 'Individual'
                            : 'Company'}
                        </span>
                      </div>
                      <div className="flex-1 flex justify-end">
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-muted-foreground">
                            Individual
                          </span>
                          <Switch
                            checked={contactType === 'company'}
                            onCheckedChange={(checked) =>
                              setContactType(checked ? 'company' : 'individual')
                            }
                            className="scale-125"
                          />
                          <span className="text-sm text-muted-foreground">
                            Company
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="question">Tell us about your project</Label>
                    <Textarea
                      id="question"
                      placeholder="Describe your project requirements..."
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      required
                      rows={5}
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="hidden lg:flex items-center justify-center sticky top-24">
              <div className="relative w-full max-w-md aspect-square">
                <Image
                  src={
                    contactType === 'individual'
                      ? '/images/lightbulb-off.png'
                      : '/images/lightbulb_on2.png'
                  }
                  alt={
                    contactType === 'individual'
                      ? 'Lightbulb off - Individual'
                      : 'Lightbulb on - Company'
                  }
                  fill
                  className="object-contain transition-opacity duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-linear-to-r from-secondary via-primary to-accent text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Ready to Build Something Great?
          </h2>
          <p className="text-lg text-balance mb-8 opacity-90">
            Partner with Heavy Duty Solutions for your next construction,
            fabrication, or manufacturing project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects">
              <Button
                size="lg"
                className="bg-primary-foreground hover:bg-primary-foreground/90 text-secondary"
              >
                View Our Work
              </Button>
            </Link>
            <a href="#contact">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
