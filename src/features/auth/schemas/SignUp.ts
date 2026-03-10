import z, { string } from "zod"

export const BaseAuthSchema = z.object({
    email: z.email({error: "not valid email"}),
    name: z.string().trim().min(1, {error: "name is required"}),
    password: z.string().trim().min(8, {error: "password to short, min 8 characteres"}),
    passwordConfirmation: string().trim().min(1, {error: "password confirmation is not empty"})
})

export const SignUpSchema = BaseAuthSchema
    .pick({
        email: true,
        name: true,
        password: true,
        passwordConfirmation: true
    })
    .refine(data => data.password === data.passwordConfirmation, {
        error: "password and password confirmations are not equal",
        path: ['passwordConfirmation']
    })

export type SignUp = z.infer<typeof SignUpSchema>