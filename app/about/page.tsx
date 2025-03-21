"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, BookOpen, Target } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-900 to-black py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">About CourseHub</h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-400">
            Empowering learners worldwide with quality education and skills for the future. We believe in making education
            accessible, engaging, and effective for everyone.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">Our Mission</h2>
              <p className="mb-6 text-gray-400">
                At CourseHub, our mission is to democratize education by providing high-quality, accessible learning
                opportunities to everyone, regardless of their background or location. We believe that education should be
                engaging, practical, and focused on real-world applications.
              </p>
              <p className="mb-8 text-gray-400">
                We partner with industry experts and experienced instructors to create comprehensive courses that help
                learners achieve their goals and advance their careers.
              </p>
              <Button className="bg-primary hover:bg-primary/90">Learn More</Button>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=60"
                alt="Our Mission"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-900 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <div className="text-3xl font-bold">100K+</div>
                <div className="text-gray-400">Active Students</div>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <BookOpen className="h-12 w-12 text-primary" />
                </div>
                <div className="text-3xl font-bold">500+</div>
                <div className="text-gray-400">Courses</div>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <Award className="h-12 w-12 text-primary" />
                </div>
                <div className="text-3xl font-bold">50+</div>
                <div className="text-gray-400">Expert Instructors</div>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <Target className="h-12 w-12 text-primary" />
                </div>
                <div className="text-3xl font-bold">95%</div>
                <div className="text-gray-400">Success Rate</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Our Team</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "John Smith",
                role: "Founder & CEO",
                image: "https://ui-avatars.com/api/?name=John+Smith&background=0D9488&color=fff",
              },
              {
                name: "Sarah Johnson",
                role: "Head of Content",
                image: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=0D9488&color=fff",
              },
              {
                name: "Michael Brown",
                role: "Technical Director",
                image: "https://ui-avatars.com/api/?name=Michael+Brown&background=0D9488&color=fff",
              },
              {
                name: "Emily Chen",
                role: "Product Manager",
                image: "https://ui-avatars.com/api/?name=Emily+Chen&background=0D9488&color=fff",
              },
            ].map((member) => (
              <Card key={member.name} className="bg-gray-900 border-gray-800">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="relative h-24 w-24 overflow-hidden rounded-full">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="mb-1 text-xl font-bold">{member.name}</h3>
                  <p className="text-gray-400">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 