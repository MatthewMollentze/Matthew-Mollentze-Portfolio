import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { siteConfig } from "@/lib/config"
import Image from "next/image"
import { MapPin, Briefcase, Globe2, Flag, FolderKanban, Wrench, User, Target, Linkedin, Github, FileText, FileDown } from "lucide-react"
import Link from "next/link"
import { PDFResumeButton } from "@/components/pdf-resume"

export default function Home() {
  return (
    <main className="flex-1">
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
          <div className="relative w-32 h-32 mx-auto md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-blue-200 dark:border-blue-800">
            <Image
              src="/images/profile.png"
              alt="Matthew Mollentze"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex-1 space-y-4">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
              Matthew Mollentze
            </h1>
            <p className="text-xl text-muted-foreground">
              Senior Frontend Developer at Betway Africa
            </p>
            <div className="flex flex-wrap gap-2 items-center text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Pretoria, Gauteng, South Africa</span>
            </div>
            <div className="flex flex-col gap-4 md:hidden">
              <PDFResumeButton isMobile={true} />
              <div className="flex gap-4">
                <Button variant="outline" size="icon" asChild className="border-blue-200 hover:border-blue-300 dark:border-blue-800 dark:hover:border-blue-700">
                  <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild className="border-blue-200 hover:border-blue-300 dark:border-blue-800 dark:hover:border-blue-700">
                  <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild className="border-blue-200 hover:border-blue-300 dark:border-blue-800 dark:hover:border-blue-700">
                  <a href={siteConfig.links.medium} target="_blank" rel="noopener noreferrer">
                    <FileText className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="hidden md:flex md:gap-4">
              <PDFResumeButton />
              <Button variant="outline" asChild className="border-blue-200 hover:border-blue-300 dark:border-blue-800 dark:hover:border-blue-700">
                <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" asChild className="border-blue-200 hover:border-blue-300 dark:border-blue-800 dark:hover:border-blue-700">
                <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" asChild className="border-blue-200 hover:border-blue-300 dark:border-blue-800 dark:hover:border-blue-700">
                <a href={siteConfig.links.medium} target="_blank" rel="noopener noreferrer">
                  <FileText className="h-4 w-4 mr-2" />
                  Medium
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <Link href="/experience">
            <Card className="group hover:border-blue-400 dark:hover:border-blue-500 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
                  Experience
                </CardTitle>
                <CardDescription>View my professional journey and work history</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/projects">
            <Card className="group hover:border-blue-400 dark:hover:border-blue-500 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FolderKanban className="h-5 w-5 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
                  Projects
                </CardTitle>
                <CardDescription>Explore my featured projects and contributions</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/skills">
            <Card className="group hover:border-blue-400 dark:hover:border-blue-500 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
                  Skills
                </CardTitle>
                <CardDescription>See my technical skills and expertise</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>

        <Card className="mt-4">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              About Me
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              I believe the inception of design and development can be more diverse and inspiring.
              I am creative, resourceful and flexible, being able to adapt to changing priorities
              and maintain a positive attitude and strong work ethic.
            </p>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              Ideal Next Role
            </CardTitle>
            <p className="text-muted-foreground">
              In my next role, I would like to work for a company with a collaborative, team-focused
              culture that provides opportunities to learn and grow my technical skills and where I
              will get the opportunity to learn more leadership skills over time. I enjoy being part
              of as many teams in a business as possible to bring whatever knowledge I can into each
              area possible.
            </p>
            <p className="text-muted-foreground">
              I would like to work for a company that is progressive and that keeps up with modern
              technologies, evolving approaches in order to complete projects with optimal results.
            </p>
            <p className="text-muted-foreground">
              I have no preference in terms of company size or industry. On the contrary, my ideal
              company culture promotes growth and collaboration and is a space where we have fun
              and the freedom to express ourselves.
            </p>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardContent className="space-y-4 mt-6">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <h3 className="font-semibold flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-blue-600 dark:text-blue-400">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  Languages
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">English</p>
                    <p className="text-sm text-muted-foreground">Bilingual proficiency</p>
                  </div>
                  <div>
                    <p className="font-medium">Afrikaans</p>
                    <p className="text-sm text-muted-foreground">Bilingual proficiency</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold flex items-center gap-2">
                  <Globe2 className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  Work Preferences
                </h3>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>100% remote</li>
                  <li>Hybrid work in Pretoria, South Africa</li>
                  <li>Office-based work in Pretoria, South Africa</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold flex items-center gap-2">
                  <Flag className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  Work Authorization
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🇿🇦</span>
                  <div>
                    <p className="font-medium">South Africa</p>
                    <p className="text-sm text-muted-foreground">Citizen</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
