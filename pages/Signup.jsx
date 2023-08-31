import { Form, useActionData, Link, useNavigate, redirect } from "react-router-dom"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../api"

export async function action({ request }) {
  const formData = await request.formData()
  const email = formData.get("email")
  const password = formData.get("password")
  const passwordConfirm = formData.get("password-confirm")
  const pathname = new URL(request.url)
    .searchParams.get("redirectTo") || "/host"

  if (password !== passwordConfirm) {
    return "Please enter the same password"
  }

  try {
    await createUserWithEmailAndPassword(auth, email, password)
    return redirect(pathname)
  } catch (err) {
    let regError = err.message.replaceAll("Firebase: Error (auth/", "")
    regError = regError.replaceAll(")", "")
    return regError
  }

}

export default function Signup() {
  const errMsg = useActionData()
  const navigation = useNavigate()
  return (
    <div className="signup">
      <h1>Create a new account</h1>
      {errMsg && <h3 className="red">{errMsg}</h3>}
      <Form
        method="post"
        className="main-form"
        replace
      >
        <input type="email" required name="email" placeholder="Email..." />
        <input type="password" required name="password" placeholder="Password..." />
        <input type="password" required name="password-confirm" placeholder="Confirm password..." />
        <button
          disabled={navigation.state === "submitting"}
        >
          {navigation.state === "submitting"
            ? "Signing up..."
            : "Sign up"
          }
        </button>
      </Form>
      <Link
        className="have-account"
        to="/login"
      >
        Already have an account?
      </Link>
    </div>
  )
}