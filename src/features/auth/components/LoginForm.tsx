import Form from "@/src/shared/components/forms/Form"
import FormInput from "@/src/shared/components/forms/FormInput"
import FormLabel from "@/src/shared/components/forms/FormLabel"

export default function LoginForm() {
    return (
        <Form method="POST">
            <FormLabel/>
            <FormInput/>
            <label className="block" htmlFor="password">password</label>
            <input
                id="password"
                type="password"
                placeholder="password"
                className="border border-slate-200 w-full p-2"
            />
        </Form>
    )
}