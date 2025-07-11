// src/pages/Login.jsx
import React, { useState } from "react";
import { auth } from "../firebase/firebase";
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            alert("Inicio de sesión exitoso");
            navigate("/");
        } catch (err) {
            alert("Error: " + err.message);
        }
    };

    const handleEmailLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert("Inicio de sesión exitoso");
            navigate("/");
        } catch (err) {
            alert("Error: " + err.message);
        }
    };

    return (
        <section className="form-container">
            <h2>Iniciar Sesión</h2>

            <button onClick={handleGoogle} className="social-button google">
                <i className="fab fa-google"></i> Continuar con Google
            </button>

            <form onSubmit={handleEmailLogin}>
                <label>Correo:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label>Contraseña:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <button type="submit" className="boton">Entrar</button>
            </form>
        </section>
    );
}

export default Login;
