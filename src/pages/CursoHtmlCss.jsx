import React from "react";
import '../assets/css/global.css';


function CursoHtmlCss() {
    return (
        <div className="course-program-container">
            <h1>Programa de Estudios Detallado: Curso Completo de HTML y CSS</h1>
            <p>Este programa exhaustivo y práctico está meticulosamente diseñado para equiparte con las habilidades
                fundamentales y avanzadas que necesitas para construir sitios web modernos, responsivos y visualmente
                atractivos desde cero. Va más allá de lo básico, sumergiéndote en las técnicas y herramientas esenciales
                que te convertirán en un desarrollador front-end competente y creativo.</p>
            <section className="module-section">
                <h2>Módulo 1: Introducción a HTML5 y la Estructura de la Web<span
                    className="module-hours">(8 horas)</span></h2>
                <p><strong>Objetivo</strong> Comprender la arquitectura fundamental de la web y dominar las etiquetas
                    esenciales de HTML5 para estructurar el contenido de manera semántica y accesible.</p>

                <h3>1.1. Fundamentos de la Web y HTML</h3>
                <ol>
                    <li>¿Cómo funciona Internet? (Cliente-Servidor, DNS, HTTP/HTTPS)</li>
                    <li>¿Qué es HTML? Historia y evolución (HTML5).</li>
                    <li>Sintaxis básica de HTML: etiquetas, atributos, elementos, anidamiento.</li>
                    <li>Herramientas de desarrollo: editores de código (VS Code), navegadores y sus DevTools.</li>
                    <li>Estructura básica de un documento HTML: `&lt;!DOCTYPE html&gt;`, `&lt;html&gt;`, `&lt;head&gt;`,
                        `&lt;body&gt;`.
                    </li>
                    <li>Comentarios en HTML.</li>
                </ol>

                <h3>1.2. Contenido de Texto y Enlaces</h3>
                <ol>
                    <li>Encabezados: `&lt;h1&gt;` a `&lt;h6&gt;` y su importancia semántica.</li>
                    <li>Párrafos (`&lt;p&gt;`), saltos de línea (`&lt;br&gt;`), reglas horizontales (`&lt;hr&gt;`).</li>
                    <li>Listas: Ordenadas (`&lt;ol&gt;`), desordenadas (`&lt;ul&gt;`), elementos de lista
                        (`&lt;li&gt;`).
                    </li>
                    <li>Listas de definición (`&lt;dl&gt;`, `&lt;dt&gt;`, `&lt;dd&gt;`).</li>
                    <li>Formato de texto: `&lt;strong&gt;`, `&lt;em&gt;`, `&lt;u&gt;`, `&lt;span&gt;`, `&lt;div&gt;`.
                    </li>
                    <li>Enlaces (`&lt;a&gt;`): creación de hipervínculos (rutas relativas y absolutas).</li>
                    <li>Atributos de enlaces: `target`, `title`, `download`.</li>
                    <li>Anclas internas en la página.</li>
                </ol>

                <h3>1.3. Imágenes, Multimedia y Tablas</h3>
                <ol>
                    <li>Imágenes (`&lt;img&gt;`): formatos (JPG, PNG, GIF, SVG, WebP), atributos `src`, `alt`, `width`,
                        `height`.
                    </li>
                    <li>Concepto de imágenes responsivas (`srcset`, `sizes`).</li>
                    <li>Video (`&lt;video&gt;`) y Audio (`&lt;audio&gt;`): atributos `src`, `controls`, `autoplay`,
                        `loop`, `muted`, `poster`, `&lt;source&gt;`.
                    </li>
                    <li>Iframes (`&lt;iframe&gt;`) para incrustar contenido.</li>
                    <li>Tablas (`&lt;table&gt;`): `&lt;thead&gt;`, `&lt;tbody&gt;`, `&lt;tfoot&gt;`, `&lt;tr&gt;`
                        (filas), `&lt;th&gt;` (encabezados), `&lt;td&gt;` (datos).
                    </li>
                    <li>Atributos `colspan` y `rowspan`.</li>
                </ol>

                <h3>1.4. Formularios y Semántica HTML5</h3>
                <ol>
                    <li>Creación de formularios (`&lt;form&gt;`): atributos `action`, `method`.</li>
                    <li>Elementos de entrada (`&lt;input&gt;`): `text`, `password`, `email`, `number`, `date`,
                        `checkbox`, `radio`, `submit`, `reset`, `file`.
                    </li>
                    <li>Atributos comunes: `name`, `id`, `value`, `placeholder`, `required`, `readonly`, `disabled`.
                    </li>
                    <li>`&lt;textarea&gt;` para áreas de texto multi-línea.</li>
                    <li>`&lt;select&gt;` y `&lt;option&gt;` para listas desplegables.</li>
                    <li>`&lt;label&gt;` para accesibilidad.</li>
                    <li>Elementos semánticos de HTML5: `&lt;header&gt;`, `&lt;nav&gt;`, `&lt;main&gt;`,
                        `&lt;section&gt;`, `&lt;article&gt;`, `&lt;aside&gt;`, `&lt;footer&gt;`, `&lt;figure&gt;`,
                        `&lt;figcaption&gt;`, `&lt;time&gt;`.
                    </li>
                    <li>Accesibilidad básica: atributos `lang`, `aria-label`.</li>
                </ol>
            </section>

            <section className="module-section">
                <h2>Módulo 2: Estilizando con CSS3 - Presentación y Estética <span
                    className="module-hours">(10 Horas)</span></h2>
                <p><strong>Objetivo:</strong> Adquirir las habilidades para aplicar estilos complejos a los elementos
                    HTML, controlar el diseño visual y crear interfaces atractivas.</p>

                <h3>2.1. Fundamentos de CSS y Selectores</h3>
                <ol>
                    <li>¿Qué es CSS? Propósito y ventajas.</li>
                    <li>Sintaxis de CSS: reglas, propiedades, valores, comentarios.</li>
                    <li>Formas de incluir CSS: inline, interno (`&lt;style&gt;`), externo (`&lt;link&gt;`). <strong>Énfasis
                        en CSS externo.</strong></li>
                    <li>Selectores básicos: tipo, clase (`.`), ID (`#`), universal (`*`).</li>
                    <li>Prioridad y especificidad de selectores.</li>
                    <li>Herencia de propiedades CSS.</li>
                    <li>Unidades de medida en CSS: `px`, `em`, `rem`, `%`, `vw`, `vh`, `ch`.</li>
                </ol>

                <h3>2.2. Modelo de Caja y Display</h3>
                <ol>
                    <li>El <strong>Modelo de Caja (Box Model)</strong>: `content`, `padding`, `border`, `margin`.</li>
                    <li>`box-sizing`: `content-box` vs `border-box`.</li>
                    <li>Propiedades `width` y `height`. `min-width`, `max-width`, `min-height`, `max-height`.</li>
                    <li>Propiedad `overflow`.</li>
                    <li>Propiedad `display`: `block`, `inline`, `inline-block`, `none`.</li>
                    <li>Propiedad `visibility`.</li>
                </ol>

                <h3>2.3. Colores, Fondos y Tipografía</h3>
                <ol>
                    <li>Colores: nombres de color, Hexadecimal (`#RRGGBB`), RGB (`rgb(R,G,B)`), RGBA (`rgba(R,G,B,A)`),
                        HSL (`hsl(H,S,L)`), HSLA.
                    </li>
                    <li>Propiedades de fondo: `background-color`, `background-image`, `background-repeat`,
                        `background-position`, `background-size`, `background-attachment`.
                    </li>
                    <li>Shorthand `background`.</li>
                    <li>Fuentes: `font-family` (fuentes seguras, `font-stack`).</li>
                    <li>Importación de fuentes externas (`@import url()`, `@font-face` con Google Fonts).</li>
                    <li>`font-size`, `font-weight`, `font-style`, `text-decoration`, `text-transform`.</li>
                    <li>`line-height`, `letter-spacing`, `word-spacing`.</li>
                    <li>`text-align`, `vertical-align`.</li>
                    <li>Propiedad `white-space`.</li>
                </ol>

                <h3>2.4. Posicionamiento y Floats</h3>
                <ol>
                    <li>`position`: `static`, `relative`, `absolute`, `fixed`, `sticky`.</li>
                    <li>Propiedades `top`, `bottom`, `left`, `right`.</li>
                    <li>`z-index` para el orden de apilamiento.</li>
                    <li>Introducción a `float` y `clear` (contexto histórico, pero útil para entender diseños
                        antiguos).
                    </li>
                </ol>

                <h3>2.5. Pseudoclases, Pseudoelementos y Atributos</h3>
                <ol>
                    <li>Pseudoclases comunes: `:hover`, `:active`, `:focus`, `:link`, `:visited`, `:nth-child()`,
                        `:first-child`, `:last-child`, `:not()`.
                    </li>
                    <li>Pseudoelementos: `::before`, `::after`, `::first-line`, `::first-letter`, `::selection`.</li>
                    <li>Selectores de atributo: `[attr]`, `[attr="value"]`, `[attr*="value"]`, etc.</li>
                    <li>Conceptos de <strong>variables CSS (`--custom-property`)</strong> y `var()`.</li>
                </ol>
            </section>

            <section className="module-section">
                <h2>Módulo 3: Diseño Responsivo y Layouts Modernos <span className="module-hours">(12 Horas)</span></h2>
                <p><strong>Objetivo:</strong> Construir interfaces web que se adapten de forma óptima a cualquier tamaño
                    de pantalla, utilizando las técnicas más modernas de CSS.</p>

                <h3>3.1. Conceptos de Diseño Responsivo</h3>
                <ol>
                    <li>¿Qué es el diseño responsivo? ¿Por qué es crucial?</li>
                    <li>Principios de "Mobile First" vs. "Desktop First".</li>
                    <li>La meta etiqueta `viewport`.</li>
                    <li>Introducción a los <strong>Breakpoints</strong>.</li>
                </ol>

                <h3>3.2. Media Queries</h3>
                <ol>
                    <li>Sintaxis básica de `@media` rule.</li>
                    <li>Tipos de media: `screen`, `print`, `all`.</li>
                    <li>Características de media: `min-width`, `max-width`, `orientation`, `min-resolution`.</li>
                    <li>Combinación de media queries (`and`, `,`).</li>
                    <li>Estrategias de breakpoints comunes.</li>
                </ol>

                <h3>3.3. Flexbox (Flexible Box Layout)</h3>
                <ol>
                    <li>Introducción a Flexbox: el modelo unidimensional.</li>
                    <li>Propiedad `display: flex` para el contenedor.</li>
                    <li>Propiedades del <strong>Contenedor Flex</strong>:
                        <ol>
                            <li>`flex-direction`: `row`, `column`, `row-reverse`, `column-reverse`.</li>
                            <li>`justify-content`: Alinear ítems a lo largo del eje principal.</li>
                            <li>`align-items`: Alinear ítems a lo largo del eje transversal.</li>
                            <li>`flex-wrap`: `nowrap`, `wrap`, `wrap-reverse`.</li>
                            <li>`align-content`: Alinear líneas flex cuando hay múltiples líneas.</li>
                            <li>`gap` (o `row-gap`, `column-gap`).</li>
                        </ol>
                    </li>
                    <li>Propiedades de los <strong>Ítems Flex</strong>:
                        <ol>
                            <li>`flex-grow`, `flex-shrink`, `flex-basis`.</li>
                            <li>Shorthand `flex`.</li>
                            <li>`order` para cambiar el orden visual.</li>
                            <li>`align-self` para alinear un ítem individualmente.</li>
                        </ol>
                    </li>
                    <li>Casos de uso prácticos: barras de navegación, centrado de contenido, tarjetas, formularios.</li>
                </ol>

                <h3>3.4. CSS Grid Layout</h3>
                <ol>
                    <li>Introducción a CSS Grid: el modelo bidimensional.</li>
                    <li>Propiedad `display: grid` para el contenedor.</li>
                    <li>Propiedades del <strong>Contenedor Grid</strong>:
                        <ol>
                            <li>`grid-template-columns`, `grid-template-rows` (con `px`, `%`, `fr`, `auto`, `repeat()`,
                                `minmax()`).
                            </li>
                            <li>`grid-auto-columns`, `grid-auto-rows`, `grid-auto-flow`.</li>
                            <li>`gap` (o `row-gap`, `column-gap`).</li>
                            <li>`justify-items`, `align-items`, `place-items`.</li>
                            <li>`justify-content`, `align-content`, `place-content`.</li>
                        </ol>
                    </li>
                    <li>Propiedades de los <strong>Ítems Grid</strong>:
                        <ol>
                            <li>`grid-column`, `grid-row` (con `start`, `end`, `span`).</li>
                            <li>Shorthand `grid-area`.</li>
                            <li>Definición de áreas con `grid-template-areas`.</li>
                            <li>`justify-self`, `align-self`, `place-self`.</li>
                        </ol>
                    </li>
                    <li>Casos de uso prácticos: estructuras de página completas, galerías de imágenes, dashbords.</li>
                    <li>Comparación y cuándo usar Flexbox vs. Grid.</li>
                </ol>
            </section>

            <section className="module-section">
                <h2>Módulo 4: Efectos Visuales, Animaciones e Interacción Básica <span className="module-hours">(8 Horas)</span>
                </h2>
                <p><strong>Objetivo:</strong> Añadir dinamismo y sofisticación a las interfaces web con transiciones,
                    transformaciones y animaciones CSS, y comprender la interacción básica.</p>

                <h3>4.1. Transiciones y Transformaciones</h3>
                <ol>
                    <li><strong>Transiciones CSS</strong>:
                        <ol>
                            <li>`transition-property`, `transition-duration`, `transition-timing-function`,
                                `transition-delay`.
                            </li>
                            <li>Shorthand `transition`.</li>
                            <li>Aplicación en `:hover` y otros estados.</li>
                        </ol>
                    </li>
                    <li><strong>Transformaciones CSS (2D y 3D)</strong>:
                        <ol>
                            <li>`translate()`: mover elementos.</li>
                            <li>`rotate()`: rotar elementos.</li>
                            <li>`scale()`: escalar elementos.</li>
                            <li>`skew()`: inclinar elementos.</li>
                            <li>`perspective()`, `rotateX()`, `rotateY()`, `rotateZ()` para 3D.</li>
                            <li>`transform-origin`.</li>
                        </ol>
                    </li>
                    <li>`box-shadow` y `text-shadow` avanzados.</li>
                    <li>`border-radius` avanzado (formas complejas).</li>
                </ol>

                <h3>4.2. Animaciones CSS con Keyframes</h3>
                <ol>
                    <li>Introducción a `@keyframes`: definir secuencias de animación.</li>
                    <li>Propiedades de `animation`:
                        <ol>
                            <li>`animation-name`, `animation-duration`, `animation-timing-function`.</li>
                            <li>`animation-delay`, `animation-iteration-count`, `animation-direction`.</li>
                            <li>`animation-fill-mode` (`forwards`, `backwards`, `both`).</li>
                            <li>`animation-play-state`.</li>
                            <li>Shorthand `animation`.</li>
                        </ol>
                    </li>
                    <li>Creación de animaciones comunes: carga, aparición, bucles infinitos.</li>
                    <li>Uso de `will-change` para optimización de rendimiento.</li>
                </ol>

                <h3>4.3. Filtros y Modos de Mezcla CSS</h3>
                <ol>
                    <li>`filter` propiedad: `blur()`, `brightness()`, `contrast()`, `grayscale()`, `hue-rotate()`,
                        `invert()`, `opacity()`, `saturate()`, `sepia()`, `drop-shadow()`.
                    </li>
                    <li>Aplicación de filtros en imágenes y elementos.</li>
                    <li>`backdrop-filter` para efectos de fondo.</li>
                    <li>`mix-blend-mode` para superposición de elementos.</li>
                    <li>Conceptos básicos de SVG y su integración con CSS.</li>
                </ol>
            </section>

            <section className="module-section">
                <h2>Módulo 5: Proyecto Práctico Integrador y Despliegue Profesional <span className="module-hours">(12 Horas)</span>
                </h2>
                <p><strong>Objetivo:</strong> Consolidar todos los conocimientos adquiridos construyendo un proyecto web
                    real y aprendiendo las bases para su publicación en línea y mantenimiento.</p>

                <h3>5.1. Planificación y Estructura del Proyecto</h3>
                <ol>
                    <li>Análisis de requisitos del proyecto (ej. portfolio, landing page, sitio web de negocio pequeño,
                        blog).
                    </li>
                    <li>Diseño y Wireframing (conceptualización de la interfaz).</li>
                    <li>Organización de archivos y carpetas (`index.html`, `css/style.css`, `images/`, `js/`).</li>
                    <li>Metodologías CSS (introducción a BEM, ITCSS, SMACSS para proyectos grandes).</li>
                    <li>Preprocesadores CSS (introducción a SASS/LESS, ventajas).</li>
                </ol>

                <h3>5.2. Desarrollo del Proyecto</h3>
                <ol>
                    <li><strong>Fase HTML:</strong> Construcción de la estructura HTML semántica del proyecto completo.
                    </li>
                    <li><strong>Fase CSS Principal:</strong> Aplicación de estilos generales, tipografía, paleta de
                        colores, componentes reutilizables (botones, tarjetas, navbar).
                    </li>
                    <li><strong>Fase de Layout:</strong> Implementación de los layouts principales con Flexbox y CSS
                        Grid.
                    </li>
                    <li><strong>Fase Responsiva:</strong> Asegurar que el diseño se adapte a diferentes dispositivos
                        utilizando Media Queries.
                    </li>
                    <li><strong>Fase de Interacción/Efectos:</strong> Añadir transiciones y animaciones donde sea
                        apropiado para mejorar la UX.
                    </li>
                    <li>Optimización de imágenes y fuentes para el rendimiento.</li>
                </ol>

                <h3>5.3. Control de Versiones con Git y GitHub</h3>
                <ol>
                    <li>¿Qué es el control de versiones? ¿Por qué Git?</li>
                    <li>Conceptos básicos de Git: repositorio, commit, branch, merge.</li>
                    <li>Comandos básicos de Git: `git init`, `git add`, `git commit`, `git status`, `git log`.</li>
                    <li>Plataformas de hospedaje de código: GitHub/GitLab/Bitbucket.</li>
                    <li>Trabajar con repositorios remotos: `git clone`, `git push`, `git pull`.</li>
                </ol>

                <h3>5.4. Despliegue y Publicación del Proyecto</h3>
                <ol>
                    <li>Introducción al despliegue de sitios web estáticos.</li>
                    <li>Opciones de hospedaje gratuito: GitHub Pages, Netlify, Vercel.</li>
                    <li>Proceso de despliegue paso a paso en una de las plataformas.</li>
                    <li>Conceptos básicos de dominios y hosting.</li>
                </ol>
            </section>

            <p style={{textAlign: 'center', fontSize: '1.3rem', fontWeight: 'bold', marginTop: '4rem'}}>
                Duración Total Estimada del Curso: 50 Horas
            </p>

        </div>
    );
}

export default CursoHtmlCss;