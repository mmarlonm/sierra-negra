# 🔧 Solución: Solo se ve el README en GitHub Pages

## ⚠️ Problema
GitHub Pages está mostrando el README.md en lugar de tu sitio web.

## ✅ Solución Paso a Paso

### 1. Verificar Configuración de GitHub Pages (MUY IMPORTANTE)

1. Ve a tu repositorio en GitHub: `https://github.com/[tu-usuario]/sierra-negra`
2. Click en **Settings** (Configuración)
3. En el menú lateral izquierdo, click en **Pages**
4. **CRÍTICO**: En la sección "Source" (Origen), debe estar seleccionado:
   - ✅ **"GitHub Actions"** ← CORRECTO
   - ❌ **"Deploy from a branch"** ← INCORRECTO (esto causa el problema)

5. Si está en "Deploy from a branch", cámbialo a **"GitHub Actions"** y guarda

### 2. Verificar que el Workflow se Ejecute

1. Ve a la pestaña **Actions** en tu repositorio
2. Deberías ver un workflow llamado "Deploy to GitHub Pages"
3. Si no se ha ejecutado, haz un push para activarlo:

```bash
git add .
git commit -m "Fix: Configure GitHub Pages"
git push origin main
```

### 3. Esperar el Despliegue

- El workflow puede tardar 2-5 minutos
- Una vez completado, espera otros 2-3 minutos para que GitHub actualice
- Refresca la página de GitHub Pages en Settings

### 4. Verificar la URL Correcta

Asegúrate de acceder a la URL completa:
- ✅ **Correcto**: `https://[tu-usuario].github.io/sierra-negra/`
- ❌ **Incorrecto**: `https://[tu-usuario].github.io/` (sin el nombre del repo)

### 5. Limpiar Caché del Navegador

Si aún ves el README:
- Presiona `Ctrl + Shift + R` (Windows/Linux) o `Cmd + Shift + R` (Mac)
- O abre en modo incógnito

## 🔍 Verificación Rápida

Marca cada punto:

- [ ] GitHub Pages está configurado para usar **"GitHub Actions"** (NO "Deploy from a branch")
- [ ] El workflow "Deploy to GitHub Pages" se ejecutó sin errores
- [ ] Estás accediendo a la URL: `https://[usuario].github.io/sierra-negra/`
- [ ] Limpiaste la caché del navegador
- [ ] Esperaste al menos 5 minutos después del despliegue

## 🚨 Si Aún No Funciona

### Opción A: Forzar Nuevo Despliegue

1. Ve a **Actions** > **Deploy to GitHub Pages**
2. Click en **"Run workflow"** (si está disponible)
3. O haz un commit vacío:

```bash
git commit --allow-empty -m "Force redeploy"
git push origin main
```

### Opción B: Verificar Archivos

Verifica que el build local funcione:

```bash
npm run build
ls -la out/
```

Deberías ver:
- `index.html` en la raíz de `out/`
- Carpeta `_next/` con los assets
- Carpeta `images/` con las imágenes

### Opción C: Verificar Logs del Workflow

1. Ve a **Actions** en GitHub
2. Click en el último workflow ejecutado
3. Revisa los logs del job "build" y "deploy"
4. Busca errores en rojo

## 📝 Configuración Correcta

Tu `next.config.ts` debe tener:

```typescript
basePath: "/sierra-negra",
assetPrefix: "/sierra-negra/",
```

Tu `.github/workflows/deploy.yml` debe subir:
```yaml
path: './out'
```

## 💡 Nota Importante

Si cambias de "Deploy from a branch" a "GitHub Actions", GitHub puede tardar unos minutos en actualizar. Sé paciente y verifica después de 5-10 minutos.

## 🆘 ¿Necesitas Más Ayuda?

Si después de seguir estos pasos aún no funciona:
1. Comparte una captura de pantalla de Settings > Pages
2. Comparte los logs del workflow de Actions
3. Verifica que el nombre del repositorio sea exactamente `sierra-negra`

