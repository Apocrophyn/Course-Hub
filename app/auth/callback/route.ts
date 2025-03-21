import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (code) {
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore })
    
    try {
      const { data: { user }, error } = await supabase.auth.exchangeCodeForSession(code)
      
      if (error) throw error

      // Create user record in the users table if it doesn't exist
      if (user) {
        const { error: insertError } = await supabase
          .from('users')
          .upsert({
            id: user.id,
            email: user.email,
            role: 'student',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          }, {
            onConflict: 'id'
          })

        if (insertError) throw insertError
      }
    } catch (error) {
      console.error('Auth callback error:', error)
      return NextResponse.redirect(`${requestUrl.origin}/auth/signin?error=Authentication failed`)
    }
  }

  // URL to redirect to after sign in process completes
  return NextResponse.redirect(requestUrl.origin)
} 