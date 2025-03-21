"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b border-gray-800 bg-black">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-white">CourseHub</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm font-medium text-white hover:text-primary">
                Home
              </Link>
              <Link href="/courses" className="text-sm font-medium text-gray-400 hover:text-white">
                Courses
              </Link>
              <Link href="/about" className="text-sm font-medium text-gray-400 hover:text-white">
                About
              </Link>
              <Link href="/contact" className="text-sm font-medium text-gray-400 hover:text-white">
                Contact
              </Link>
            </nav>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <Input
                type="search"
                placeholder="Search courses..."
                className="w-[200px] pl-10 bg-gray-900 border-gray-800 focus:border-primary"
              />
            </div>
            <Link href="/auth/signin">
              <Button variant="outline" className="border-gray-800 text-white hover:bg-gray-800">
                Sign In
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button className="bg-primary hover:bg-primary/90">Sign Up</Button>
            </Link>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            <nav className="flex flex-col gap-4 pb-4">
              <Link href="/" className="text-sm font-medium text-white hover:text-primary">
                Home
              </Link>
              <Link href="/courses" className="text-sm font-medium text-gray-400 hover:text-white">
                Courses
              </Link>
              <Link href="/about" className="text-sm font-medium text-gray-400 hover:text-white">
                About
              </Link>
              <Link href="/contact" className="text-sm font-medium text-gray-400 hover:text-white">
                Contact
              </Link>
              <div className="relative mt-2">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Search courses..."
                  className="w-full pl-10 bg-gray-900 border-gray-800"
                />
              </div>
              <div className="mt-4 flex gap-4">
                <Link href="/auth/signin" className="flex-1">
                  <Button variant="outline" className="w-full border-gray-800 text-white hover:bg-gray-800">
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth/signup" className="flex-1">
                  <Button className="w-full bg-primary hover:bg-primary/90">Sign Up</Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

