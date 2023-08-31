import { useEffect, useState } from "react"
import { Link, NavLink, redirect } from "react-router-dom"
import { signOut } from "firebase/auth"
import { auth } from "../api"

export default function Header() {
    const [width, setWidth] = useState(window.innerWidth)
    const [showNav, setShowNav] = useState(false)

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    useEffect(() => {
        function resizeWidth() {
            setWidth(window.innerWidth)
        }
        window.addEventListener("resize", resizeWidth)

        return () => {
            window.removeEventListener("resize", resizeWidth)
        }
    }, [])

    const toggleMenu = (
        <div
            className={`toggle-menu ${showNav && "toggle-menu-active"}`}
            onClick={() => setShowNav(preVal => !preVal)}
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
    )

    return (
        <header>
            <div className="container">
                <Link className="site-logo" to="/">#VanLife</Link>

                {width < 768 && toggleMenu}

                <nav
                    style={
                        showNav || width >= 768 ? { zIndex: "0", opacity: "1" } : {
                            zIndex: "-1", opacity: "0"
                        }}
                >
                    <NavLink
                        to="host"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Host
                    </NavLink>
                    <NavLink
                        to="about"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="vans"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Vans
                    </NavLink>
                    <Link to="login" className="login-link">
                        <img
                            src="../assets/images/avatar-icon.png"
                            className="login-icon"
                        />
                    </Link>
                </nav>
            </div>
        </header>
    )
}