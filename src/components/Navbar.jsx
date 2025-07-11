import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";
import "../assets/css/global.css";

function Navbar() {
    const { user } = useContext(AuthContext);

    const handleLogout = () => {
        signOut(auth);
    };

    return (
        <header className="header-background">
            <div className="logo">
                <Link to="/" className="logo-link">
                    <h1>Neocode Colombia</h1>
                </Link>
            </div>

            <nav>
                <ul className="nav-links">
                    <li><Link to="/curso-html-css">HTML y CSS</Link></li>
                    <li><Link to="/curso-javascript">JavaScript</Link></li>
                    <li><Link to="/curso-python">Python</Link></li>
                    <li><Link to="/curso-bases-datos">Bases de Datos</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </nav>

            <div className="social-section">
                {user ? (
                    <div className="auth-links">
                        <span style={{ color: "#00f", marginRight: "10px" }}>
                            {user.email}
                        </span>
                        <button onClick={handleLogout} className="auth-link">
                            Cerrar sesión
                        </button>
                    </div>
                ) : (
                    <div className="auth-links">
                        <Link to="/registro" className="auth-link">Registrarse</Link>
                        <Link to="/login" className="auth-link">Iniciar Sesión</Link>
                    </div>
                )}

                <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" className="facebook"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://youtube.com" target="_blank" className="youtube"><i className="fab fa-youtube"></i></a>
                    <a href="https://instagram.com" target="_blank" className="instagram"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
