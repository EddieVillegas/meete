import { Form, FormInput, FormLabel, FormSubmit } from "@/src/shared/components/forms"

export default function ForgotPasswordForm(){
    return(
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