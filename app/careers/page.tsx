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

      {/* Hero Section with Parallax */}
      <section
        className="relative min-h-[60vh] flex items-center parallax-hero"
        style={{
          backgroundImage: 'url(/images/industrial_background.jpg)',
        }}
      >
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/70 to-black/60"></div>
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-6 text-white text-shadow-industrial">
              Join{' '}
              <span className="text-primary text-shadow-glow">
                Heavy Duty Solutions
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 text-balance mb-8 text-shadow-subtle">
              Be part of a team that's shaping Zambia's manufacturing and
              fabrication industry. We're always looking for talented
              individuals who share our passion for quality and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/50 text-white hover:bg-white/10 hover:border-primary bg-black/30 backdrop-blur-sm"
                >
                  Learn About HDS
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Gradient fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent"></div>
      </section>

      {/* Why Join Us with Parallax */}
      <section
        className="relative py-20 md:py-32 parallax-section"
        style={{
          backgroundImage:
            'url(/images/industrial-metallic-parallax-extension.jpg)',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-white text-shadow-industrial">
              Why Join HDS?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
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
              <Card key={i} className="glass-card card-industrial">
                <CardHeader>
                  <benefit.icon className="w-8 h-8 text-primary mb-2" />
                  <CardTitle className="text-lg text-white">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70 text-sm">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 md:py-32 bg-background relative">
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent/5"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-white">
              Open Positions
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Current job opportunities at Heavy Duty Solutions
            </p>
          </div>
          <Card className="glass-card-strong card-industrial max-w-2xl mx-auto">
            <CardContent className="py-16 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-6 flex items-center justify-center glow-green-subtle">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                No Positions Available
              </h3>
              <p className="text-white/70 mb-6">
                We don't have any open positions at the moment, but we're always
                interested in hearing from talented individuals. Feel free to
                send us your CV for future opportunities.
              </p>
              <a href="mailto:heavydutyinso@gmail.com">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground btn-industrial">
                  Send Your CV
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Decorative divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px divider-industrial"></div>
      </section>

      {/* Contact Section with Parallax */}
      <section
        className="relative py-20 md:py-32 parallax-section"
        style={{
          backgroundImage:
            'url(/images/industrial-metallic-parallax-extension.jpg)',
          backgroundPositionY: '50%',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/75"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance text-white text-shadow-industrial">
            Stay Connected
          </h2>
          <div className="glass-card-strong rounded-lg p-8">
            <p className="text-lg mb-6 text-white/90">
              Interested in future opportunities? Send your CV to{' '}
              <a
                href="mailto:heavydutyinso@gmail.com"
                className="font-semibold text-primary hover:underline"
              >
                heavydutyinso@gmail.com
              </a>
            </p>
            <p className="text-white/80">
              Or call us at{' '}
              <a
                href="tel:+260763562929"
                className="font-semibold text-primary hover:underline"
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
