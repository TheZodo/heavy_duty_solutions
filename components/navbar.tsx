'use client'

import { useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
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
        const className = mobile
          ? `text-base hover:text-primary transition py-2 ${
              isActive ? 'font-semibold text-primary' : ''
            }`
          : `text-sm hover:text-primary transition ${
              isActive ? 'font-semibold' : ''
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
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={'/HDS_logo.png'}
              alt={'HDS Logo'}
              width={200}
              height={60}
            />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <NavLinks />
          </div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="md:hidden bg-transparent">
                <Menu className="w-5 h-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] py-10 px-4"
            >
              <SheetTitle>Navigation</SheetTitle>
              <SheetDescription>
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
    </nav>
  )
}
