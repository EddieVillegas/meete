"use server"

import { SighUp, SignUpSchema } from "../schemas/SignUp";

export default async function signUpAction(
    input: SighUp
){
    const { success, data } = SignUpSchema.safeParse(input)

    if(!success){
        return
    }

    console.log(data)
}