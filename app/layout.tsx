import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { UserCircle, LogOut } from "lucide-react"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CourseHub - Learn Anywhere, Anytime",
  description: "Access high-quality courses from expert instructors worldwide.",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })
  const { data: { session } } = await supabase.auth.getSession()

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <header className="border-b">
              <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold">
                  CourseHub
                </Link>
                <nav className="hidden md:flex items-center gap-6">
                  <Link href="/courses" className="text-sm hover:text-primary">
                    Courses
                  </Link>
                  <Link href="/about" className="text-sm hover:text-primary">
                    About
                  </Link>
                  <Link href="/contact" className="text-sm hover:text-primary">
                    Contact
                  </Link>
                  {session ? (
                    <>
                      <Link href="/dashboard" className="text-sm hover:text-primary">
                        Dashboard
                      </Link>
                      <form action="/auth/signout" method="post">
                        <Button variant="ghost" size="sm" className="gap-2">
                          <LogOut className="h-4 w-4" />
                          Sign Out
                        </Button>
                      </form>
                    </>
                  ) : (
                    <Link href="/auth/signin">
                      <Button variant="ghost" size="sm" className="gap-2">
                        <UserCircle className="h-4 w-4" />
                        Sign In
                      </Button>
                    </Link>
                  )}
                </nav>
              </div>
            </header>
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'