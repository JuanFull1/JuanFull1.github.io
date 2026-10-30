# Juan Toalombo — Portafolio profesional (actualizado)

Portafolio estático para **GitHub Pages**, responsive y con modo claro/oscuro. Conserva el diseño anterior e incorpora la experiencia en software comercial.

## Qué incluye esta versión

- **Sistemas comerciales:** SIGAP (agua potable), Almacenes Jair, Pedidos Multimarca (cosmética), Notificaciones SAC y CONFIEPP.
- **Proyectos técnicos públicos:** UtaFlow, EcuaRutas y MarketGO (con sus enlaces a GitHub).
- **Perfil profesional:** desarrollo, comercialización e implementación de software, liderazgo de equipos y mantenimiento.
- **Tecnologías:** todas las anteriores, además de Oracle; SQL Server se mantiene.
- **Servicios:** software a medida, integraciones, automatización, liderazgo técnico y soporte.

Los gráficos de los sistemas comerciales son *ilustraciones conceptuales*: no representan capturas reales ni exponen información de clientes. No se añaden enlaces a repositorios privados ni contactos inventados.

## ¿Dónde modifico el contenido?

Abre `index.html` con VS Code. Busca estas frases (Ctrl + F):

| Qué quieres editar | Dónde buscar en `index.html` |
| --- | --- |
| Nombre, cargo, presentación inicial | `hero-description` |
| Historia profesional y liderazgo | `id="sobre-mi"` |
| Tecnologías y bases de datos | `id="habilidades"` (la tarjeta «Datos») |
| SIGAP, Jair, Pedidos, SAC y CONFIEPP | `id="soluciones"` |
| UtaFlow, EcuaRutas y MarketGO | `id="proyectos"` |
| Servicios y mantenimiento | `id="servicios"` |
| Correo y mensaje final | `id="contacto"` |

Cada proyecto tiene un `<h3>` con su nombre, un `<p>` con la descripción y un bloque `project-stack` con etiquetas de funciones. Puedes editar el texto sin tocar los estilos.

Otros archivos:

- `styles.css`: colores, tipografía, tamaños, tarjetas y diseño.
- `script.js`: menú responsive, cambio de tema y animaciones.
- `assets/avatar.webp`: fotografía de portada.
- `assets/favicon.svg`: icono del navegador.

**Para reemplazar un nombre, módulo o descripción:** usa Ctrl + F en `index.html`, cambia el texto entre etiquetas y guarda. No necesitas modificar JavaScript.

## Publicar en GitHub Pages

1. Entra en [github.com/new](https://github.com/new) con la cuenta `JuanFull1`.
2. Crea un repositorio público denominado exactamente `JuanFull1.github.io`.
3. Descomprime el ZIP y sube **los archivos y carpetas de su interior** a la raíz del repositorio (no subas la carpeta como nivel extra). Debes ver `index.html` directamente en la raíz.
4. En el repositorio, entra en **Settings → Pages → Build and deployment**.
5. En `Source`, selecciona **Deploy from a branch**; rama **main** y carpeta **/(root)**. Guarda.
6. Una vez publicado, accede a [https://juanfull1.github.io](https://juanfull1.github.io).

Si ya publicaste la primera versión, reemplaza los archivos por los nuevos con un commit; no hace falta crear otro repositorio.

## Probar localmente

Abre `index.html` en tu navegador o desde esta carpeta ejecuta:

```bash
python -m http.server 8000
```

Visita `http://localhost:8000` y revisa escritorio y móvil.

## Personalizar antes de publicar

- Revisa si quieres mostrar exactamente los nombres de clientes, marcas y funcionalidades descritas.
- Agrega enlaces a demostraciones o sitios reales solo cuando sean públicos y tengas autorización.
- Confirma que los textos y las integraciones anunciadas correspondan a los sistemas entregados.
- Si deseas agregar LinkedIn, incorpora la URL real de tu perfil; no se inventó un enlace.

## Commits recomendados (Conventional Commits)

```text
feat(portfolio): incluir sistemas comerciales implementados
content(portfolio): ampliar perfil profesional y servicios
style(portfolio): adaptar tarjetas a nuevos proyectos
```

El repositorio `JuanFull1.github.io` es diferente del repositorio de README de perfil `JuanFull1/JuanFull1`.
