"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, Users, CheckCircle } from "lucide-react"
import EnrollButton from "@/components/enroll-button"
import { courses } from "@/data/courses"

interface PageProps {
  params: {
    id: string
  }
}

async function getCourse(id: string) {
  return courses.find((c) => c.id === id)
}

export default async function CourseDetailPage({ params }: PageProps) {
  const course = await getCourse(params.id)

  if (!course) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Course not found</h1>
          <Link href="/courses">
            <Button>Browse Courses</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="relative aspect-video mb-8">
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
              <div className="flex items-center gap-4 mb-4">
                <Badge>{course.category}</Badge>
                <Badge variant="outline">{course.level}</Badge>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-400" />
                  {course.rating}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {course.duration} hours
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {course.enrolled} students
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">About This Course</h2>
              <p className="text-gray-600">{course.description}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">What You'll Learn</h2>
              <ul className="space-y-2">
                {course.lessons.map((lesson, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>{lesson.title}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Course Curriculum</h2>
              <div className="space-y-4">
                {course.lessons.map((lesson, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">{index + 1}</span>
                          <span>{lesson.title}</span>
                        </div>
                        <span className="text-sm text-gray-500">{lesson.duration}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Instructor</h2>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-lg font-semibold">
                    {course.instructor.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold">{course.instructor}</h3>
                  <p className="text-sm text-gray-500">Course Instructor</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-8">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="text-2xl font-bold">
                  {course.discountPrice ? (
                    <>
                      <span className="line-through text-gray-400 text-lg">
                        ${course.price}
                      </span>
                      <span className="ml-2">${course.discountPrice}</span>
                    </>
                  ) : (
                    `$${course.price}`
                  )}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration} hours of content</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4" />
                    <span>{course.enrolled} students enrolled</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4" />
                    <span>Lifetime access</span>
                  </div>
                </div>
                <EnrollButton
                  courseId={course.id}
                  price={course.price}
                  discountPrice={course.discountPrice}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

