// src/pages/Registro.jsx
import React, { useState } from "react";
import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Registro() {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegistro = async (e) => {
        e.preventDefault();
        try {
            const userCred = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(userCred.user, { displayName: nombre });
            alert("¡Registro exitoso!");
            navigate("/");
        } catch (err) {
            alert("Error: " + err.message);
        }
    };

    const handleGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            alert("¡Registro con Google exitoso!");
            navigate("/");
        } catch (err) {
            alert("Error: " + err.message);
        }
    };

    return (
        <section className="form-container">
            <h2>Registrarse</h2>
            <form onSubmit={handleRegistro}>
                <label>Nombre:</label>
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />

                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <label>Contraseña:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                <button type="submit" className="boton">Registrarse</button>
            </form>

            <button onClick={handleGoogle} className="social-button google">
                <i className="fab fa-google"></i> Registrarse con Google
            </button>
        </section>
    );
}

export default Registro;
