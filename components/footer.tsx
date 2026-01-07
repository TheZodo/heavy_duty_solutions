import { Wrench, Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="relative bg-black/90 text-white py-12 md:py-16 border-t border-primary/20">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Wrench className="w-5 h-5 text-primary" />
              <span className="font-bold text-white">Heavy Duty Solutions</span>
            </div>
            <p className="text-white/70 text-sm">
              Quality manufacturing and fabrication solutions for every project.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link
                  href="/projects/prefabricated-buildings"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Prefabricated Buildings
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/steel-structures"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Steel Structures
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/cnc-laser-cutting"
                  className="hover:text-primary transition-colors duration-200"
                >
                  CNC Laser Cutting
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-primary transition-colors duration-200">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <a
                  href="mailto:heavydutyinso@gmail.com"
                  className="hover:text-primary transition-colors duration-200"
                >
                  heavydutyinso@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+260763562929"
                    className="hover:text-primary transition-colors duration-200"
                  >
                    +260 763 562 929
                  </a>
                  <a
                    href="tel:+260976220693"
                    className="hover:text-primary transition-colors duration-200"
                  >
                    +260 976 220 693
                  </a>
                  <a
                    href="tel:+260979551172"
                    className="hover:text-primary transition-colors duration-200"
                  >
                    +260 979 551 172
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span className="text-white/70">
                  Plotm396a/k Bayuni Road, Makeni main, Lusaka, Zambia
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Industrial divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent mb-8"></div>
        
        <div className="text-center">
          <p className="text-sm text-white/60">
            © 2026 Heavy Duty Solutions. Built to last, crafted with precision.
          </p>
        </div>
      </div>
    </footer>
  )
}
