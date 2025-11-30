# Configuración para GitHub Pages

## ✅ Checklist de Configuración

### 1. Configuración del Repositorio

- [ ] El repositorio debe estar en GitHub
- [ ] El nombre del repositorio debe ser `sierra-negra`
- [ ] La rama principal debe ser `main` o `master`

### 2. Habilitar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Click en **Settings**
3. En el menú lateral, click en **Pages**
4. En **Source**, selecciona **GitHub Actions**
5. Guarda los cambios

### 3. Configuración de GitHub Actions

El archivo `.github/workflows/deploy.yml` ya está configurado. Solo necesitas:

1. Hacer commit y push del archivo:
   ```bash
   git add .github/workflows/deploy.yml
   git commit -m "Add GitHub Actions workflow"
   git push origin main
   ```

2. Verificar que el workflow se ejecute:
   - Ve a la pestaña **Actions** en GitHub
   - Deberías ver el workflow ejecutándose

### 4. Verificar el Despliegue

Una vez que el workflow se complete:

1. Ve a **Settings > Pages**
2. Verifica que aparezca la URL de tu sitio
3. Tu sitio estará disponible en: `https://[tu-usuario].github.io/sierra-negra/`

## 🔧 Configuración de Variables

Si necesitas cambiar el nombre del repositorio o la ruta:

1. **En `package.json`:**
   ```json
   {
     "homepage": "https://[tu-usuario].github.io/[nombre-repo]/"
   }
   ```

2. **En `next.config.ts`:**
   ```typescript
   basePath: "/[nombre-repo]",
   assetPrefix: "/[nombre-repo]/",
   ```

3. **En todos los componentes:**
   - Cambia las rutas de imágenes de `/images/` a `/[nombre-repo]/images/`

## 🐛 Solución de Problemas

### El workflow no se ejecuta

- Verifica que el archivo `.github/workflows/deploy.yml` esté en la rama correcta
- Asegúrate de que GitHub Actions esté habilitado en tu repositorio

### El build falla

- Revisa los logs en la pestaña **Actions**
- Verifica que todas las dependencias estén instaladas
- Asegúrate de que no haya errores de TypeScript

### Las imágenes no se cargan

- Verifica que las rutas incluyan el `basePath`
- Asegúrate de que las imágenes estén en `public/images/`
- Revisa la consola del navegador para errores 404

## 📝 Comandos Útiles

```bash
# Construir localmente
npm run build

# Ver el build localmente
npx serve out

# Desplegar manualmente
npm run deploy

# Verificar configuración
cat next.config.ts
cat package.json
```

## 🔗 Enlaces Útiles

- [Documentación de GitHub Pages](https://docs.github.com/en/pages)
- [Documentación de Next.js Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Actions](https://docs.github.com/en/actions)

