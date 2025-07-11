// src/pages/CursoBasesDatos.jsx
import React from "react";

function CursoBasesDatos() {
    return (
        <div className="curso-program-container">
            <h1>Programa de Estudios Detallado: Curso Completo de Bases de Datos</h1>
            <p>Este programa exhaustivo te brindará los conocimientos fundamentales y avanzados para diseñar,
                implementar y gestionar bases de datos relacionales, una habilidad esencial en el desarrollo de software
                moderno.</p>
            <section className="module-section">
                <h2>Módulo 1: Introducción a las Bases de Datos y Conceptos Fundamentales <span
                    className="module-hours">(8 Horas)</span></h2>
                <p><strong>Objetivo:</strong> Comprender qué son las bases de datos, su importancia, los diferentes
                    tipos y los conceptos básicos del modelo relacional.</p>

                <div className="contenedor-horizontal">
                    <div className="bloque-h3-lista">
                        <h3>1.1. ¿Qué es una Base de Datos?</h3>
                        <ol>
                            <li>Definición y propósito de las bases de datos.</li>
                            <li>Ventajas de usar bases de datos vs. archivos planos.</li>
                            <li>Conceptos clave: Dato, Información, Base de Datos, Sistema de Gestión de Bases de Datos
                                (SGBD).
                            </li>
                            <li>Tipos de bases de datos: relacionales, NoSQL (introducción), orientadas a objetos,
                                grafos.
                            </li>
                        </ol>
                    </div>

                    <div className="bloque-h3-lista">
                        <h3>1.2. El Modelo Relacional</h3>
                        <ol>
                            <li>Historia y evolución de las bases de datos relacionales.</li>
                            <li>Conceptos fundamentales: <strong>Tabla (entidad)</strong>, <strong>Fila
                                (registro)</strong>, <strong>Columna (atributo)</strong>.
                            </li>
                            <li><strong>Claves</strong>: Clave Primaria (PK), Clave Foránea (FK), Clave Candidata, Clave
                                Alterna.
                            </li>
                            <li>Relaciones entre tablas: Uno a Uno, Uno a Muchos, Muchos a Muchos.</li>
                            <li>Integridad de datos: Entidad, Referencial, de Dominio.</li>
                        </ol>
                    </div>
                    <div className="bloque-h3-lista">
                        <h3>1.3. Arquitectura de un SGBD</h3>
                        <ol>
                            <li>Componentes principales de un SGBD: Motor de almacenamiento, Procesador de consultas,
                                Gestor
                                de
                                transacciones.
                            </li>
                            <li>Roles en el ámbito de las bases de datos: Administrador de Base de Datos (DBA),
                                Desarrollador,
                                Analista de datos.
                            </li>
                            <li>Conceptos de cliente-servidor en bases de datos.</li>
                            <li>Introducción a SGBD populares: MySQL, PostgreSQL, SQL Server, Oracle (visión general).
                            </li>
                        </ol>
                    </div>
                    <div className="bloque-h3-lista">
                        <h3>1.4. Introducción a la Normalización</h3>
                        <ol>
                            <li>¿Por qué normalizar? Problemas de redundancia e inconsistencia.</li>
                            <li>Concepto de dependencias funcionales.</li>
                            <li>Formas Normales (FN): 1FN, 2FN, 3FN (visión general y ejemplos sencillos).</li>
                        </ol>
                    </div>
                </div>
            </section>

            <section className="module-section">
                <h2>Módulo 2: SQL Básico y Manipulación de Datos <span className="module-hours">(12 Horas)</span></h2>
                <p><strong>Objetivo:</strong> Adquirir fluidez en el lenguaje SQL para consultar, insertar,
                    actualizar y eliminar datos en bases de datos relacionales.</p>

                <div className="contenedor-horizontal-alt">
                    <div className="bloque-h3-lista-alt">
                        <h3>2.1. Fundamentos de SQL</h3>
                        <ol>
                            <li>¿Qué es SQL? Lenguaje Estructurado de Consultas.</li>
                            <li>Componentes de SQL: DDL (Data Definition Language), DML (Data Manipulation Language),
                                DCL (Data
                                Control Language), TCL (Transaction Control Language).
                            </li>
                            <li>Tipos de datos SQL: `INT`, `VARCHAR`, `DATE`, `BOOLEAN`, `DECIMAL`, etc.</li>
                            <li>Creación y gestión de bases de datos: `CREATE DATABASE`, `USE`, `DROP DATABASE`.</li>
                        </ol>
                    </div>

                    <div className="bloque-h3-lista-alt">
                        <h3>2.2. DDL: Definición de Datos</h3>
                        <ol>
                            <li>Creación de tablas: `CREATE TABLE`. Definición de columnas, tipos de datos,
                                restricciones (`NOT
                                NULL`, `UNIQUE`, `DEFAULT`).
                            </li>
                            <li>Definición de claves primarias y foráneas.</li>
                            <li>Modificación de tablas: `ALTER TABLE` (añadir/modificar/eliminar columnas,
                                añadir/eliminar
                                restricciones).
                            </li>
                            <li>Eliminación de tablas: `DROP TABLE`.</li>
                        </ol>
                    </div>

                    <div className="bloque-h3-lista-alt">
                        <h3>2.3. DML: Manipulación de Datos</h3>
                        <ol>
                            <li>Inserción de datos: `INSERT INTO`. Inserción simple, inserción múltiple,
                                inserción desde otra
                                consulta.
                            </li>
                            <li>Actualización de datos: `UPDATE` con cláusula `WHERE`.</li>
                            <li>Eliminación de datos: `DELETE FROM` con cláusula `WHERE`.</li>
                            <li>Concepto de autoincremento (ej. `AUTO_INCREMENT` en MySQL, `SERIAL` en
                                PostgreSQL).
                            </li>
                        </ol>
                    </div>

                    <div className="bloque-h3-lista-alt">
                        <h3>2.4. DML: Consultas Básicas con SELECT</h3>
                        <ol>
                            <li>La sentencia `SELECT`: seleccionar todas las columnas (`*`), seleccionar
                                columnas específicas.
                            </li>
                            <li>Cláusula `FROM`.</li>
                            <li>Filtrado de datos con `WHERE`: operadores de comparación</li>
                            <li>Operadores especiales: LIKE (búsqueda de patrones con IN, BETWEEN, IS NULL,
                                IS NOT NULL.
                            </li>
                            <li>Ordenamiento de resultados: 'ORDER BY' ('ASC', 'DESC').</li>
                            <li>Limitar resultados: 'LIMIT' (MySQL/PostgreSQL) / 'TOP' (SQL Server).</li>
                        </ol>
                    </div>
                </div>
            </section>


            <section className="module-section">
                <h2>Módulo 3: SQL Avanzado y Modelado de Datos <span className="module-hours">(12 Horas)</span>
                </h2>
                <p><strong>Objetivo:</strong> Dominar consultas SQL complejas, entender las uniones de tablas,
                    trabajar
                    con funciones y subconsultas, y aplicar principios de modelado de bases de datos.</p>

                <div className="contenedor-horizontal-base3">
                    <div className="bloque-h3-lista-base3">
                        <h3>3.1. Uniones (JOINs) y Relaciones</h3>
                        <ol>
                            <li>Concepto de Uniones.</li>
                            <li>`INNER JOIN`: Combinar filas de dos o más tablas donde hay valores coincidentes.</li>
                            <li>`LEFT JOIN` / `LEFT OUTER JOIN`: Incluir todas las filas de la tabla izquierda.</li>
                            <li>`RIGHT JOIN` / `RIGHT OUTER JOIN`: Incluir todas las filas de la tabla derecha.</li>
                            <li>`FULL JOIN` / `FULL OUTER JOIN`: Incluir todas las filas de ambas tablas (si el SGBD lo
                                soporta).
                            </li>
                            <li>`CROSS JOIN` y `SELF JOIN`.</li>
                            <li>Alias de tablas y columnas para mayor legibilidad.</li>
                        </ol>
                    </div>

                    <div className="bloque-h3-lista-base3">
                        <h3>3.2. Agregación y Agrupación de Datos</h3>
                        <ol>
                            <li>Funciones de agregación: `COUNT()`, `SUM()`, `AVG()`, `MIN()`, `MAX()`.</li>
                            <li>Agrupación de resultados: `GROUP BY`.</li>
                            <li>Filtrado de grupos: `HAVING`. Diferencia entre `WHERE` y `HAVING`.</li>
                        </ol>
                    </div>

                    <div className="bloque-h3-lista-base3">
                        <h3>3.3. Subconsultas y CTEs (Common Table Expressions)</h3>
                        <ol>
                            <li>Subconsultas en `SELECT`, `FROM`, y `WHERE`.</li>
                            <li>Subconsultas correlacionadas vs. no correlacionadas.</li>
                            <li>Introducción a CTEs (`WITH` clause) para consultas más legibles y complejas (si el SGBD
                                lo
                                soporta).
                            </li>
                        </ol>
                    </div>

                    <div className="bloque-h3-lista-base3">
                        <h3>3.4. Modelado de Bases de Datos</h3>
                        <ol>
                            <li>Proceso de diseño de bases de datos: Requisitos, Diseño Conceptual, Diseño Lógico,
                                Diseño
                                Físico.
                            </li>
                            <li>Diagramas Entidad-Relación (DER): Entidades, Atributos, Relaciones (Cardinalidad y
                                Opcionalidad).
                            </li>
                            <li>Transformación de un DER a un modelo relacional.</li>
                            <li>Ejercicio práctico de diseño de un DER para un escenario dado.</li>
                        </ol>
                    </div>
                </div>
            </section>

            <section className="module-section">
                <h2>Módulo 4: Transacciones, Índices y Optimizaciones <span
                    className="module-hours">(8 Horas)</span>
                </h2>
                <p><strong>Objetivo:</strong> Comprender cómo garantizar la consistencia de los datos, mejorar
                    el
                    rendimiento de las consultas y gestionar la concurrencia.</p>

                <div className="contenedor-horizontal-base4">
                    <div className="bloque-h3-lista-base4">
                        <h3>4.1. Transacciones</h3>
                        <ol>
                            <li>Concepto de Transacción: Propiedades ACID (Atomicidad, Consistencia, Aislamiento,
                                Durabilidad).
                            </li>
                            <li>`BEGIN TRANSACTION` / `START TRANSACTION`.</li>
                            <li>`COMMIT`: Guardar cambios de forma permanente.</li>
                            <li>`ROLLBACK`: Deshacer cambios.</li>
                            <li>Puntos de guardado (`SAVEPOINT`).</li>
                            <li>Niveles de aislamiento de transacciones (visión general).</li>
                        </ol>
                    </div>
                    <div className="bloque-h3-lista-base4">
                        <h3>4.2. Índices</h3>
                        <ol>
                            <li>¿Qué son los índices y por qué son importantes?</li>
                            <li>Tipos de índices: Clustered vs. Non-Clustered (conceptos).</li>
                            <li>Creación y eliminación de índices: `CREATE INDEX`, `DROP INDEX`.</li>
                            <li>Consideraciones al usar índices: cuándo usarlos, impacto en el rendimiento de
                                inserciones/actualizaciones.
                            </li>
                        </ol>
                    </div>
                    <div className="bloque-h3-lista-base4">
                        <h3>4.3. Vistas y Procedimientos Almacenados</h3>
                        <ol>
                            <li><strong>Vistas (`VIEW`)</strong>: Creación, propósito (simplificar consultas,
                                seguridad),
                                modificación, eliminación.
                            </li>
                            <li><strong>Procedimientos Almacenados (`STORED PROCEDURE`)</strong>: Concepto, ventajas
                                (rendimiento, seguridad, encapsulamiento), creación (parámetros de entrada/salida).
                            </li>
                        </ol>
                    </div>
                </div>

            </section>

            <section className="module-section">
                <h2>Módulo 5: Proyecto Práctico Integrador y Despliegue <span className="module-hours">(10 Horas)</span>
                </h2>
                <p><strong>Objetivo:</strong> Consolidar todos los conocimientos construyendo y desplegando una
                    base de
                    datos funcional para un caso de uso real.</p>

                <h3>5.1. Diseño Detallado del Proyecto</h3>
                <ol>
                    <li>Definición de requisitos funcionales y no funcionales para un sistema.</li>
                    <li>Diseño Conceptual (DER completo).</li>
                    <li>Diseño Lógico (Tablas, columnas, tipos de datos, relaciones, restricciones).</li>
                    <li>Diseño Físico (elección de SGBD, consideraciones de índices).</li>
                </ol>

                <h3>5.2. Implementación de la Base de Datos</h3>
                <ol>
                    <li>Creación de la base de datos y todas las tablas utilizando DDL.</li>
                    <li>Poblar la base de datos con datos de ejemplo utilizando DML.</li>
                    <li>Desarrollo de consultas complejas (`SELECT` con JOINs, GROUP BY, subconsultas) para
                        satisfacer
                        los requisitos del proyecto.
                    </li>
                    <li>Creación de vistas para simplificar consultas o asegurar datos.</li>
                    <li>Implementación de algunos procedimientos almacenados básicos (opcional).</li>
                </ol>

                <h3>5.3. Control de Versiones con Git y GitHub</h3>
                <ol>
                    <li>¿Qué es el control de versiones? ¿Por qué Git?</li>
                    <li>Conceptos básicos de Git: repositorio, commit, branch, merge.</li>
                    <li>Comandos básicos de Git: `git init`, `git add`, `git commit`, `git status`, `git log`.
                    </li>
                    <li>Plataformas de hospedaje de código: GitHub/GitLab/Bitbucket.</li>
                    <li>Trabajar con repositorios remotos: `git clone`, `git push`, `git pull`.</li>
                </ol>

                <h3>5.4. Despliegue y Consideraciones</h3>
                <ol>
                    <li>Exportar e importar datos (backups).</li>
                    <li>Conceptos básicos de seguridad de bases de datos (usuarios, roles, permisos).</li>
                    <li>Opciones de hospedaje de bases de datos (locales, cloud como AWS RDS, Azure SQL
                        Database, Heroku
                        Postgres).
                    </li>
                </ol>
            </section>

            <p style={{textAlign: 'center', fontSize: '1.3rem', fontWeight: 'bold', marginTop: '4rem'}}>
                Duración Total Estimada del Curso: 50 Horas
            </p>
        </div>

    );
}

export default CursoBasesDatos;
