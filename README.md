# Proyecto CI + GitHub Pages

Este proyecto demuestra cómo implementar un flujo básico de **Integración Continua (CI)** con GitHub Actions y cómo desplegar un sitio estático automáticamente usando **GitHub Pages**.

## 📂 Estructura del Proyecto
```
.
├── .github/
│   └── workflows/
│       └── ci.yml        # Flujo CI
├── index.html            # Página principal
├── style.css             # Estilos de la web
├── script.js             # JS básico
└── README.md             # Este archivo
```

## 🚀 Funcionalidades
- CI automático en cada push a `main`.
- Despliegue a GitHub Pages.
- Página estática con HTML, CSS y JS.
- Badge de estado CI en tiempo real.

## ⚙️ Cómo probarlo
1. Clona el repositorio:
   ```bash
   git clone https://github.com/Efestuss/Experimental4.git
   cd Experimental4
   ```
2. Abre `index.html` con tu navegador, o visita el sitio desplegado:  
   **https://efestuss.github.io/Experimental4/**

## 🛠 Tecnologías Usadas
| Herramienta          | Propósito               |
|----------------------|-------------------------|
| HTML5                | Maquetación             |
| CSS3                 | Estilos responsivos     |
| JavaScript (Vanilla) | Interactividad mínima   |
| GitHub Actions       | Integración continua    |
| GitHub Pages         | Hosting estático        |

## ✅ Estado del CI
![CI Status](https://github.com/Efestuss/Experimental4/actions/workflows/ci.yml/badge.svg)

## 📄 Licencia
MIT License – puedes usar, modificar y distribuir libremente.
