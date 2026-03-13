import type { SignIn, SignUp } from "../schemas/auth.schema"
import { auth } from "@/lib/auth"
import { IAuthRepository } from "./Auth.repository"
import { authRepository } from "./Auth.repository"
import { success } from "zod"
import { headers } from "next/headers"
import { APIError } from "better-auth"
import { error } from "console"
import { isAPIError } from "better-auth/api"
import { realtimeMessages } from "drizzle-orm/supabase"

class AuthService {

    constructor(
        private readonly authRepo: IAuthRepository
    ){}

    async register({
        name,
        email,
        password,
    }: SignUp) {
        const user = await this.authRepo.userExists(email)
        if(user){
            return {
                error: "this email is already register",
                success: null
            }
        }
        auth.api.signUpEmail({
            body: {
                email,
                name,
                password
            }
        })
        return {
            error: '',
            success: "Account created successfully"
        }
    }

    async login({
        email,
        password,
    }: SignIn){
        const user = await this.authRepo.userExists(email)
        if(!user) {
            return {
                error: "El usuario no existe",
                succes: ""
            }
        }
        try {
            await auth.api.signInEmail({
                body: {
                    email,
                    password,
                    callbackURL: '/dashboard'
                },
                headers: await headers()
            })
        } catch(e){
            if(isAPIError(e)){
                const messages: Record<number, string> = {
                    401: "Password Incorrecto"
                }
                const errorMessage = messages[e.statusCode]
                if(errorMessage){
                    return {
                        error: errorMessage
                    }
                }
            }
        }

        return {
            error: "",
            success: ""
        }
    }
}

export default new AuthService(authRepository)