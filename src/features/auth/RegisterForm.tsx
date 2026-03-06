import { Form, FormInput, FormLabel, FormSubmit } from "@/components/forms";

export default function RegisterForm() {
  return (
    <Form>
        <FormLabel htmlFor="name">Name</FormLabel>
        <FormInput
            id="name"
            type="text"
            placeholder="name"
        />

        <FormLabel htmlFor="email">e-mail</FormLabel>
        <FormInput 
            id="email"
            type="email"
            placeholder="email"
        />

        <FormLabel htmlFor="password">password</FormLabel>
        <FormInput 
            id="password"
            type="password"
            placeholder="password"
        />

        <FormLabel htmlFor="email">confirm password</FormLabel>
        <FormInput 
            id="password_confirm"
            type="password"
            placeholder="confirm password"
        />

        <FormSubmit value="Register"></FormSubmit>
    </Form>
  )
}
