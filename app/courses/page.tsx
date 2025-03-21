"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Star, Clock, Search, Filter } from "lucide-react"
import { courses, categories, levels, priceRanges, durations } from "@/lib/data/courses"

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedLevels, setSelectedLevels] = useState<string[]>([])
  const [selectedPrices, setSelectedPrices] = useState<string[]>([])
  const [selectedDurations, setSelectedDurations] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("popular")
  const [showFilters, setShowFilters] = useState(false)

  const filteredCourses = courses.filter((course) => {
    // Search functionality
    const searchLower = searchQuery.toLowerCase()
    const matchesSearch =
      course.title.toLowerCase().includes(searchLower) ||
      course.description.toLowerCase().includes(searchLower) ||
      course.instructor.name.toLowerCase().includes(searchLower) ||
      course.category.toLowerCase().includes(searchLower)

    // Category filter
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(course.category)

    // Level filter
    const matchesLevel = selectedLevels.length === 0 || selectedLevels.includes(course.level)

    // Price filter
    let matchesPrice = true
    if (selectedPrices.length > 0) {
      matchesPrice = selectedPrices.some((price) => {
        const coursePrice = course.discountPrice || course.price
        switch (price) {
          case "free":
            return coursePrice === 0
          case "under-50":
            return coursePrice < 50
          case "50-100":
            return coursePrice >= 50 && coursePrice <= 100
          case "over-100":
            return coursePrice > 100
          default:
            return true
        }
      })
    }

    // Duration filter
    let matchesDuration = true
    if (selectedDurations.length > 0) {
      const courseHours = parseInt(course.duration)
      matchesDuration = selectedDurations.some((duration) => {
        switch (duration) {
          case "0-2":
            return courseHours <= 2
          case "3-6":
            return courseHours > 2 && courseHours <= 6
          case "7-16":
            return courseHours > 6 && courseHours <= 16
          case "17-plus":
            return courseHours > 16
          default:
            return true
        }
      })
    }

    return matchesSearch && matchesCategory && matchesLevel && matchesPrice && matchesDuration
  })

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()
      case "price-low":
        return (a.discountPrice || a.price) - (b.discountPrice || b.price)
      case "price-high":
        return (b.discountPrice || b.price) - (a.discountPrice || a.price)
      case "rating":
        return b.rating - a.rating
      default:
        return b.students - a.students // popular
    }
  })

  return (
    <div className="bg-black text-white">
      {/* Header */}
      <section className="bg-gradient-to-b from-gray-900 to-black py-8 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">Explore Our Courses</h1>
          <p className="mx-auto mb-8 max-w-2xl text-gray-400">
            Browse through our extensive collection of high-quality courses designed to help you achieve your learning
            goals.
          </p>
          <div className="mx-auto flex max-w-xl flex-col items-center gap-4 sm:flex-row">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <Input
                type="search"
                placeholder="Search courses, instructors, or categories..."
                className="w-full pl-10 bg-gray-900 border-gray-800"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button
              variant="outline"
              className="w-full sm:w-auto border-gray-800 text-white hover:bg-gray-800"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Filters Sidebar */}
            <div className={`lg:col-span-1 ${showFilters ? "block" : "hidden lg:block"}`}>
              <div className="sticky top-24 rounded-lg bg-gray-900 p-6 border border-gray-800">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-xl font-bold">Filters</h3>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-8 text-gray-400 hover:text-white"
                    onClick={() => {
                      setSelectedCategories([])
                      setSelectedLevels([])
                      setSelectedPrices([])
                      setSelectedDurations([])
                    }}
                  >
                    Reset
                  </Button>
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <h4 className="mb-3 font-medium">Categories</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`category-${category}`}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedCategories([...selectedCategories, category])
                            } else {
                              setSelectedCategories(selectedCategories.filter(c => c !== category))
                            }
                          }}
                        />
                        <label htmlFor={`category-${category}`} className="text-sm text-gray-400 hover:text-white">
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h4 className="mb-3 font-medium">Price Range</h4>
                  <div className="space-y-2">
                    {priceRanges.map((price) => (
                      <div key={price.value} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`price-${price.value}`}
                          checked={selectedPrices.includes(price.value)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedPrices([...selectedPrices, price.value])
                            } else {
                              setSelectedPrices(selectedPrices.filter(p => p !== price.value))
                            }
                          }}
                        />
                        <label htmlFor={`price-${price.value}`} className="text-sm text-gray-400 hover:text-white">
                          {price.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Level */}
                <div className="mb-6">
                  <h4 className="mb-3 font-medium">Level</h4>
                  <div className="space-y-2">
                    {levels.map((level) => (
                      <div key={level} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`level-${level}`}
                          checked={selectedLevels.includes(level)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedLevels([...selectedLevels, level])
                            } else {
                              setSelectedLevels(selectedLevels.filter(l => l !== level))
                            }
                          }}
                        />
                        <label htmlFor={`level-${level}`} className="text-sm text-gray-400 hover:text-white">
                          {level}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Duration */}
                <div className="mb-6">
                  <h4 className="mb-3 font-medium">Duration</h4>
                  <div className="space-y-2">
                    {durations.map((duration) => (
                      <div key={duration.value} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`duration-${duration.value}`}
                          checked={selectedDurations.includes(duration.value)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedDurations([...selectedDurations, duration.value])
                            } else {
                              setSelectedDurations(selectedDurations.filter(d => d !== duration.value))
                            }
                          }}
                        />
                        <label htmlFor={`duration-${duration.value}`} className="text-sm text-gray-400 hover:text-white">
                          {duration.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Course Listings */}
            <div className="lg:col-span-3">
              <div className="mb-6 flex flex-col sm:flex-row justify-between items-center">
                <p className="text-gray-400">Showing {sortedCourses.length} of {courses.length} courses</p>
                <div className="mt-4 sm:mt-0 flex items-center gap-2">
                  <span className="text-sm text-gray-400">Sort by:</span>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[180px] bg-gray-900 border-gray-800">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-gray-800">
                      <SelectItem value="popular">Most Popular</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {sortedCourses.map((course) => (
                  <Link href={`/courses/${course.id}`} key={course.id}>
                    <Card className="overflow-hidden bg-gray-900 border-gray-800 hover:border-primary transition-colors">
                      <div className="relative">
                        <Image
                          src={course.image}
                          alt={course.title}
                          width={300}
                          height={200}
                          className="h-48 w-full object-cover"
                        />
                        <Badge className="absolute top-4 right-4 bg-primary">{course.category}</Badge>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="mb-2 line-clamp-2 text-lg font-semibold">{course.title}</h3>
                        <p className="mb-4 line-clamp-2 text-sm text-gray-400">{course.description}</p>
                        <div className="mb-4 flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i <= Math.floor(course.rating) ? "fill-yellow-500 text-yellow-500" : "text-gray-600"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="ml-2 text-sm text-gray-400">({course.reviews})</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <Clock className="mr-1 h-4 w-4" />
                            {course.duration}
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-lg font-bold">
                            {course.discountPrice ? (
                              <>
                                <span className="text-red-500">${course.discountPrice}</span>
                                <span className="ml-2 text-sm text-gray-400 line-through">${course.price}</span>
                              </>
                            ) : (
                              `$${course.price}`
                            )}
                          </div>
                          <Button className="bg-primary hover:bg-primary/90">Enroll Now</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

