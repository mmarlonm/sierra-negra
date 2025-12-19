# 🌲 Sierra Negra - Sitio Web

Un sitio web moderno para dar a conocer la Sierra Negra, con diseño moderno y paleta de colores naturales.

## 🚀 Características

- **Diseño Moderno**: Interfaz limpia y contemporánea
- **Paleta Natural**: Colores inspirados en la naturaleza
- **Responsive**: Diseño adaptable a todos los dispositivos
- **Slider Hero**: Carrusel interactivo con imágenes
- **Galería de Imágenes**: Visualización de paisajes
- **Rutas de Senderismo**: Información sobre rutas disponibles
- **Sugerencias**: Consejos para visitantes

## 🛠️ Tecnologías

- **Next.js 16**: Framework de React
- **TypeScript**: Tipado estático
- **Tailwind CSS**: Estilos utilitarios
- **React Icons**: Iconos

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Desplegar a GitHub Pages
npm run deploy
```

## 🌐 Despliegue en GitHub Pages

El proyecto está configurado para desplegarse automáticamente en GitHub Pages usando GitHub Actions.

### Configuración Manual

1. Ve a la configuración del repositorio en GitHub
2. Navega a **Pages** en el menú lateral
3. En **Source**, selecciona **GitHub Actions**

### Despliegue Manual

```bash
npm run build
npm run deploy
```

## 📁 Estructura del Proyecto

```
sierra-negra/
├── app/
│   ├── layout.tsx      # Layout principal
│   ├── page.tsx        # Página principal
│   └── globals.css     # Estilos globales
├── components/
│   ├── Header.tsx      # Navegación
│   ├── Hero.tsx        # Slider hero
│   ├── Places.tsx      # Lugares para visitar
│   ├── Routes.tsx      # Rutas de senderismo
│   ├── Gallery.tsx     # Galería de imágenes
│   ├── VideoSection.tsx # Sección de video
│   ├── Suggestions.tsx # Consejos y sugerencias
│   ├── Footer.tsx      # Pie de página
│   ├── hero.css        # Estilos del hero
│   └── gallery.css      # Estilos de la galería
├── public/
│   └── images/         # Imágenes del sitio
└── styles/
    └── components/     # Estilos de componentes
```

## 🖼️ Agregar Imágenes

Las imágenes se encuentran en:
- Hero: `public/images/hero/`
- Galería: `public/images/gallery/`
- Lugares: `public/images/places/`

## 🎯 Próximos Pasos

- [ ] Agregar más imágenes de la Sierra Negra
- [ ] Implementar sistema de reservas
- [ ] Agregar mapa interactivo
- [ ] Integrar formulario de contacto
- [ ] Agregar blog de experiencias

## 💳 Integración de pagos (Stripe)

Para habilitar pagos reales con Stripe debes:

1. Instalar la librería oficial de Stripe en el proyecto:

```bash
npm install stripe
```

2. Crear un archivo `.env.local` en la raíz del proyecto con las claves:

```
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_CURRENCY=mxn
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

3. En este repositorio añadí una ruta API (`/app/api/create-checkout-session`) que crea una sesión de Stripe Checkout. El flujo en el frontend redirige al checkout de Stripe.

Notas:
- El proyecto estaba configurado como export estático; lo ajusté para permitir rutas de servidor (API) en `next.config.ts`.
- Para pruebas locales asegúrate de ejecutar `npm run dev` y tener las variables de entorno configuradas.


## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 🔗 Enlaces

- [GitHub Pages](https://mmarlonm.github.io/sierra-negra/)
- [Repositorio](https://github.com/mmarlonm/sierra-negra)
