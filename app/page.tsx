"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, Users, CheckCircle, Search } from "lucide-react"
import { courses } from "@/lib/data/courses"

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()
  const supabase = createClientComponentClient()

  const filteredCourses = courses.filter((course) => {
    const searchLower = searchQuery.toLowerCase()
    return (
      course.title.toLowerCase().includes(searchLower) ||
      course.description.toLowerCase().includes(searchLower) ||
      course.category.toLowerCase().includes(searchLower) ||
      course.instructor.name.toLowerCase().includes(searchLower)
    )
  })

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-black/50" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Learn New Skills Online with Top Educators
            </h1>
            <p className="mb-8 text-lg text-gray-300">
              Access high-quality courses from expert instructors and transform your career today.
            </p>
            <div className="relative mx-auto max-w-2xl">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search courses, instructors, or categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-900/50 pl-10 backdrop-blur-sm border-gray-700 text-white placeholder:text-gray-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">Featured Courses</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.slice(0, 3).map((course) => (
              <Link key={course.id} href={`/courses/${course.id}`}>
                <Card className="h-full overflow-hidden bg-gray-900 border-gray-800 transition-colors hover:border-primary">
                  <div className="relative h-48">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute right-4 top-4 bg-primary/90">
                      {course.category}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-xl font-semibold">{course.title}</h3>
                    <p className="mb-4 text-sm text-gray-400">{course.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i <= Math.floor(course.rating)
                                    ? "fill-yellow-500 text-yellow-500"
                                    : "text-gray-600"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="ml-1 text-sm text-gray-400">
                            ({course.reviews})
                          </span>
                        </div>
                        <div className="flex items-center text-sm text-gray-400">
                          <Clock className="mr-1 h-4 w-4" />
                          {course.duration}
                        </div>
                      </div>
                      <div className="text-lg font-bold">
                        {course.discountPrice ? (
                          <>
                            <span className="text-red-500">${course.discountPrice}</span>
                            <span className="ml-2 text-sm text-gray-400 line-through">
                              ${course.price}
                            </span>
                          </>
                        ) : (
                          `$${course.price}`
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Why Choose CourseHub?</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Expert Instructors</h3>
                <p className="text-gray-400">
                  Learn from industry professionals with years of experience in their fields.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Flexible Learning</h3>
                <p className="text-gray-400">
                  Study at your own pace with lifetime access to course materials.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Quality Content</h3>
                <p className="text-gray-400">
                  Access high-quality, up-to-date content that's regularly reviewed and updated.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

