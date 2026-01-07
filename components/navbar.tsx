'use client'

import { useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

type NavbarProps = {
  activePage?: 'home' | 'projects' | 'about' | 'careers'
}

export function Navbar({ activePage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/projects', label: 'Projects', key: 'projects' as const },
    { href: '/about', label: 'About', key: 'about' as const },
    { href: '/#impact', label: 'Our Track Record', key: 'home' as const },
    { href: '/careers', label: 'Careers', key: 'careers' as const },
  ]

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
    <>
      {navLinks.map((link) => {
        const isActive = activePage === link.key
        const baseClasses = 'transition-all duration-200'
        const className = mobile
          ? `${baseClasses} text-base py-2 ${
              isActive 
                ? 'font-semibold text-primary' 
                : 'text-white hover:text-primary'
            }`
          : `${baseClasses} text-sm font-medium ${
              isActive 
                ? 'text-primary border-b-2 border-primary pb-1' 
                : 'text-white/90 hover:text-primary'
            }`

        if (link.href.startsWith('/#')) {
          return (
            <a
              key={link.href}
              href={link.href}
              className={className}
              onClick={() => mobile && setIsOpen(false)}
            >
              {link.label}
            </a>
          )
        }

        return (
          <Link
            key={link.href}
            href={link.href}
            className={className}
            onClick={() => mobile && setIsOpen(false)}
          >
            {link.label}
          </Link>
        )
      })}
    </>
  )

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src={'/HDS_logo.png'}
              alt={'HDS Logo'}
              width={200}
              height={60}
              className="transition-all duration-300 group-hover:brightness-110"
            />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <NavLinks />
          </div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="outline" 
                className="md:hidden bg-black/50 border-primary/30 text-white hover:bg-primary/20 hover:border-primary"
              >
                <Menu className="w-5 h-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] py-10 px-4 bg-black/95 backdrop-blur-xl border-l border-primary/20"
            >
              <SheetTitle className="text-white">Navigation</SheetTitle>
              <SheetDescription className="text-white/60">
                Explore our services, projects, and learn more about Heavy Duty
                Solutions.
              </SheetDescription>
              <div className="flex flex-col gap-6 mt-8">
                <NavLinks mobile />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      
      {/* Subtle green glow line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
    </nav>
  )
}
