import { Form, FormInput, FormLabel, FormSubmit } from "@/src/shared/components/forms";
import Heading from "@/src/shared/components/typography/Heading";
import { generatePageTitle } from "@/src/shared/utils/metadata";
import { Metadata } from "next";

export const meta: Metadata = {
    title: generatePageTitle('Recover password')
}

export default function ForgotPasswordPage(){
    return (
        <Form>
            <FormLabel>email</FormLabel>
            <FormInput 
                type="email"
                id="email"
                placeholder="email"
            />

            <FormSubmit
                value="Send"
            />
        </Form>
    )
}