# GitHub Pages Deployment Guide

## Pasos para desplegar en GitHub Pages:

### 1. Configurar GitHub Pages en tu repositorio

1. Ve a tu repositorio en GitHub: https://github.com/nikovaz/Nicovaz.tech
2. Click en **Settings** (Configuración)
3. En el menú lateral, click en **Pages**
4. En **Source**, selecciona **GitHub Actions**

### 2. Hacer push de los cambios

Ejecuta estos comandos en tu terminal:

```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```

### 3. Esperar el despliegue

- Ve a la pestaña **Actions** en tu repositorio
- Verás el workflow "Deploy to GitHub Pages" ejecutándose
- Espera a que termine (toma unos 2-3 minutos)
- Una vez completado, tu sitio estará disponible en: https://nikovaz.github.io/Nicovaz.tech/

## Notas importantes:

- Cada vez que hagas `git push` a la rama `main`, se desplegará automáticamente
- El sitio puede tardar unos minutos en actualizarse después del despliegue
- Si ves errores 404, espera unos minutos y refresca la página

## Para desarrollo local:

```bash
npm run dev
```

Esto abrirá el sitio en http://localhost:3000 (sin el basePath)
