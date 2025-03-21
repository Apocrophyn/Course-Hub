import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { sendEmail } from "@/lib/email"

export async function POST(request: Request) {
  try {
    const supabase = createRouteHandlerClient({ cookies })
    const { data: { session } } = await supabase.auth.getSession()

    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    const { courseId } = await request.json()

    // In a real app, you would:
    // 1. Check if the user is already enrolled
    // 2. Process payment
    // 3. Create enrollment record in database
    // 4. Send confirmation email

    // For now, we'll just send a confirmation email
    await sendEmail({
      to: session.user.email!,
      subject: "Welcome to Your New Course!",
      html: `
        <h1>Welcome to CourseHub!</h1>
        <p>Thank you for enrolling in your new course. You can now access your course materials and start learning.</p>
        <p>Visit your dashboard to get started: <a href="${process.env.NEXT_PUBLIC_APP_URL}/dashboard">View Dashboard</a></p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Enrollment error:", error)
    return NextResponse.json(
      { error: "Failed to enroll in course" },
      { status: 500 }
    )
  }
} 