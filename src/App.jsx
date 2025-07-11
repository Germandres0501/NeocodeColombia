import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Páginas
import Inicio from "./pages/Inicio";
import CursoHtmlCss from "./pages/CursoHtmlCss";
import CursoJavascript from "./pages/CursoJavascript";
import CursoPython from "./pages/CursoPython";
import CursoBasesDatos from "./pages/CursoBasesDatos";
import Contacto from "./pages/Contacto";
import Login from "./pages/Login";
import Registro from "./pages/Registro";

// Componentes comunes
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Estilos globales
import "./assets/css/global.css";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/curso-html-css" element={<CursoHtmlCss />} />
                <Route path="/curso-javascript" element={<CursoJavascript />} />
                <Route path="/curso-python" element={<CursoPython />} />
                <Route path="/curso-bases-datos" element={<CursoBasesDatos />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registro" element={<Registro />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
