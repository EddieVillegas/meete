import type { SignUp } from "../schemas/SignUp"
import { auth } from "@/lib/auth"
import { IAuthRepository } from "./Auth.repository"
import { authRepository } from "./Auth.repository"

class AuthService {

    constructor(private readonly authRepo: IAuthRepository){}

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
}

export default new AuthService(authRepository)