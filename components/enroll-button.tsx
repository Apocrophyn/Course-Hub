"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

interface EnrollButtonProps {
  courseId: string
  price: number
  discountPrice?: number
}

export default function EnrollButton({ courseId, price, discountPrice }: EnrollButtonProps) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()
  const supabase = createClientComponentClient()

  const handleEnroll = async () => {
    setLoading(true)

    try {
      const { data: { session } } = await supabase.auth.getSession()

      if (!session) {
        toast({
          title: "Authentication required",
          description: "Please sign in to enroll in this course.",
          variant: "destructive",
        })
        router.push("/auth/signin")
        return
      }

      const response = await fetch("/api/enroll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ courseId }),
      })

      if (!response.ok) {
        throw new Error("Failed to enroll in course")
      }

      toast({
        title: "Success!",
        description: "You have been enrolled in the course.",
      })
      router.push("/dashboard")
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button
      onClick={handleEnroll}
      className="w-full"
      disabled={loading}
    >
      {loading ? "Enrolling..." : "Enroll Now"}
      {discountPrice ? (
        <span className="ml-2">
          <span className="line-through text-sm text-gray-400">${price}</span>
          <span className="ml-2">${discountPrice}</span>
        </span>
      ) : (
        <span className="ml-2">${price}</span>
      )}
    </Button>
  )
} 