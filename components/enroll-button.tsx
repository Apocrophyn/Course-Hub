"use client"

import { Button } from "@/components/ui/button"

interface EnrollButtonProps {
  courseId: string
  price: number
  discountPrice?: number
}

export default function EnrollButton({ courseId, price, discountPrice }: EnrollButtonProps) {
  return (
    <Button className="w-full" size="lg">
      Enroll Now
    </Button>
  )
} 