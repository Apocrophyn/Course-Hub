"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Something went wrong!</h1>
        <p className="text-gray-600 mb-4">
          We encountered an error while loading this course.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button onClick={() => reset()}>Try again</Button>
          <Link href="/courses">
            <Button variant="outline">Browse Courses</Button>
          </Link>
        </div>
      </div>
    </div>
  )
} 