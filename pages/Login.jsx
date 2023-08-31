import React from "react"
import {
    useLoaderData,
    useNavigation,
    Form,
    redirect,
    useActionData, Link
} from "react-router-dom"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../api"
import AccountPage from "./AccountPage"

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    const pathname = new URL(request.url)
        .searchParams.get("redirectTo") || "/host"

    try {
        await signInWithEmailAndPassword(auth, email, password)
        return redirect(pathname)
    } catch (err) {
        let regError = err.message.replaceAll("Firebase: Error (auth/", "")
        regError = regError.replaceAll(")", "")
        return regError
    }
}

export default function Login() {
    const errorMessage = useActionData()
    const message = useLoaderData()
    const navigation = useNavigation()

    if (auth.currentUser) {
        return <AccountPage />
    }

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            {message && <h3 className="red">{message}</h3>}
            {errorMessage && <h3 className="red">{errorMessage}</h3>}

            <Form
                method="post"
                className="main-form"
                replace
            >
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <button
                    disabled={navigation.state === "submitting"}
                >
                    {navigation.state === "submitting"
                        ? "Logging in..."
                        : "Log in"
                    }
                </button>
            </Form>
            <Link
                className="new-account"
                to="/signup"
            >
                Create a new account?
            </Link>
        </div>
    )
}
