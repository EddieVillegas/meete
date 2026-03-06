import Heading from "@/components/typography/Heading";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login"
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