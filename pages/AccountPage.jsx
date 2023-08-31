import { Link } from "react-router-dom"
import { auth } from "../api"
import { signOut } from "firebase/auth"

export default function AccountPage() {
  return (
    <div className="account-page container">
      <img
        src="../assets/images/avatar-icon.png"
        className="login-icon"
      />
      <h2>{auth.currentUser.email}</h2>
      <Link
        className="vans-link"
        to="/host/vans"
      >Your vans</Link>
      <button
        className="log-out-btn"
        onClick={() => {
          window.location.reload()
          signOut(auth)
        }}
      >Log out</button>
    </div>
  )
}
