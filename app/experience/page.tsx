"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"
import { experiences } from "@/lib/data"
import { Skeleton } from "@/components/ui/skeleton"
import { BackToTop } from "@/components/back-to-top"

export default function ExperiencePage() {
  const [isLoading, setIsLoading] = useState(true)
  const [timelinePositions, setTimelinePositions] = useState<number[]>([])
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  useEffect(() => {
    if (!isLoading) {
      const handleResize = () => {
        requestAnimationFrame(() => {
          const positions = cardsRef.current.map(card => {
            if (card) {
              const rect = card.getBoundingClientRect()
              const scrollTop = window.pageYOffset || document.documentElement.scrollTop
              return rect.top + scrollTop + 40
            }
            return 0
          })
          setTimelinePositions(positions)
        })
      }

      handleResize()

      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [isLoading])

  const formatLocation = (location: string) => {
    if (!location) return null
    const parts = location.split('·')
    return parts[0].trim()
  }

  if (isLoading) {
    return <ExperienceSkeletonLoader />
  }

  return (
    <main className="container px-4 py-4 md:py-8">
      <h1 className="text-3xl font-bold mb-4 md:mb-8">Experience</h1>

      <div className="mx-auto py-2 md:py-10" ref={contentRef}>
        <div className="md:ml-8 grid md:grid-cols-[200px_1fr] gap-4 md:gap-8">
          {/* Timeline - Hidden on mobile */}
          <div className="relative hidden md:block">
            <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-300 dark:bg-gray-700 -translate-x-1/2"></div>
            {experiences.map((experience, index) => (
              <div
                key={`timeline-${experience.company}-${index}`}
                className="relative"
                style={{
                  top: timelinePositions[index] ? `${timelinePositions[index] - contentRef.current?.offsetTop!}px` : '0px'
                }}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10"></div>

                {/* Timeline date */}
                <div className="absolute right-3 -translate-y-1/2 pr-4 w-[180px] text-right">
                  <div className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 bg-card border border-border rounded-md p-2 shadow-sm">
                    <Calendar className="h-4 w-4 flex-shrink-0" />
                    <span className="text-sm font-medium">
                      {experience.period.split('·')[0].trim()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Experience Cards */}
          <div className="grid gap-3 md:gap-8">
            {experiences.map((experience, index) => (
              <Card
                key={`${experience.company}-${experience.period}`}
                className="rounded-lg overflow-hidden relative border-t-4 border-t-primary md:border-t-border"
                ref={el => {
                  cardsRef.current[index] = el;
                }}
              >
                <CardHeader className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 pb-2 md:pb-4">
                  <Avatar className="h-16 w-16 md:h-20 md:w-20">
                    <AvatarImage src={experience.image} alt={experience.company} />
                    <AvatarFallback>{experience.company[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="text-xl md:text-2xl">{experience.company}</CardTitle>
                    <p className="text-lg md:text-xl font-semibold text-gray-700 dark:text-gray-300">
                      {experience.role}
                    </p>
                    
                    {/* Date shown on mobile only */}
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 md:hidden mt-1">
                      <Calendar className="h-4 w-4 flex-shrink-0" />
                      <span className="text-sm font-medium">
                        {experience.period.split('·')[0].trim()}
                      </span>
                    </div>
                    
                    {experience.location && (
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mt-1">
                        <MapPin className="h-4 w-4" />
                        <span>{formatLocation(experience.location)}</span>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 md:space-y-4">
                  <p className="text-gray-700 dark:text-gray-300">{experience.description}</p>

                  {experience.keyAchievement && (
                    <div className="mt-4">
                      <h4 className="font-semibold text-lg mb-2">Key Achievement</h4>
                      <p className="text-gray-700 dark:text-gray-300">{experience.keyAchievement}</p>
                    </div>
                  )}

                  {experience.responsibilities && (
                    <div className="mt-4">
                      <h4 className="font-semibold text-lg mb-2">Responsibilities</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {experience.responsibilities.map((responsibility) => (
                          <li
                            key={`${experience.company}-responsibility-${responsibility.substring(0, 20)}`}
                            className="text-gray-700 dark:text-gray-300"
                          >
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {experience.achievements && (
                    <div className="mt-4">
                      <h4 className="font-semibold text-lg mb-2">Achievements</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {experience.achievements.map((achievement) => (
                          <li
                            key={`${experience.company}-achievement-${achievement.substring(0, 20)}`}
                            className="text-gray-700 dark:text-gray-300"
                          >
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {experience.projects && (
                    <div className="mt-4">
                      <h4 className="font-semibold text-lg mb-2">Projects</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {experience.projects.map((project) => (
                          <li
                            key={`${experience.company}-project-${project.substring(0, 20)}`}
                            className="text-gray-700 dark:text-gray-300"
                          >
                            {project}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mt-4">
                    {experience.skills.map((skill) => (
                      <Badge
                        key={`${experience.company}-skill-${skill}`}
                        variant="secondary"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Back to top button (reusable component) */}
        <BackToTop />
      </div>
    </main>
  )
}

function ExperienceSkeletonLoader() {
  const skeletonCards = Array.from({ length: 3 }, (_, i) => i)

  return (
    <div className="container mx-auto py-10">
      <div className="md:ml-8 grid md:grid-cols-[200px_1fr] gap-8">
        {/* Timeline skeleton */}
        <div className="relative hidden md:block">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 -translate-x-1/2"></div>
          {skeletonCards.map((index) => (
            <div
              key={`timeline-skeleton-${index}`}
              className="relative"
              style={{ top: `${index * 250 + 100}px` }}
            >
              <Skeleton className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full" />
              <Skeleton className="absolute right-3 -translate-y-1/2 w-28 h-8 rounded-md" />
            </div>
          ))}
        </div>

        {/* Experience Cards skeleton */}
        <div className="grid gap-8">
          {skeletonCards.map((index) => (
            <Card key={index} className="rounded-lg overflow-hidden">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                {/* Company logo skeleton */}
                <Skeleton className="h-20 w-20 rounded-full" />

                <div className="flex-1 space-y-2">
                  {/* Company name skeleton */}
                  <Skeleton className="h-8 w-3/4" />

                  {/* Role skeleton */}
                  <Skeleton className="h-6 w-1/2" />

                  {/* Location skeleton */}
                  <div className="flex items-center gap-4">
                    <Skeleton className="h-4 w-40" />
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Description skeleton */}
                <Skeleton className="h-20 w-full" />

                {/* Key Achievement skeleton */}
                <div className="mt-4 space-y-2">
                  <Skeleton className="h-6 w-40" />
                  <Skeleton className="h-16 w-full" />
                </div>

                {/* Responsibilities skeleton */}
                <div className="mt-4 space-y-2">
                  <Skeleton className="h-6 w-40" />
                  <div className="pl-5 space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-4 w-4/6" />
                  </div>
                </div>

                {/* Skills skeleton */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {Array.from({ length: 8 }, (_, i) => (
                    <Skeleton key={i} className="h-6 w-16 rounded-full" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}