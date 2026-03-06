export default function LoginForm() {
    return (
        <form
            className="mt-10 space-y-2"
        >
            <label className="block" htmlFor="email">e-mail</label>
            <input 
                id="email" 
                type="email" 
                placeholder="email@example.com" 
                className="border border-slate-200 w-full p-2" 
            />

            <label className="block" htmlFor="password">password</label>
            <input 
                id="password" 
                type="password" 
                placeholder="password" 
                className="border border-slate-200 w-full p-2" 
            />
        </form>
    )
}