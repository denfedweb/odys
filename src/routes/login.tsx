import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import useAuthStore from '../store/authStore.ts'
import {useNavigate} from "react-router-dom"
import useLoaderStore from "../store/loaderStore.ts"

import { Button } from "../../components/ui/button.tsx"
import { Input } from "../../components/ui/input.tsx"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../../components/react-hook-form/form.tsx"

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters.",
    }),
})

const Login = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: ""
        },
    })
    const navigate = useNavigate()
    const setToken = useAuthStore((state) => state.setToken)
    const setLoading = useLoaderStore((state) => state.setLoading)
    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        const {username, password} = values
        setLoading(true)
        const token = await login(username, password)
        localStorage.setItem('token', token)
        setToken(token)
        navigate('/bundles')
        setLoading(false)
    }

    const login = (username: string, password: string) => {
        return new Promise(function(resolve, reject) {
            setTimeout(() => {
                resolve("test-token" + username + password)
            }, 1000)
        })
    }

    return (
        <div className='h-screen flex flex-col justify-center items-center'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input {...field} type='password' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button className='ma-2.5' type="submit">Login</Button>
                </form>
            </Form>
        </div>
    )
}

export default Login
