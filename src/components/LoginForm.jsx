import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mensaje, setMensaje] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:8080/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });

            const texto = await res.text();

            if (res.ok) {
                setMensaje("✅ " + texto);
                setTimeout(() => {
                    navigate("/"); // Redirige al inicio
                }, 1500);
            } else {
                setMensaje("❌ " + texto);
            }
        } catch (error) {
            setMensaje("❌ Error de red");
            console.error(error);
        }
    };

    return (
        <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Correo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
                />
                <button type="submit" style={{ width: "100%", padding: "10px" }}>
                    Iniciar Sesión
                </button>
            </form>
            <p style={{ marginTop: "10px", fontWeight: "bold" }}>{mensaje}</p>
        </div>
    );
};

export default LoginForm;
