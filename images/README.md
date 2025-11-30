# Imágenes de la Sierra Negra

## Estructura de Carpetas

Coloca las imágenes en las siguientes carpetas:

### Lugares (`places/`)
- `mirador.jpg` - Mirador del Cielo
- `cascada.jpg` - Cascada Esmeralda
- `bosque.jpg` - Bosque Encantado
- `lago.jpg` - Lago de los Cisnes
- `cueva.jpg` - Cueva de Cristales
- `pico.jpg` - Pico del Águila

## Recomendaciones

- **Formato**: JPG o WebP
- **Tamaño**: Máximo 2MB por imagen
- **Dimensiones**: 1200x800px (ratio 3:2) para lugares
- **Optimización**: Usa herramientas como ImageOptim o TinyPNG

## Uso en el Código

Las imágenes se referencian desde la carpeta `public`, por ejemplo:

```tsx
<Image 
  src="/images/places/mirador.jpg" 
  alt="Mirador del Cielo"
  width={1200}
  height={800}
/>
```

