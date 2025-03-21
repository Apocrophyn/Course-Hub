"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Eye, EyeOff, User, Mail, Lock } from "lucide-react"

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex min-h-screen bg-black">
      {/* Left Side - Form */}
      <div className="flex w-full flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:w-1/2 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Create an account</h1>
            <p className="mt-2 text-gray-400">Sign up to get started with CourseHub</p>
          </div>

          <div className="mt-10">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="first-name">First name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                    <Input
                      id="first-name"
                      placeholder="John"
                      className="pl-10 bg-gray-900 border-gray-800 focus:border-primary"
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                    <Input
                      id="last-name"
                      placeholder="Doe"
                      className="pl-10 bg-gray-900 border-gray-800 focus:border-primary"
                    />
                  </div>
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    className="pl-10 bg-gray-900 border-gray-800 focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    className="pl-10 pr-10 bg-gray-900 border-gray-800 focus:border-primary"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                  </button>
                </div>
                <p className="text-xs text-gray-500">
                  Must be at least 8 characters and include a number and a special character
                </p>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox id="terms" className="mt-1" />
                <Label htmlFor="terms" className="text-sm text-gray-400">
                  I agree to the{" "}
                  <Link href="/terms" className="text-primary hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </Label>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90">Create Account</Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full border-gray-800" />
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-black px-2 text-gray-400">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <Button variant="outline" className="border-gray-800 hover:bg-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    <path d="M1 1h22v22H1z" fill="none" />
                  </svg>
                  <span className="sr-only">Google</span>
                </Button>
                <Button variant="outline" className="border-gray-800 hover:bg-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Button>
                <Button variant="outline" className="border-gray-800 hover:bg-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.36 14.83c-1.43-1.74-4.9-1.33-6.36-1.32-.27 0-.55 0-.82-.01-1.49-.07-4.91-.5-6.36-1.8-1.4-1.24-1.4-3.57 0-4.81 1.43-1.74 4.9-1.33 6.36-1.32.27 0 .55 0 .82.01 1.49.07 4.91.5 6.36 1.8 1.38 1.23 1.38 3.54-.01 4.8z" />
                  </svg>
                  <span className="sr-only">Apple</span>
                </Button>
              </div>

              <div className="text-center text-sm text-gray-400">
                Already have an account?{" "}
                <Link href="/auth/signin" className="text-primary hover:underline">
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:block lg:w-1/2">
        <div className="relative h-full w-full">
          <Image
            src="/placeholder.svg?height=1080&width=1920&text=CourseHub"
            alt="CourseHub"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 max-w-xl p-12">
            <blockquote className="text-xl font-medium text-white">
              "Joining CourseHub was one of the best decisions I've made for my education. The platform offers
              incredible value with expert instructors and a supportive community."
            </blockquote>
            <div className="mt-4 flex items-center">
              <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-700">
                <div className="h-full w-full flex items-center justify-center text-lg font-bold">MS</div>
              </div>
              <div className="ml-4">
                <p className="font-medium text-white">Michael Smith</p>
                <p className="text-sm text-gray-300">Data Scientist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

