import Heading from "@/components/typography/Heading";
import { generatePageTitle } from "@/src/shared/utils/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: generatePageTitle('Login')
}

export default function LoginPage(){
    return(
        <>
            <Heading>Login</Heading>
            <Heading level={4} className="text-center">Login</Heading>
            <Heading level={3}>Login</Heading>
            <Heading level={5}>Login</Heading>
        </>
    )
}