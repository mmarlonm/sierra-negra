# 🌲 Sierra Negra - Sitio Web

Un sitio web moderno para dar a conocer la Sierra Negra, con diseño neumórfico y paleta de colores verdes.

## 🚀 Características

- **Diseño Neumórfico**: Interfaz moderna con efectos de neumorfismo
- **Paleta Verde**: Colores inspirados en la naturaleza
- **Responsive**: Diseño adaptable a todos los dispositivos
- **Secciones Incluidas**:
  - Hero section con llamada a la acción
  - Lugares mágicos para explorar
  - Rutas de senderismo con diferentes niveles de dificultad
  - Galería de paisajes
  - Sugerencias y consejos para visitantes
  - Footer informativo

## 🛠️ Tecnologías

- **Next.js 15**: Framework de React
- **TypeScript**: Tipado estático
- **Tailwind CSS**: Estilos utilitarios
- **React**: Biblioteca de UI

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar en producción
npm start
```

## 🎨 Estilos Neumórficos

El proyecto utiliza clases CSS personalizadas para efectos neumórficos:

- `.neu-flat`: Sombra plana
- `.neu-pressed`: Efecto presionado
- `.neu-raised`: Efecto elevado
- `.neu-card`: Tarjeta con efecto neumórfico
- `.neu-button`: Botón con efecto neumórfico

## 📁 Estructura del Proyecto

```
sierra-negra/
├── app/
│   ├── layout.tsx      # Layout principal
│   ├── page.tsx        # Página principal
│   └── globals.css     # Estilos globales
├── components/
│   ├── Header.tsx      # Navegación
│   ├── Hero.tsx        # Sección hero
│   ├── Places.tsx      # Lugares para visitar
│   ├── Routes.tsx      # Rutas de senderismo
│   ├── Gallery.tsx     # Galería de imágenes
│   ├── Suggestions.tsx # Consejos y sugerencias
│   └── Footer.tsx      # Pie de página
└── public/
    └── images/         # Imágenes del sitio
```

## 🖼️ Agregar Imágenes

Para agregar imágenes reales:

1. Coloca las imágenes en `public/images/places/`
2. Actualiza las rutas en los componentes correspondientes
3. Los nombres sugeridos:
   - `mirador.jpg`
   - `cascada.jpg`
   - `bosque.jpg`
   - `lago.jpg`
   - `cueva.jpg`
   - `pico.jpg`

## 🎯 Próximos Pasos

- [ ] Agregar imágenes reales de la Sierra Negra
- [ ] Implementar sistema de reservas
- [ ] Agregar mapa interactivo
- [ ] Integrar formulario de contacto
- [ ] Agregar blog de experiencias

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.
