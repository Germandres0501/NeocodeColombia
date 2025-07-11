// src/pages/Inicio.jsx
import React from "react";
import "../assets/css/global.css";

function Inicio() {
    return (
        <section className="intro">
            <div className="intro-content">
                <p>
                    Somos una plataforma educativa líder, profundamente comprometida con la excelencia y la innovación
                    en la enseñanza tecnológica. Nuestro propósito fundamental es empoderar a los estudiantes,
                    dotándolos de un conjunto integral de habilidades prácticas y conocimientos de vanguardia,
                    indispensables para sobresalir y prosperar en el dinámico y competitivo panorama laboral actual. Nos
                    dedicamos a cultivar talentos, fomentar el pensamiento crítico y la resolución de problemas,
                    asegurando que cada egresado esté completamente preparado para afrontar los desafíos y aprovechar
                    las oportunidades del futuro tecnológico.
                </p>

            </div>

            <h2>Nuestros Cursos</h2>
            <div className="cursos-container">
                <div className="curso">
                    <h3><a href="/curso-html-css">Curso de HTML y CSS</a></h3>
                    <p>Aprende a crear páginas web desde cero.</p>
                    <img src="/images/cursohtmlcss.jpg" alt="Curso HTML y CSS" />

                </div>
                <div className="curso">
                    <h3><a href="/curso-javascript">Curso de JavaScript</a></h3>
                    <p>Domina el lenguaje más usado en la web.</p>
                    <img src="/images/java.jpeg" className="responsive-img" />
                </div>
                <div className="curso">
                    <h3><a href="/curso-python">Curso de Python</a></h3>
                    <p>Aprende Python desde cero.</p>
                    <img src="/images/phyton.jpeg" className="responsive-img" />
                </div>
                <div className="curso">
                    <h3><a href="/curso-bases-datos">Curso de Bases de Datos</a></h3>
                    <p>Aprende SQL y gestión de datos.</p>
                    <img src="/images/bases de datos.jpeg" className="responsive-img" />
                </div>
            </div>
        </section>
    );
}

export default Inicio;

