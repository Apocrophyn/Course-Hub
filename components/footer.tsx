import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-xl font-bold text-white">CourseHub</h3>
            <p className="mt-4 text-gray-400">
              Empowering learners worldwide with quality education and skills for the future.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-400 hover:text-primary">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-primary">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Support</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/help" className="text-gray-400 hover:text-primary">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-primary">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Newsletter</h3>
            <p className="mt-4 text-gray-400">Subscribe to our newsletter to get the latest updates.</p>
            <div className="mt-4 flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-gray-900 border-gray-800 focus:border-primary"
              />
              <Button className="bg-primary hover:bg-primary/90">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} CourseHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

