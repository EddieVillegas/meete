import Heading from "@/components/typography/Heading";
import { generatePageTitle } from "@/src/shared/utils/metadata";
import { Metadata } from "next";
import LoginForm from "@/src/features/auth/components/LoginForm";

export const metadata: Metadata = {
    title: generatePageTitle('Login')
}

export default function LoginPage(){
    return(
        <>
            <Heading>Login</Heading>
            <LoginForm/>
        </>
    )
}