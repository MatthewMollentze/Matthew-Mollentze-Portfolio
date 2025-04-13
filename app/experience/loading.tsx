import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function ExperienceLoading() {
  const skeletonCards = Array.from({ length: 4 }, (_, i) => i)

  return (
    <div className="container mx-auto py-10">
      <div className="grid gap-4">
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
                
                {/* Period and location skeleton */}
                <div className="flex items-center gap-4">
                  <Skeleton className="h-4 w-24" />
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
  )
}