// src/pages/CursoJavaScript.jsx
import React from "react";
import '../assets/css/global.css';

function CursoJavaScript() {
    return (
        <div className="course-program-container">
            <h1>Programa de Estudios Detallado: Curso Completo de JavaScript</h1>
            <p>Este programa exhaustivo te proporcionará las bases sólidas y habilidades avanzadas en JavaScript, el
                lenguaje esencial para el desarrollo web interactivo, back-end con Node.js y más allá.</p>

            <section className="module-section">
                <h2>Módulo 1: Fundamentos de JavaScript y Sintaxis Básica <span
                    className="module-hours">(10 Horas)</span></h2>
                <p><strong>Objetivo:</strong> Comprender la sintaxis básica de JavaScript, cómo funciona en el navegador
                    y cómo manipular elementos HTML de forma dinámica.</p>

                <h3>1.1. Introducción a JavaScript</h3>
                <ol>
                    <li>¿Qué es JavaScript? Historia y evolución (ECMAScript).</li>
                    <li>¿Dónde se ejecuta JavaScript? (Navegador, Node.js).</li>
                    <li>Configuración del entorno de desarrollo (VS Code, extensiones).</li>
                    <li>Cómo incluir JavaScript en HTML (inline, interno, externo).</li>
                    <li>Consola del navegador (DevTools) para depuración.</li>
                    <li>Comentarios en JavaScript.</li>
                </ol>

                <h3>1.2. Variables y Tipos de Datos</h3>
                <ol>
                    <li>Declaración de variables: `var`, `let`, `const`. Diferencias y ámbito (scope).</li>
                    <li>Tipos de datos primitivos: `String`, `Number`, `Boolean`, `null`, `undefined`, `Symbol`,
                        `BigInt`.
                    </li>
                    <li>Tipo de dato complejo: `Object` (introducción).</li>
                    <li>Conversión de tipos (coerción): implícita y explícita.</li>
                    <li>Operadores: aritméticos, de asignación, de comparación, lógicos.</li>
                </ol>

                <h3>1.3. Estructuras de Control</h3>
                <ol>
                    <li>Condicionales: `if`, `else if`, `else`.</li>
                    <li>Operador ternario.</li>
                    <li>`switch` / `case`.</li>
                    <li>Bucles: `for`, `while`, `do...while`.</li>
                    <li>`break` y `continue`.</li>
                    <li>Bucles `for...in` y `for...of` (introducción).</li>
                </ol>

                <h3>1.4. Funciones</h3>
                <ol>
                    <li>Definición de funciones: declaración de función, expresión de función.</li>
                    <li>Parámetros y argumentos.</li>
                    <li>Valor de retorno (`return`).</li>
                    <li>Funciones anónimas.</li>
                    <li>Funciones de flecha (Arrow Functions): sintaxis y diferencias con funciones tradicionales.</li>
                    <li>Ámbito de las variables (Scope Chain, Closures - introducción).</li>
                </ol>
            </section>

            <section className="module-section">
                <h2>Módulo 2: Manipulación del DOM y Eventos <span className="module-hours">(12 Horas)</span></h2>
                <p><strong>Objetivo:</strong> Interactuar con la estructura de la página web (DOM), responder a las
                    acciones del usuario y modificar el contenido y estilo dinámicamente.</p>

                <h3>2.1. El Document Object Model (DOM)</h3>
                <ol>
                    <li>¿Qué es el DOM? Árbol del DOM.</li>
                    <li>Acceder a elementos del DOM: `getElementById`, `getElementsByClassName`, `getElementsByTagName`,
                        `querySelector`, `querySelectorAll`.
                    </li>
                    <li>Navegación del DOM: `parentNode`, `children`, `nextElementSibling`, `previousElementSibling`.
                    </li>
                </ol>

                <h3>2.2. Modificación del DOM</h3>
                <ol>
                    <li>Crear nuevos elementos: `createElement`, `createTextNode`.</li>
                    <li>Añadir elementos: `appendChild`, `prepend`, `insertBefore`.</li>
                    <li>Eliminar elementos: `removeChild`, `remove`.</li>
                    <li>Modificar contenido de texto: `textContent`, `innerText`.</li>
                    <li>Modificar contenido HTML: `innerHTML`.</li>
                    <li>Modificar atributos: `setAttribute`, `getAttribute`, `removeAttribute`.</li>
                    <li>Modificar clases CSS: `classList` (`add`, `remove`, `toggle`, `contains`).</li>
                    <li>Modificar estilos CSS: `element.style.property`.</li>
                </ol>

                <h3>2.3. Eventos en JavaScript</h3>
                <ol>
                    <li>¿Qué son los eventos? El ciclo de vida de los eventos (captura, objetivo, burbujeo).</li>
                    <li>Manejadores de eventos (Event Handlers):
                        <ol>
                            <li>HTML `on...` atributos (desaconsejado).</li>
                            <li>Propiedades `on...` del DOM (ej. `onclick`).</li>
                            <li>`addEventListener` y `removeEventListener` (método preferido).</li>
                        </ol>
                    </li>
                    <li>Objeto `Event`: `target`, `preventDefault`, `stopPropagation`.</li>
                    <li>Tipos de eventos comunes: `click`, `mouseover`, `mouseout`, `keydown`, `keyup`, `submit`,
                        `load`, `DOMContentLoaded`.
                    </li>
                </ol>

                <h3>2.4. Formularios y Validación</h3>
                <ol>
                    <li>Acceso a elementos de formulario.</li>
                    <li>Eventos de formulario: `submit`, `change`, `input`, `focus`, `blur`.</li>
                    <li>Validación de formularios en el cliente.</li>
                    <li>Expresiones Regulares (RegEx) para validación de patrones (introducción).</li>
                </ol>
            </section>

            <section className="module-section">
                <h2>Módulo 3: Objetos, Arrays y Programación Asíncrona <span className="module-hours">(12 Horas)</span>
                </h2>
                <p><strong>Objetivo:</strong> Profundizar en la manipulación de estructuras de datos complejas y manejar
                    operaciones asíncronas para una mejor experiencia de usuario.</p>

                <h3>3.1. Objetos en JavaScript</h3>
                <ol>
                    <li>Creación de objetos: literales de objeto (`{}`), constructor `Object()`.</li>
                    <li>Acceso a propiedades: notación de punto (`.`), notación de corchetes (`[]`).</li>
                    <li>Añadir, modificar y eliminar propiedades.</li>
                    <li>Métodos de objeto.</li>
                    <li>`this` keyword (contexto).</li>
                    <li>Desestructuración de objetos.</li>
                    <li>JSON (JavaScript Object Notation): `JSON.parse()`, `JSON.stringify()`.</li>
                </ol>

                <h3>3.2. Arrays (Arreglos)</h3>
                <ol>
                    <li>Creación de arrays: literales de array (`[]`), constructor `Array()`.</li>
                    <li>Acceso y modificación de elementos por índice.</li>
                    <li>Métodos comunes de arrays: `push`, `pop`, `shift`, `unshift`, `splice`, `slice`, `concat`.</li>
                    <li>Iteración de arrays: `for`, `forEach`, `map`, `filter`, `reduce`, `find`, `some`, `every`.</li>
                    <li>Desestructuración de arrays.</li>
                    <li>Spread operator (`...`).</li>
                </ol>

                <h3>3.3. Programación Asíncrona: Callbacks y Promesas</h3>
                <ol>
                    <li>El problema de la asincronía en JavaScript (modelo de un solo hilo, Event Loop).</li>
                    <li>Callbacks: funciones de "retrollamada". Callback Hell.</li>
                    <li><strong>Promesas (`Promise`)</strong>:
                        <ol>
                            <li>Estados de una promesa (`pending`, `fulfilled`, `rejected`).</li>
                            <li>`new Promise()`, `resolve`, `reject`.</li>
                            <li>`then()`, `catch()`, `finally()`.</li>
                            <li>`Promise.all()`, `Promise.race()`.</li>
                        </ol>
                    </li>
                    <li>Manejo de errores en asincronía.</li>
                </ol>

                <h3>3.4. Programación Asíncrona: Async/Await</h3>
                <ol>
                    <li>Sintaxis y uso de `async` y `await`.</li>
                    <li>Simplificación del manejo de promesas con `async/await`.</li>
                    <li>Manejo de errores con `try...catch` en `async/await`.</li>
                    <li>Patrones comunes de asincronía.</li>
                </ol>
            </section>

            <section className="module-section">
                <h2>Módulo 4: ES6+ Características y Manipulación de APIs <span
                    className="module-hours">(8 Horas)</span></h2>
                <p><strong>Objetivo:</strong> Explorar las características modernas de JavaScript (ES6+) y aprender a
                    interactuar con APIs externas para consumir y enviar datos.</p>

                <h3>4.1. Características Modernas de JavaScript (ES6+)</h3>
                <ol>
                    <li>Destructuring (desestructuración de objetos y arrays).</li>
                    <li>Spread y Rest Operators.</li>
                    <li>Template Literals (plantillas de cadena) con `${}`.</li>
                    <li>Parámetros por defecto en funciones.</li>
                    <li>Clases (`class`): sintaxis básica para Programación Orientada a Objetos (introducción).</li>
                    <li>Módulos de JavaScript (`import`, `export`).</li>
                    <li>Map y Set (estructuras de datos).</li>
                </ol>

                <h3>4.2. Trabajando con APIs Web (Fetch API)</h3>
                <ol>
                    <li>¿Qué es una API? Conceptos de REST.</li>
                    <li>La `Fetch API` para hacer peticiones HTTP (`GET`, `POST`, `PUT`, `DELETE`).</li>
                    <li>Manejo de respuestas de la API (JSON).</li>
                    <li>Manejo de errores en las peticiones Fetch.</li>
                    <li>Ejemplos prácticos de consumo de APIs públicas (ej. API de chistes, datos meteorológicos).</li>
                </ol>

                <h3>4.3. Almacenamiento en el Navegador</h3>
                <ol>
                    <li>`localStorage`: Almacenamiento persistente clave-valor.</li>
                    <li>`sessionStorage`: Almacenamiento por sesión.</li>
                    <li>Diferencias y casos de uso.</li>
                    <li>Manejo de datos complejos (objetos) en `localStorage` (JSON.stringify/parse).</li>
                </ol>

                <h3>4.4. Conceptos de Programación Orientada a Objetos (POO) en JS</h3>
                <ol>
                    <li>Prototipos vs. Clases.</li>
                    <li>Herencia prototípica.</li>
                    <li>Clases ES6: Constructores, métodos, herencia con `extends` y `super`.</li>
                    <li>Encapsulamiento (propiedades privadas con `#` - ES2020).</li>
                </ol>
            </section>

            <section className="module-section">
                <h2>Módulo 5: Proyecto Práctico Integrador y Buenas Prácticas <span
                    className="module-hours">(8 Horas)</span></h2>
                <p><strong>Objetivo:</strong> Consolidar todos los conocimientos construyendo una aplicación web
                    interactiva y aplicando las mejores prácticas de desarrollo.</p>

                <h3>5.1. Planificación y Estructura del Proyecto</h3>
                <ol>
                    <li>Análisis de requisitos para un proyecto interactivo (ej. lista de tareas, juego simple, buscador
                        de películas).
                    </li>
                    <li>Diseño de la interfaz de usuario.</li>
                    <li>Organización de archivos y carpetas para proyectos JavaScript (`js/`, `css/`, `index.html`).
                    </li>
                    <li>Modularización del código JavaScript.</li>
                </ol>

                <h3>5.2. Desarrollo del Proyecto</h3>
                <ol>
                    <li>Implementación de la estructura HTML.</li>
                    <li>Estilización con CSS.</li>
                    <li>Desarrollo de la lógica JavaScript:
                        <ol>
                            <li>Manipulación del DOM para crear/actualizar/eliminar elementos.</li>
                            <li>Manejo de eventos para la interacción del usuario.</li>
                            <li>Consumo de alguna API externa (si aplica al proyecto).</li>
                            <li>Uso de almacenamiento local para persistencia (si aplica).</li>
                        </ol>
                    </li>
                </ol>

                <h3>5.3. Depuración y Manejo de Errores</h3>
                <ol>
                    <li>Uso avanzado de las DevTools del navegador para depuración.</li>
                    <li>Puntos de interrupción (breakpoints), paso a paso.</li>
                    <li>Inspección de variables.</li>
                    <li>Manejo de errores con `try...catch`.</li>
                    <li>Tipos de errores comunes en JavaScript.</li>
                </ol>

                <h3>5.4. Buenas Prácticas y Rendimiento</h3>
                <ol>
                    <li>Código limpio y legible (nomenclatura, indentación).</li>
                    <li>Evitar la contaminación del ámbito global.</li>
                    <li>Optimización del rendimiento del DOM.</li>
                    <li>Introducción a herramientas de linteo (ESLint) y formateo (Prettier) (visión general).</li>
                    <li>Control de versiones con Git y GitHub (repaso breve).</li>
                </ol>
            </section>

            <p style={{textAlign: 'center', fontSize: '1.3rem', fontWeight: 'bold', marginTop: '4rem'}}>
                Duración Total Estimada del Curso: 50 Horas
            </p>
        </div>
    );
}

export default CursoJavaScript;