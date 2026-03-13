import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Form,
    FormError,
    FormInput, 
    FormLabel, 
    FormSubmit,
} from "@/components/forms"
import {
    SignIn,
    SignInSchema,
} from "../schemas/auth.schema"
import { signInAction } from "../actions/auth.action"
import toast from "react-hot-toast"

const {
    register,
    handleSubmit,
    formState: { errors }
} = useForm({
    mode: "all",
    resolver: zodResolver(SignInSchema),
})

const onSubmit:SubmitHandler<SignIn> = async (data) => {
    const { success, error } = await signInAction(data)
    if(error){
        toast.error(error)
    }
    if(success){
        toast.success(success)
    }
}

export default function LoginForm() {
    return (
        <Form method="POST" onSubmit={handleSubmit(onSubmit)}>
            <FormLabel 
                htmlFor="email"
            >
                e-mail
            </FormLabel>
            <FormInput 
                id="email"
                type="email"
                placeholder="email@example.com"
                {...register('email')}
            />
            {errors.email && <FormError>{errors.email.message}</FormError>}
            <FormLabel 
                htmlFor="password"
                >
                password
            </FormLabel>
            <FormInput
                id="password"
                type="password"
                placeholder="password"
                {...register('password')}
            />
            {errors.password && <FormError>{errors.password.message}</FormError>}
            <FormSubmit
                value="Login"
            />
        </Form>
    )
}