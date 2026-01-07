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

    window.location.href = `mailto:heavydutyinso@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar activePage="home" />

      {/* Hero Section with Parallax Background */}
      <section
        className="relative min-h-[90vh] flex items-center parallax-hero"
        style={{
          backgroundImage: 'url(/images/industrial_background.jpg)',
        }}
      >
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/40"></div>
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-black/30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 glass-card rounded-full mb-6 border border-primary/30">
                <span className="text-sm font-medium text-primary">
                  Built to Last, Crafted with Precision
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-6 text-white text-shadow-industrial">
                Industrial{' '}
                <span className="text-primary text-shadow-glow">
                  Manufacturing Solutions
                </span>{' '}
                for Every Need
              </h1>
              <p className="text-lg text-white/90 text-balance mb-8 text-shadow-subtle">
                Heavy Duty Solutions specializes in prefabricated buildings,
                steel structures, CNC laser cutting, and metal fabrication. From
                corporate projects to private ventures, we deliver quality
                craftsmanship that stands the test of time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/projects">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground btn-industrial glow-green-subtle"
                  >
                    View Our Projects
                  </Button>
                </Link>
                <a href="#contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/50 text-white hover:bg-white/10 hover:border-primary bg-black/30 backdrop-blur-sm"
                  >
                    Get a Quote
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative h-64 md:h-96 lg:h-[500px] hidden lg:block">
              <div className="absolute inset-0 glow-green rounded-2xl opacity-30"></div>
              <Image
                src="/images/oie_transparent.png"
                alt="Zambia Power Production - Solar, Wind, Hydro, and Nuclear Energy"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>

        {/* Gradient fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent"></div>
      </section>

      {/* Projects Section with Parallax */}
      <section
        id="features"
        className="relative py-20 md:py-32 parallax-section"
        style={{
          backgroundImage:
            'url(/images/industrial-metallic-parallax-extension.jpg)',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/75"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-white text-shadow-industrial">
              Our Services & Projects
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Discover our comprehensive range of manufacturing and fabrication
              solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {projects.slice(0, 3).map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <Card className="glass-card card-industrial hover:shadow-lg transition-all h-full cursor-pointer group">
                  <CardHeader>
                    <CardTitle className="text-lg text-white group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-white/70">
                      {project.shortDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-white/60 mb-4">
                      {project.impact}
                    </p>
                    <div className="flex items-center text-primary hover:gap-2 transition-all">
                      <span className="text-sm font-medium">View Details</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
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
                className="bg-primary hover:bg-primary/90 text-primary-foreground btn-industrial"
              >
                Explore All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section - Our Achievements */}
      <section
        id="impact"
        className="py-20 md:py-32 relative overflow-hidden bg-background"
      >
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent/5"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-white">
              Our Track Record
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
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
                className="text-center p-6 rounded-xl glass-card card-industrial"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2 text-shadow-glow">
                  {stat.number}
                </div>
                <p className="text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px divider-industrial"></div>
      </section>

      {/* Contact Us Section with Parallax */}
      <section
        id="contact"
        className="relative py-20 md:py-32 parallax-section"
        style={{
          backgroundImage:
            'url(/images/industrial-metallic-parallax-extension.jpg)',
          backgroundPositionY: '30%',
          zIndex: 21,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-white text-shadow-industrial">
              Get In Touch
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Have a project in mind or need a quote? We'd love to hear from
              you. Reach out to the Heavy Duty Solutions team.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
            <Card className="glass-card-strong border-primary/20">
              <CardHeader>
                <CardTitle className="text-white">Contact Us</CardTitle>
                <CardDescription className="text-white/70">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">
                      Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="bg-black/50 border-white/20 text-white placeholder:text-white/50 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label className="text-white">
                      I am a{contactType === 'individual' ? 'n' : ''}
                    </Label>
                    <div className="flex items-center gap-4 p-4 rounded-lg border border-white/20 bg-black/30">
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
                        <span className="text-sm font-medium text-white">
                          {contactType === 'individual'
                            ? 'Individual'
                            : 'Company'}
                        </span>
                      </div>
                      <div className="flex-1 flex justify-end">
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-white/60">
                            Individual
                          </span>
                          <Switch
                            checked={contactType === 'company'}
                            onCheckedChange={(checked) =>
                              setContactType(checked ? 'company' : 'individual')
                            }
                            className="scale-125"
                          />
                          <span className="text-sm text-white/60">Company</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="question" className="text-white">
                      Tell us about your project
                    </Label>
                    <Textarea
                      id="question"
                      placeholder="Describe your project requirements..."
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      required
                      rows={5}
                      className="bg-black/50 border-white/20 text-white placeholder:text-white/50 focus:border-primary"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground btn-industrial"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="hidden lg:flex items-center justify-center sticky top-24">
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 glow-green rounded-full opacity-20"></div>
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
                  className="object-contain transition-opacity duration-300 drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-background relative">
        <div className="absolute inset-0 bg-linear-to-t from-primary/5 to-transparent"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance text-white">
            Ready to Build Something Great?
          </h2>
          <p className="text-lg text-balance mb-8 text-white/80">
            Partner with Heavy Duty Solutions for your next construction,
            fabrication, or manufacturing project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground btn-industrial"
              >
                View Our Work
              </Button>
            </Link>
            <a href="#contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 hover:border-primary bg-transparent"
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
