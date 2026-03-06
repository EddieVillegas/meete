import Form from "@/src/shared/components/forms/Form"
import FormInput from "@/src/shared/components/forms/FormInput"
import FormLabel from "@/src/shared/components/forms/FormLabel"
import FormSubmit from "@/src/shared/components/forms/FormSubmit"

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