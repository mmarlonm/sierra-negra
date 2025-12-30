# 🚀 Instrucciones Rápidas - Solucionar "Solo se ve el README"

## ⚡ Solución Rápida (2 minutos)

### Paso 1: Verificar Configuración de GitHub Pages

1. Ve a: `https://github.com/[tu-usuario]/sierra-negra/settings/pages`
2. En la sección **"Source"**, debe decir: **"GitHub Actions"**
3. Si dice **"Deploy from a branch"**, cámbialo a **"GitHub Actions"**
4. Guarda los cambios

### Paso 2: Forzar Nuevo Despliegue

```bash
git add .
git commit -m "Fix GitHub Pages deployment"
git push origin main
```

### Paso 3: Esperar y Verificar

1. Ve a la pestaña **Actions** en GitHub
2. Espera a que el workflow "Deploy to GitHub Pages" se complete (2-5 minutos)
3. Espera otros 2-3 minutos para que GitHub actualice
4. Visita: `https://[tu-usuario].github.io/sierra-negra/`

## ✅ Checklist

- [ ] GitHub Pages configurado para usar **"GitHub Actions"** (NO "Deploy from a branch")
- [ ] Workflow ejecutado sin errores en la pestaña **Actions**
- [ ] Accediendo a la URL correcta: `https://[usuario].github.io/sierra-negra/`
- [ ] Limpiada la caché del navegador (Ctrl+Shift+R)

## 🔍 Si Aún No Funciona

1. **Verifica los logs del workflow:**
   - Ve a Actions > Deploy to GitHub Pages
   - Revisa si hay errores en rojo

2. **Verifica la URL:**
   - Debe terminar en `/sierra-negra/`
   - NO debe ser solo `github.io/`

3. **Espera más tiempo:**
   - GitHub puede tardar hasta 10 minutos en actualizar

## 📞 Problema Persistente

Si después de 10 minutos aún ves el README:
1. Comparte una captura de Settings > Pages
2. Comparte los logs del workflow de Actions
3. Verifica que el nombre del repositorio sea exactamente `sierra-negra`




