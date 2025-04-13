"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu } from "lucide-react"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { ThemeToggle } from "./theme-toggle"
import { PDFResumeButton } from "@/components/pdf-resume"
import { Button } from "./ui/button"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-blue-100 dark:border-blue-900">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="font-semibold text-blue-600 dark:text-blue-400">
            <span className="hidden sm:inline">Matthew Mollentze</span>
            <span className="sm:hidden">MM</span>
          </Link>
          {/* Desktop navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/experience" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Experience
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/projects" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Projects
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/skills" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Skills
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <PDFResumeButton />
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-2">
          {/* Mobile menu toggle button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          <ThemeToggle />
        </div>
      </div>
      
      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur shadow-lg pb-2 border-b border-blue-100 dark:border-blue-900">
          <nav className="container py-2 flex flex-col space-y-1">
            <Link 
              href="/" 
              className="px-4 py-2 text-sm hover:bg-muted rounded-md flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Home</span>
            </Link>
            <Link 
              href="/experience" 
              className="px-4 py-2 text-sm hover:bg-muted rounded-md flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Experience</span>
            </Link>
            <Link 
              href="/projects" 
              className="px-4 py-2 text-sm hover:bg-muted rounded-md flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Projects</span>
            </Link>
            <Link 
              href="/skills" 
              className="px-4 py-2 text-sm hover:bg-muted rounded-md flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Skills</span>
            </Link>
            <Link 
              href="/contact" 
              className="px-4 py-2 text-sm hover:bg-muted rounded-md flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Contact</span>
            </Link>
            <div className="px-4 py-2">
              <PDFResumeButton isMobile={true} />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}