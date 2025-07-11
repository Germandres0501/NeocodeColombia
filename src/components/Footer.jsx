import React from "react";
import "../assets/css/global.css"; // o donde tengas tus estilos globales

function Footer() {
    return (
        <footer className="footer">
            <p>© 2025 Plataforma de Cursos. Todos los derechos reservados.</p>

            {/* Botón flotante de WhatsApp */}
            <a href="https://wa.me/1234567890" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp whatsapp-icon"></i>
            </a>
        </footer>
    );
}

export default Footer;
