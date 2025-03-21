"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Clock, Star, Trophy } from "lucide-react"
import { courses } from "@/data/courses"

export default function Dashboard() {
  const [enrolledCourses, setEnrolledCourses] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const supabase = createClientComponentClient()

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        router.push('/auth/signin')
        return
      }

      // Fetch enrolled courses
      const { data: enrollments, error } = await supabase
        .from('enrollments')
        .select('course_id, enrolled_at')
        .eq('user_id', session.user.id)

      if (error) {
        console.error('Error fetching enrollments:', error)
        return
      }

      // Get course details for enrolled courses
      const enrolledCoursesData = enrollments.map(enrollment => {
        const course = courses.find(c => c.id === enrollment.course_id)
        return {
          ...course,
          enrolled_at: enrollment.enrolled_at,
          progress: Math.floor(Math.random() * 100), // This should come from your course_progress table
          last_accessed: new Date().toISOString(), // This should come from your course_progress table
        }
      })

      setEnrolledCourses(enrolledCoursesData)
      setLoading(false)
    }

    checkUser()
  }, [router, supabase])

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Enrolled Courses</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{enrolledCourses.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Hours Watched</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {enrolledCourses.reduce((acc, course) => acc + (course.duration || 0), 0)}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {enrolledCourses.length > 0
                ? (enrolledCourses.reduce((acc, course) => acc + course.rating, 0) / enrolledCourses.length).toFixed(1)
                : '0.0'}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Study Streak</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7 days</div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">My Courses</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {enrolledCourses.map((course) => (
            <Card key={course.id}>
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Last accessed: {new Date(course.last_accessed).toLocaleDateString()}
                  </div>
                  <Button className="w-full" onClick={() => router.push(`/courses/${course.id}`)}>
                    Continue Learning
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
} 