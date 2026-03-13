import { db } from "../db";
import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

const database = drizzleAdapter(db, {
    provider: "pg",
    usePlural: true,
})

const plugins = [nextCookies()]
const emailAndPasswordRules = {
    enabled: true,
    requestAnimationFrame: true
}

export const auth = betterAuth({
    database,
    emailAndPassword: {
        ...emailAndPasswordRules
    },
    plugins,
})