# ☕ ASFEPA Agro Sostenible — Sitio Web Oficial

Sitio web institucional de **ASFEPA** (Asociación de Familias Emprendedoras Productoras Agrosostentables), organización de productores de **café de especialidad** ubicados en Felipe Pinglo Alva, Luyando, **Huánuco – Perú**, a altitudes de 1,500 a 1,800 msnm.

🌐 **Demo en vivo:** [https://recursosprogramadores.github.io/asfepa-agro-sostenible](https://recursosprogramadores.github.io/asfepa-agro-sostenible)

---

## 📋 Descripción del Proyecto

Esta plataforma web presenta los productos, la historia y los valores de ASFEPA. Permite a potenciales compradores e interesados conocer:

- Los **cafés de especialidad** producidos (Pergamino, Oro Verde, Tostado y Tostado & Molido).
- La **historia y misión** de la asociación y sus familias productoras.
- Una **galería visual** del proceso de producción y los productos.
- Información de **contacto directo** para coordinar pedidos.

---

## 🗂️ Páginas

| Ruta | Descripción |
|---|---|
| `/` | Inicio — Hero, estadísticas, resumen de productos y testimonios |
| `/nosotros` | Historia, Misión & Visión, valores de la asociación |
| `/productos` | Catálogo completo con fichas técnicas y precios |
| `/contacto` | Formulario de contacto e información de comunicación |
| `/terminos` | Términos y condiciones |
| `/privacidad` | Política de privacidad |

---

## 🛒 Productos

| Producto | Precio | Presentación |
|---|---|---|
| Café Pergamino Seco | Según bolsa de valores | Sacos 50 kg |
| Café Oro Verde | Según bolsa de valores | Sacos 50 kg |
| Café Tostado 1 KG | S/. 55.00 | Bolsa trilaminada |
| Café Tostado y Molido 1 KG | S/. 60.00 | Bolsa trilaminada |

> Variedades: Geisha · Caturra · Catuaí · Catimor · Obata Rojo  
> Puntuación SCA: 80 – 85 puntos

---

## 🛠️ Stack Tecnológico

| Tecnología | Uso |
|---|---|
| **React 18** + **TypeScript** | Framework principal y tipado estático |
| **Vite** | Bundler y servidor de desarrollo |
| **Tailwind CSS** | Sistema de diseño utilitario |
| **shadcn/ui** + **Radix UI** | Componentes de interfaz accesibles |
| **React Router DOM v6** | Enrutamiento cliente |
| **Lenis** | Scroll suave y cinematográfico |
| **React Hook Form** + **Zod** | Formularios con validación robusta |
| **React Helmet Async** | Gestión de SEO y metaetiquetas |
| **gh-pages** | Despliegue en GitHub Pages |

---

## 🗃️ Estructura del Proyecto

```
asfepa-agro-sostenible/
├── public/                  # Archivos estáticos públicos
├── src/
│   ├── assets/              # Imágenes de productos y fondos
│   ├── components/          # Componentes reutilizables de la UI
│   │   ├── ui/              # Componentes base de shadcn/ui
│   │   ├── Hero.tsx         # Sección principal con estadísticas animadas
│   │   ├── Productos.tsx    # Catálogo con modal de detalle técnico
│   │   ├── Galeria.tsx      # Galería de imágenes
│   │   ├── Historia.tsx     # Historia de la asociación
│   │   ├── Contacto.tsx     # Formulario de contacto
│   │   ├── Header.tsx       # Navegación principal
│   │   ├── Footer.tsx       # Pie de página con enlaces
│   │   └── WhatsAppButton.tsx # Botón flotante de WhatsApp
│   ├── data/                # Datos desacoplados de la UI
│   │   ├── productos.ts     # Catálogo de productos con fichas técnicas
│   │   ├── testimonios.ts   # Testimonios de clientes
│   │   └── navigation.ts   # Links de navegación
│   ├── pages/               # Páginas de la aplicación
│   ├── hooks/               # Custom hooks
│   ├── lib/                 # Utilidades (cn, etc.)
│   ├── App.tsx              # Enrutador principal con scroll suave
│   └── main.tsx             # Punto de entrada
├── index.html
├── package.json
├── tailwind.config.ts
└── vite.config.ts
```

---

## 🚀 Instalación y Desarrollo Local

**Requisitos:** Node.js 18+ y npm (o bun)

```bash
# 1. Clonar el repositorio
git clone https://github.com/recursosprogramadores/asfepa-agro-sostenible.git
cd asfepa-agro-sostenible

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:5173`.

---

## 📦 Scripts Disponibles

```bash
npm run dev        # Servidor de desarrollo con hot-reload
npm run build      # Compilar para producción
npm run preview    # Previsualizar el build de producción
npm run lint       # Analizar código con ESLint
npm run deploy     # Publicar en GitHub Pages (build + gh-pages)
```

---

## 🌍 Despliegue en GitHub Pages

El proyecto se despliega automáticamente en [GitHub Pages](https://pages.github.com/) con:

```bash
npm run deploy
```

Este comando ejecuta `npm run build` y luego publica la carpeta `dist/` en la rama `gh-pages`.

---

## ✨ Características Destacadas

- **Scroll suave** con Lenis para una experiencia cinematográfica.
- **Animaciones de entrada** mediante IntersectionObserver (`.reveal`, `.reveal-stagger`).
- **Números animados** en las estadísticas del Hero al entrar en vista.
- **Preloader** animado al cargar la página.
- **Modal de producto** con carrusel de imágenes y ficha técnica completa.
- **Botón flotante de WhatsApp** para contacto directo.
- **Totalmente responsivo** — optimizado para móvil, tablet y escritorio.
- **SEO ready** con React Helmet Async.
- **Accesible** con componentes Radix UI y atributos ARIA.

---

## 📍 Origen

> **Felipe Pinglo Alva, Luyando, Huánuco — Perú**  
> Altitud: 1,500 – 1,800 msnm  
> Proceso: Cosecha selectiva, fermentación controlada (aeróbica y anaeróbica), secado solar

---

## 📄 Licencia

Proyecto privado de **ASFEPA**. Todos los derechos reservados © 2024.
