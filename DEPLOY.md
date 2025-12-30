# Guía de Despliegue - GitHub Pages

## Configuración Automática (Recomendado)

El proyecto está configurado para desplegarse automáticamente usando GitHub Actions.

### Pasos:

1. **Habilita GitHub Pages en tu repositorio:**
   - Ve a Settings > Pages
   - En "Source", selecciona "GitHub Actions"

2. **Haz push a la rama main:**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

3. **Espera a que se complete el workflow:**
   - Ve a la pestaña "Actions" en GitHub
   - El workflow se ejecutará automáticamente
   - Una vez completado, tu sitio estará disponible en: `https://[tu-usuario].github.io/sierra-negra/`

## Despliegue Manual

Si prefieres desplegar manualmente:

```bash
# 1. Construir el proyecto
npm run build

# 2. Desplegar a GitHub Pages
npm run deploy
```

## Configuración del Repositorio

Asegúrate de que tu `package.json` tenga:

```json
{
  "homepage": "https://[tu-usuario].github.io/sierra-negra/"
}
```

Y que `next.config.ts` tenga:

```typescript
basePath: "/sierra-negra",
assetPrefix: "/sierra-negra/",
```

## Solución de Problemas

### Las imágenes no se cargan

Asegúrate de que las rutas de las imágenes incluyan el `basePath`:
- ✅ Correcto: `/sierra-negra/images/gallery/image.jpg`
- ❌ Incorrecto: `/images/gallery/image.jpg`

### El sitio muestra una página en blanco

1. Verifica que el build se haya completado correctamente
2. Revisa la consola del navegador para errores
3. Asegúrate de que `output: "export"` esté en `next.config.ts`

### Los estilos no se aplican

1. Verifica que los archivos CSS estén importados correctamente
2. Asegúrate de que Tailwind CSS esté configurado
3. Revisa que `globals.css` esté importado en `layout.tsx`

## URLs Importantes

- **Repositorio**: `https://github.com/[tu-usuario]/sierra-negra`
- **GitHub Pages**: `https://[tu-usuario].github.io/sierra-negra/`
- **Actions**: `https://github.com/[tu-usuario]/sierra-negra/actions`




