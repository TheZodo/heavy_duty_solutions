import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Target, Users, TrendingUp, Wrench } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar activePage="careers" />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-linear-to-br from-primary/20 via-accent/10 to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-6">
              Join <span className="text-primary">Heavy Duty Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 text-balance mb-8">
              Be part of a team that's shaping Zambia's manufacturing and
              fabrication industry. We're always looking for talented
              individuals who share our passion for quality and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/about">
                <Button size="lg" variant="outline">
                  Learn About HDS
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 md:py-32 bg-card/50 border-t border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Why Join HDS?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Be part of a growing company that values craftsmanship,
              innovation, and professional development
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                title: 'Meaningful Work',
                desc: 'Build structures and products that make a real difference',
              },
              {
                icon: Users,
                title: 'Great Team',
                desc: 'Work alongside skilled craftsmen and engineers',
              },
              {
                icon: Wrench,
                title: 'Skill Development',
                desc: 'Learn cutting-edge manufacturing techniques',
              },
              {
                icon: TrendingUp,
                title: 'Career Growth',
                desc: 'Advance your career in a growing industry',
              },
            ].map((benefit, i) => (
              <Card key={i} className="bg-background border-border">
                <CardHeader>
                  <benefit.icon className="w-8 h-8 text-primary mb-2" />
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 text-sm">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* No Open Positions */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Open Positions
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Current job opportunities at Heavy Duty Solutions
            </p>
          </div>
          <Card className="bg-background border-border max-w-2xl mx-auto">
            <CardContent className="py-16 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                No Positions Available
              </h3>
              <p className="text-foreground/70 mb-6">
                We don't have any open positions at the moment, but we're always
                interested in hearing from talented individuals. Feel free to
                send us your CV for future opportunities.
              </p>
              <a href="mailto:heavydutysolutions.co.zm">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Send Your CV
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 bg-linear-to-r from-secondary via-primary to-accent text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Stay Connected
          </h2>
          <div className="bg-primary-foreground/10 rounded-lg p-6 backdrop-blur-sm border border-primary-foreground/20">
            <p className="text-lg mb-6 opacity-90">
              Interested in future opportunities? Send your CV to{' '}
              <a
                href="mailto:heavydutysolutions.co.zm"
                className="font-semibold hover:underline"
              >
                heavydutysolutions.co.zm
              </a>
            </p>
            <p className="opacity-80">
              Or call us at{' '}
              <a
                href="tel:+260763562929"
                className="font-semibold hover:underline"
              >
                +260 763 562 929
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
