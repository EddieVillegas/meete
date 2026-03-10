"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { SignUp, SignUpSchema } from "../schemas/SignUp";
import { Form, FormInput, FormLabel, FormSubmit, FormError } from "@/components/forms";
import signUpAction from "../actions/auth.action";
import toast from "react-hot-toast";

export default function RegisterForm() {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        mode: 'all',
        resolver: zodResolver(SignUpSchema),
    })

    const handleOnSubmit =  async (data: SignUp) =>{
        const response = await signUpAction(data)

        if(response?.error){
            toast.error(response.error)
        }

        if(response?.success){
            toast.success(response.success)
            reset()
        }
    }

    return (
        <Form onSubmit={handleSubmit(handleOnSubmit)}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <FormInput
                id="name"
                type="text"
                placeholder="name"
                {...register('name')}
            />
            {errors.name && <FormError>{errors.name.message}</FormError>}

            <FormLabel htmlFor="email">e-mail</FormLabel>
            <FormInput
                id="email"
                type="email"
                placeholder="email"
                {...register('email')}
            />
            {errors.email && <FormError>{errors.email.message}</FormError>}

            <FormLabel htmlFor="password">password</FormLabel>
            <FormInput
                id="password"
                type="password"
                placeholder="password"
                {...register('password')}
            />
            {errors.password && <FormError>{errors.password.message}</FormError>}

            <FormLabel htmlFor="password_confirmation">confirm password</FormLabel>
            <FormInput
                id="password_confirmation"
                type="password"
                placeholder="confirm password"
                {...register('passwordConfirmation')}
            />
            {errors.passwordConfirmation && <FormError>{errors.passwordConfirmation.message}</FormError>}


            <FormSubmit value="Register"></FormSubmit>
        </Form>
    )
}
