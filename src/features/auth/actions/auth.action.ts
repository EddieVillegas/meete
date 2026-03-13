"use server"

import authService from "../services/Auth.service";
import {
    SignUp,
    SignIn,
    SignUpSchema,
    SignInSchema,
} from "../schemas/auth.schema";

export const signUpAction = async(
    input: SignUp
) => {
    const {
        success,
        data,
    } = SignUpSchema.safeParse(input)

    if(!success) return

    const response = await authService.register(data)

    return response
}

export const signInAction = async (
    input: SignIn
) => {
    const {
        data,
        success,
    } = await SignInSchema.safeParse(input)
    if(!success) return { error: "something was wrong", success: ""}
    const response = await authService.login(data)
    return response
}