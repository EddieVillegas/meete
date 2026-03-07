import ForgotPasswordForm from "@/src/features/auth/components/ForgotPasswordForm";
import Heading from "@/src/shared/components/typography/Heading";
import { generatePageTitle } from "@/src/shared/utils/metadata";
import { Metadata } from "next";
import Link from "next/link";

export const meta: Metadata = {
    title: generatePageTitle('Recover password')
}

export default function ForgotPasswordPage(){
    return (
        <>
            <Heading>Recover your password</Heading>
            <ForgotPasswordForm/>
             <nav className="mt-20 flex justify-between">
                <Link
                    href='/auth/login'
                    className="font-bold"
                >
                    login
                </Link>
                <Link
                    href="/auth/register"
                    className="font-bold"
                >
                    register
                </Link>
            </nav>
        </>
    )
}