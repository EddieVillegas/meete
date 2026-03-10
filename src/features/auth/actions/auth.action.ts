"use server"

import authService from "../services/Auth.service";
import { SignUp, SignUpSchema } from "../schemas/SignUp";
import { authRepository } from "../services/Auth.repository";

export default async function signUpAction(
    input: SignUp
){
    const { success, data } = SignUpSchema.safeParse(input)

    if(!success) return

    const response = await authService.register(data)

    return response
}