import RegisterForm from '@/src/features/auth/RegisterForm'
import Heading from '@/src/shared/components/typography/Heading'
import Link from 'next/link'

export default function RegisterPage() {
  return (
    <>
      <Heading>Create Account</Heading>
      <RegisterForm />
      <nav className="mt-20 flex justify-between">
        <Link
          href='/auth/login'
          className="font-bold"
        >
          Login
        </Link>
        <Link
          href="/auth/forgot-password"
          className="font-bold"
        >
          Forgot password
        </Link>
      </nav>
    </>
  )
}
