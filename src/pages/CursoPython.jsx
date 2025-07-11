// src/pages/CursoPython.jsx
import React from "react";
import '../assets/css/global.css';

function CursoPython() {
    return (
        <div className="course-program-container">
            <h1>Programa de Estudios Detallado: Curso Completo de Python</h1>
            <p>Este programa exhaustivo te proporcionará las habilidades esenciales en Python, un lenguaje de
                programación versátil utilizado en desarrollo web, ciencia de datos, inteligencia artificial,
                automatización y más.</p>

            <section className="module-section">
                <h2>Módulo 1: Fundamentos de Python y Sintaxis Básica <span className="module-hours">(10 Horas)</span>
                </h2>
                <p><strong>Objetivo:</strong> Comprender la sintaxis básica de Python, cómo configurar el entorno de
                    desarrollo y realizar operaciones fundamentales.</p>

                <h3>1.1. Introducción a Python</h3>
                <ol>
                    <li>¿Qué es Python? Historia y filosofía (Zen de Python).</li>
                    <li>Áreas de aplicación de Python.</li>
                    <li>Configuración del entorno: Instalación de Python, IDEs (VS Code, PyCharm), entornos virtuales
                        (`venv`).
                    </li>
                    <li>Ejecución de scripts Python.</li>
                    <li>Comentarios en Python.</li>
                </ol>

                <h3>1.2. Variables y Tipos de Datos</h3>
                <ol>
                    <li>Declaración de variables.</li>
                    <li>Tipos de datos incorporados: `int`, `float`, `str`, `bool`.</li>
                    <li>Operadores: aritméticos, de asignación, de comparación, lógicos, de identidad, de pertenencia.
                    </li>
                    <li>Entrada y salida de datos: `input()`, `print()`.</li>
                    <li>Formateo de cadenas (f-strings, `.format()`).</li>
                </ol>

                <h3>1.3. Estructuras de Control de Flujo</h3>
                <ol>
                    <li>Condicionales: `if`, `elif`, `else`.</li>
                    <li>Bucles: `for` (con `range()`), `while`.</li>
                    <li>`break`, `continue`, `pass`.</li>
                    <li>Comprensión de listas (introducción).</li>
                </ol>

                <h3>1.4. Funciones</h3>
                <ol>
                    <li>Definición de funciones: `def`.</li>
                    <li>Parámetros y argumentos (posicionales, por palabra clave, por defecto).</li>
                    <li>Argumentos arbitrarios (`*args`, `**kwargs`).</li>
                    <li>Valor de retorno (`return`).</li>
                    <li>Funciones lambda (funciones anónimas).</li>
                    <li>Ámbito de las variables (LEGB Rule).</li>
                </ol>
            </section>

            <section className="module-section">
                <h2>Módulo 2: Estructuras de Datos Integradas y Manipulación <span
                    className="module-hours">(12 Horas)</span></h2>
                <p><strong>Objetivo:</strong> Dominar el uso de las estructuras de datos fundamentales de Python para
                    organizar y manipular información de manera eficiente.</p>

                <h3>2.1. Listas (Lists)</h3>
                <ol>
                    <li>Creación de listas: `[]`.</li>
                    <li>Acceso y modificación de elementos por índice.</li>
                    <li>Métodos de listas: `append()`, `extend()`, `insert()`, `remove()`, `pop()`, `sort()`,
                        `reverse()`, `count()`, `index()`.
                    </li>
                    <li>Slicing de listas.</li>
                    <li>Iteración de listas.</li>
                </ol>

                <h3>2.2. Tuplas (Tuples)</h3>
                <ol>
                    <li>Creación de tuplas: `()`.</li>
                    <li>Inmutabilidad de las tuplas.</li>
                    <li>Acceso a elementos y slicing.</li>
                    <li>Desempaquetado de tuplas.</li>
                    <li>Casos de uso para tuplas.</li>
                </ol>

                <h3>2.3. Diccionarios (Dictionaries)</h3>
                <ol>
                    <li>Creación de diccionarios: `{}` (pares clave-valor).</li>
                    <li>Acceso, adición y modificación de elementos por clave.</li>
                    <li>Métodos de diccionarios: `keys()`, `values()`, `items()`, `get()`, `pop()`, `update()`.</li>
                    <li>Iteración de diccionarios.</li>
                </ol>

                <h3>2.4. Conjuntos (Sets)</h3>
                <ol>
                    <li>Creación de conjuntos: `set()`, `{}`.</li>
                    <li>Características: elementos únicos, no ordenados.</li>
                    <li>Operaciones de conjuntos: unión, intersección, diferencia, diferencia simétrica.</li>
                    <li>Métodos de conjuntos: `add()`, `remove()`, `discard()`.</li>
                    <li>Inmutabilidad de los elementos.</li>
                </ol>
            </section>

            <section className="module-section">
                <h2>Módulo 3: Programación Orientada a Objetos (POO) en Python <span
                    className="module-hours">(10 Horas)</span></h2>
                <p><strong>Objetivo:</strong> Comprender los principios de la POO y aplicarlos para crear código más
                    modular, reutilizable y mantenible en Python.</p>

                <h3>3.1. Conceptos Fundamentales de POO</h3>
                <ol>
                    <li>¿Qué es la POO?</li>
                    <li>Clases y Objetos.</li>
                    <li>Atributos y Métodos.</li>
                    <li>El constructor `__init__`.</li>
                    <li>La palabra clave `self`.</li>
                </ol>

                <h3>3.2. Pilares de la POO</h3>
                <ol>
                    <li><strong>Encapsulamiento</strong>: Atributos públicos, protegidos (`_`) y privados (`__`).
                        Getters y Setters (propiedades).
                    </li>
                    <li><strong>Herencia</strong>: Clases base y clases derivadas. `super()`. Herencia múltiple
                        (introducción).
                    </li>
                    <li><strong>Polimorfismo</strong>: Sobreescritura de métodos.</li>
                    <li><strong>Abstracción</strong>: Métodos abstractos y clases abstractas (con `abc` module -
                        introducción).
                    </li>
                </ol>

                <h3>3.3. Métodos Especiales (Dunder Methods)</h3>
                <ol>
                    <li>`__str__` y `__repr__` para representación de objetos.</li>
                    <li>Métodos de comparación: `__eq__`, `__lt__`, etc.</li>
                    <li>Métodos de operación: `__add__`, `__len__`, etc.</li>
                </ol>

                <h3>3.4. Manejo de Excepciones</h3>
                <ol>
                    <li>¿Qué son las excepciones? Errores vs. Excepciones.</li>
                    <li>Bloques `try`, `except`, `else`, `finally`.</li>
                    <li>Tipos de excepciones comunes.</li>
                    <li>Lanzar excepciones personalizadas: `raise`.</li>
                </ol>
            </section>

            <section className="module-section">
                <h2>Módulo 4: Manipulación de Archivos y Módulos/Paquetes <span
                    className="module-hours">(8 Horas)</span></h2>
                <p><strong>Objetivo:</strong> Aprender a interactuar con el sistema de archivos, leer y escribir datos,
                    y organizar el código en módulos reutilizables.</p>

                <h3>4.1. Manipulación de Archivos</h3>
                <ol>
                    <li>Modos de apertura de archivos: lectura (`'r'`), escritura (`'w'`), añadir (`'a'`), binario
                        (`'b'`).
                    </li>
                    <li>Lectura de archivos: `read()`, `readline()`, `readlines()`.</li>
                    <li>Escritura en archivos: `write()`, `writelines()`.</li>
                    <li>Cierre de archivos.</li>
                    <li>El bloque `with open(...) as file:` (manejo automático del cierre).</li>
                    <li>Manejo de archivos CSV, JSON (introducción).</li>
                </ol>

                <h3>4.2. Módulos y Paquetes</h3>
                <ol>
                    <li>¿Qué son los módulos? Reutilización de código.</li>
                    <li>Importar módulos: `import`, `from ... import`.</li>
                    <li>Módulos incorporados de Python (ej. `math`, `random`, `datetime`, `os`, `sys`).</li>
                    <li>¿Qué son los paquetes? Organización de módulos.</li>
                    <li>Creación de paquetes simples.</li>
                </ol>

                <h3>4.3. Gestión de Dependencias (PIP)</h3>
                <ol>
                    <li>¿Qué es `pip`? Gestor de paquetes de Python.</li>
                    <li>Instalar paquetes: `pip install`.</li>
                    <li>Desinstalar paquetes: `pip uninstall`.</li>
                    <li>Listar paquetes: `pip list`.</li>
                    <li>Archivos `requirements.txt`.</li>
                </ol>

                <h3>4.4. Introducción a la Biblioteca Estándar</h3>
                <ol>
                    <li>Exploración de módulos útiles: `os` (interacción con el sistema operativo), `sys` (parámetros y
                        funciones del sistema), `datetime` (fechas y horas), `json` (trabajo con JSON), `csv` (trabajo
                        con CSV).
                    </li>
                    <li>Conceptos básicos de expresiones regulares (`re` module - introducción).</li>
                </ol>
            </section>

            <section className="module-section">
                <h2>Módulo 5: Proyecto Práctico Integrador y Buenas Prácticas <span
                    className="module-hours">(10 Horas)</span></h2>
                <p><strong>Objetivo:</strong> Consolidar todos los conocimientos adquiridos construyendo una aplicación
                    de consola o script funcional y aplicando las mejores prácticas de desarrollo en Python.</p>

                <h3>5.1. Planificación y Diseño del Proyecto</h3>
                <ol>
                    <li>Análisis de requisitos para un script o pequeña aplicación (ej. gestor de contactos, simulador
                        de dados, analizador de texto).
                    </li>
                    <li>Diseño modular del código (funciones, clases, módulos).</li>
                    <li>Diagrama de flujo o pseudocódigo (opcional).</li>
                </ol>

                <h3>5.2. Desarrollo del Proyecto</h3>
                <ol>
                    <li>Implementación de la lógica principal utilizando variables, estructuras de control y
                        funciones.
                    </li>
                    <li>Uso de estructuras de datos (listas, diccionarios) para almacenar y manipular información.</li>
                    <li>Aplicación de principios de POO (clases y objetos) donde sea apropiado.</li>
                    <li>Interacción con archivos (lectura/escritura) o uso de módulos de la biblioteca estándar.</li>
                    <li>Manejo de excepciones para robustez.</li>
                </ol>

                <h3>5.3. Depuración y Pruebas Básicas</h3>
                <ol>
                    <li>Uso del depurador en el IDE.</li>
                    <li>Errores comunes en Python y cómo resolverlos.</li>
                    <li>Estrategias de depuración (`print()` statements).</li>
                    <li>Conceptos de pruebas unitarias (introducción a `unittest` o `pytest` - visión general).</li>
                </ol>

                <h3>5.4. Buenas Prácticas y Control de Versiones</h3>
                <ol>
                    <li>Estilo de código PEP 8.</li>
                    <li>Documentación de código (docstrings).</li>
                    <li>Organización de proyectos Python.</li>
                    <li>Control de versiones con Git y GitHub (repaso breve).</li>
                </ol>
            </section>

            <p style={{textAlign: 'center', fontSize: '1.3rem', fontWeight: 'bold', marginTop: '4rem'}}>
                Duración Total Estimada del Curso: 50 Horas
            </p>
        </div>
    );
}

export default CursoPython;