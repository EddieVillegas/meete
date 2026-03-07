import ForgotPasswordForm from "@/src/features/auth/components/ForgotPasswordForm";
import Heading from "@/src/shared/components/typography/Heading";
import { generatePageTitle } from "@/src/shared/utils/metadata";
import { Metadata } from "next";

export const meta: Metadata = {
    title: generatePageTitle('Recover password')
}

export default function ForgotPasswordPage(){
    return (
        <>
        <Heading>Recover your password</Heading>
        <ForgotPasswordForm/>
        </>
    )
}