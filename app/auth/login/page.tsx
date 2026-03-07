import Heading from "@/components/typography/Heading";
import { generatePageTitle } from "@/src/shared/utils/metadata";
import { Metadata } from "next";
import LoginForm from "@/src/features/auth/components/LoginForm";
import Link from "next/link";

export const metadata: Metadata = {
    title: generatePageTitle('Login')
}

export default function LoginPage(){
    return(
        <>
            <Heading>Login</Heading>
            <LoginForm/>
            <nav>
                <Link href='/auth/register' className="font-bold">Create account</Link>
                <Link href="/auth/forgot-password" className="font-bold">Forgot password</Link>
            </nav>
        </>
    )
}