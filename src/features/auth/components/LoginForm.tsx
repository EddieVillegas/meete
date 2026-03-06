import {
    Form,
    FormInput, 
    FormLabel, 
    FormSubmit,
} from "@/components/forms"

export default function LoginForm() {
    return (
        <Form method="POST">
            <FormLabel 
                htmlFor="email"
            >
                e-mail
            </FormLabel>
            <FormInput 
                id="email"
                type="email"
                placeholder="email@example.com"
            />
            <FormLabel 
                htmlFor="password"
            >
                password
            </FormLabel>
            <FormInput
                id="password"
                type="password"
                placeholder="password"
            />
            <FormSubmit
                value="Login"
            />
        </Form>
    )
}