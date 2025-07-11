// src/pages/Contacto.jsx
import React from "react";

function Contacto() {
    return (
        <section className="form-container">
            <h2>Contáctanos</h2>
            <form>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" required />

                <label htmlFor="email">Correo Electrónico:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="mensaje">Mensaje:</label>
                <textarea id="mensaje" name="mensaje" required></textarea>

                <button type="submit" className="boton">Enviar</button>
            </form>
        </section>
    );
}

export default Contacto;
