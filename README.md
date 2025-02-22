# 🚀 TaskFlow

TaskFlow es una aplicación web moderna desarrollada con Next.js 14, diseñada para gestionar tareas y flujos de trabajo de manera eficiente y elegante.

## ✨ Características Principales

- 🔐 Autenticación de usuarios con NextAuth
- 🌐 Internacionalización (i18n) con soporte para múltiples idiomas
- 🎨 Interfaz moderna y responsive con Tailwind CSS
- 🔄 Gestión de estado eficiente con React Query
- 📝 Validación de formularios con React Hook Form y Zod
- 🎯 TypeScript para un desarrollo más seguro y mantenible
- 🚨 ESLint y Husky para mantener la calidad del código

## 🛠️ Tecnologías

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Query](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-EC5990?style=for-the-badge&logo=react-hook-form&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white)
![NextAuth.js](https://img.shields.io/badge/NextAuth.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![Flowbite](https://img.shields.io/badge/Flowbite-1A1A1A?style=for-the-badge&logo=flowbite&logoColor=white)
![JSON Server](https://img.shields.io/badge/JSON_Server-1A1A1A?style=for-the-badge&logo=json&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![i18next](https://img.shields.io/badge/i18next-26A69A?style=for-the-badge&logo=i18next&logoColor=white)
![Lottie](https://img.shields.io/badge/Lottie-00C7B7?style=for-the-badge&logo=lottie&logoColor=white)

## 📁 Estructura del Proyecto

```
src/
├── app/                # Rutas y páginas de la aplicación
├── assets/            # Recursos estáticos
├── components/        # Componentes reutilizables
├── constants/         # Constantes y configuraciones
├── contexts/          # Contextos de React
├── hooks/             # Custom hooks
├── layouts/           # Componentes de layout
├── locales/           # Archivos de internacionalización
├── providers/         # Providers de la aplicación
├── services/          # Servicios y APIs
├── types/             # Definiciones de tipos TypeScript
└── utils/             # Utilidades y funciones helper
```

## 🚀 Comenzando

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn

### Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/xXAreizaXx/taskflow.git
cd taskflow
```

2. Instala las dependencias:
```bash
npm install
# o
yarn install
```

3. Crea un archivo `.env` en la raíz del proyecto con las variables necesarias:
```env
NEXT_PUBLIC_API_URL=http://localhost:8080
NEXTAUTH_SECRET=SPXN6FekDx3gHaJJyrgP53NMZbrh/77+9vBtIeQfA2g=
```

4. Inicia el servidor de desarrollo:
```bash
# Terminal 1: Servidor de desarrollo Next.js
npm run dev
# o
yarn dev

# Terminal 2: JSON Server (API mock)
npm run server
# o
yarn server
```

La aplicación estará disponible en `http://localhost:3000`

## 📦 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter
- `npm run server` - Inicia el servidor JSON para desarrollo

## 🧪 Convenciones de Código

- Utilizamos ESLint para mantener un código consistente
- Husky se encarga de ejecutar los hooks de git
- Los commits deben pasar el build antes de ser aceptados
- TypeScript strict mode está habilitado

## 🌐 Internacionalización

El proyecto soporta múltiples idiomas utilizando i18next. Los archivos de traducción se encuentran en `src/locales/`.

## 🤝 Manejo de Git&GitHub

1. Pull rama main
2. Crea tu rama de características (`git checkout -b <NEW_BRANCH_NAME>`)
3. Commit tus cambios (`git commit -m <MESSAGE>`)
4. Push a la rama (`git push origin <NEW_BRANCH_NAME>`)
5. Abre un Pull Request

---
⌨️ con ❤️ por por [Jorge Areiza](https://github.com/xXAreizaXx) 