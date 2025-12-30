# Solución: Solo se ve el README en GitHub Pages

## Problema
GitHub Pages está mostrando el README.md en lugar del sitio web.

## Solución

### Paso 1: Verificar configuración de GitHub Pages

1. Ve a tu repositorio en GitHub
2. Click en **Settings**
3. Ve a **Pages** en el menú lateral
4. **IMPORTANTE**: En "Source", debe estar seleccionado **"GitHub Actions"** (NO "Deploy from a branch")
5. Si está en "Deploy from a branch", cámbialo a "GitHub Actions"

### Paso 2: Verificar que el workflow esté funcionando

1. Ve a la pestaña **Actions** en GitHub
2. Verifica que el workflow "Deploy to GitHub Pages" se haya ejecutado
3. Si hay errores, revisa los logs

### Paso 3: Forzar un nuevo despliegue

Si el workflow no se ejecutó automáticamente:

```bash
# Hacer un cambio pequeño para activar el workflow
git add .
git commit -m "Fix: Force redeploy to GitHub Pages"
git push origin main
```

### Paso 4: Verificar la estructura del build

El build debe generar una carpeta `out` con:
- `index.html` en la raíz
- Carpeta `sierra-negra/` con los assets

Si no ves esto, ejecuta localmente:
```bash
npm run build
ls -la out/
```

### Paso 5: Verificar URLs

Asegúrate de acceder a la URL correcta:
- ✅ Correcto: `https://[tu-usuario].github.io/sierra-negra/`
- ❌ Incorrecto: `https://[tu-usuario].github.io/` (sin el nombre del repo)

## Configuración Correcta

### next.config.ts
```typescript
basePath: "/sierra-negra",
assetPrefix: "/sierra-negra/",
```

### Settings > Pages
- Source: **GitHub Actions** (NO "Deploy from a branch")

### .github/workflows/deploy.yml
- Debe estar en la rama `main`
- Debe subir la carpeta `./out`

## Verificación Rápida

1. ✅ ¿GitHub Pages está configurado para usar "GitHub Actions"?
2. ✅ ¿El workflow se ejecutó sin errores?
3. ✅ ¿Estás accediendo a la URL con `/sierra-negra/` al final?
4. ✅ ¿El build local genera la carpeta `out` correctamente?

## Si aún no funciona

1. Elimina el workflow anterior y vuelve a crearlo
2. Verifica que no haya un archivo `.nojekyll` en la raíz (no debería estar)
3. Espera 5-10 minutos después del despliegue para que GitHub actualice
4. Limpia la caché del navegador (Ctrl+Shift+R o Cmd+Shift+R)




