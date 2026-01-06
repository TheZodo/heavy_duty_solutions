'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Users,
  Target,
  Eye,
  Heart,
  Shield,
  Wrench,
  ArrowRight,
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar activePage="about" />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-accent/10 to-secondary/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-6">
              About <span className="text-primary">Heavy Duty Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 text-balance">
              Leading Zambia's manufacturing and fabrication industry with
              precision engineering, quality craftsmanship, and innovative
              solutions for every project.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 md:py-32 bg-card/50 border-t border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/30 rounded-full mb-6">
                <span className="text-sm font-medium text-primary flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  Our Mission
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Building Excellence in Every Project
              </h2>
              <p className="text-lg text-foreground/70 mb-4">
                Our mission is to deliver exceptional manufacturing and
                fabrication solutions that exceed client expectations. From
                prefabricated buildings to precision CNC laser cutting, we
                combine cutting-edge technology with skilled craftsmanship.
              </p>
              <p className="text-lg text-foreground/70 mb-4">
                We serve both corporate and private sectors, providing
                customized solutions for steel structures, booths, kiosks,
                outdoor furniture, and specialized metal works.
              </p>
              <p className="text-lg text-foreground/70">
                Our flagship innovation, the Hydro Master, represents our
                commitment to sustainable solutions that harness Zambia's
                natural resources.
              </p>
            </div>
            <div className="relative h-64 md:h-96 lg:h-full min-h-[400px]">
              <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                <Target className="w-32 h-32 text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-64 md:h-96 lg:h-full min-h-[400px] order-2 lg:order-1">
              <div className="absolute inset-0 bg-linear-to-br from-accent/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                <Eye className="w-32 h-32 text-primary/30" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/30 rounded-full mb-6">
                <span className="text-sm font-medium text-primary flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  Our Vision
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Shaping Zambia's Industrial Future
              </h2>
              <p className="text-lg text-foreground/70 mb-4">
                We envision a Zambia where world-class manufacturing is
                accessible to all. A future where local expertise and
                international standards combine to deliver infrastructure and
                products that drive economic growth.
              </p>
              <p className="text-lg text-foreground/70 mb-4">
                Our vision extends to sustainable innovation through projects
                like Hydro Master, tapping into unused hydro-kinetic potential
                to provide clean energy solutions for communities.
              </p>
              <p className="text-lg text-foreground/70">
                We're committed to being the trusted partner for businesses and
                individuals seeking durable, precision-engineered solutions
                across Zambia and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32 bg-card/50 border-t border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <span className="text-sm font-medium text-primary flex items-center gap-2 justify-center">
                <Heart className="w-4 h-4" />
                Our Values
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              What Drives Us
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              The principles that guide every project we undertake and every
              product we deliver
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: 'Quality First',
                description:
                  'We never compromise on quality. Every product meets rigorous standards for durability and performance.',
              },
              {
                icon: Wrench,
                title: 'Precision Engineering',
                description:
                  'Our CNC laser cutting and fabrication processes ensure millimeter-perfect accuracy in every piece.',
              },
              {
                icon: Heart,
                title: 'Client Partnership',
                description:
                  'We work closely with clients to understand needs and deliver customized solutions that exceed expectations.',
              },
              {
                icon: Users,
                title: 'Local Expertise',
                description:
                  "We employ and develop local talent, building capacity and contributing to Zambia's industrial growth.",
              },
            ].map((value, i) => (
              <Card key={i} className="bg-background border-border">
                <CardHeader>
                  <value.icon className="w-10 h-10 text-primary mb-4" />
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team"
        className="relative py-20 md:py-32"
        style={{ position: 'relative', zIndex: 20 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Our Leadership Team
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Meet the experienced professionals driving Heavy Duty Solutions
              forward
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Brian Ngoma',
                role: 'CEO & Founder',
                expertise: 'Strategic Leadership & Business Development',
              },
              {
                name: 'Sabah Salmin',
                role: 'Administrative Director',
                expertise: 'Administration and Management',
              },
              {
                name: 'Upendo Ngoma',
                role: 'Administrative Assistant',
                expertise: 'Project Management & Quality Control',
              },
            ].map((member, i) => (
              <Card key={i} className="bg-background text-center">
                <CardHeader>
                  <div className="w-20 h-20 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 text-sm">
                    {member.expertise}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Exist Section */}
      <section className="py-20 md:py-32 bg-card/50 border-t border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Why Heavy Duty Solutions
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Understanding the challenges that drive our mission
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-background border-border">
              <CardHeader>
                <CardTitle className="text-xl">The Industry Need</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 mb-4">
                  Zambia's growing economy demands high-quality manufacturing
                  and fabrication services. From commercial developments to
                  infrastructure projects, there's an increasing need for
                  reliable, locally-produced steel structures and metal works.
                </p>
                <p className="text-foreground/70">
                  We exist to fill this gap with world-class manufacturing
                  capabilities right here in Zambia.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background border-border">
              <CardHeader>
                <CardTitle className="text-xl">Our Commitment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 mb-4">
                  We're committed to delivering exceptional value through
                  quality products, competitive pricing, and reliable delivery.
                  Every project—whether a small kiosk or a large-scale
                  prefabricated building—receives our full attention.
                </p>
                <p className="text-foreground/70">
                  Our Hydro Master project showcases our commitment to
                  innovation, providing sustainable energy solutions for
                  Zambia's future.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-linear-to-r from-secondary via-primary to-accent text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Ready to Work With Us?
          </h2>
          <p className="text-lg text-balance mb-8 opacity-90">
            Whether you need prefabricated buildings, steel structures, or
            custom metal fabrication, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects">
              <Button
                size="lg"
                className="bg-primary-foreground hover:bg-primary-foreground/90 text-secondary"
              >
                Explore Our Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/#contact">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
