"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Search, Users, BookOpen, DollarSign, BarChart } from "lucide-react"
import { courses } from "@/lib/data/courses"

export default function StaffDashboard() {
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()
  const supabase = createClientComponentClient()

  useEffect(() => {
    const checkStaffAccess = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        router.push("/auth/signin")
        return
      }

      // In a real app, you would check if the user has staff privileges
      // For now, we'll just simulate a delay
      setTimeout(() => setLoading(false), 1000)
    }

    checkStaffAccess()
  }, [router, supabase.auth])

  if (loading) {
    return (
      <div className="container mx-auto flex min-h-screen items-center justify-center px-4">
        <div className="text-center">
          <div className="mb-4 h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="text-gray-400">Loading staff dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Staff Dashboard</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add New Course
        </Button>
      </div>

      {/* Overview Cards */}
      <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-gray-900">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Total Students</p>
                <p className="text-2xl font-bold">1,234</p>
              </div>
              <div className="rounded-full bg-primary/20 p-3">
                <Users className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Active Courses</p>
                <p className="text-2xl font-bold">{courses.length}</p>
              </div>
              <div className="rounded-full bg-primary/20 p-3">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Monthly Revenue</p>
                <p className="text-2xl font-bold">$12,345</p>
              </div>
              <div className="rounded-full bg-primary/20 p-3">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Completion Rate</p>
                <p className="text-2xl font-bold">85%</p>
              </div>
              <div className="rounded-full bg-primary/20 p-3">
                <BarChart className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="courses" className="space-y-6">
        <TabsList>
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="students">Students</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="courses" className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <Button variant="outline">Filter</Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <Card key={course.id} className="bg-gray-900">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="mb-2 text-lg font-semibold">{course.title}</h3>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{course.category}</Badge>
                      <Badge variant="outline">{course.level}</Badge>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-400">{course.description}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">
                      {course.students} students enrolled
                    </div>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="students" className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search students..."
                className="pl-9"
              />
            </div>
            <Button variant="outline">Filter</Button>
          </div>

          <Card className="bg-gray-900">
            <CardContent className="p-6">
              <div className="text-center text-gray-400">
                Student management features coming soon...
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <Card className="bg-gray-900">
            <CardContent className="p-6">
              <div className="text-center text-gray-400">
                Analytics dashboard coming soon...
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 