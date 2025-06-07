# Payload CRUD Demo

Una demostración completa de aplicación CRUD construida con Next.js 15 y Payload CMS. Esta aplicación muestra las mejores prácticas para la gestión de usuarios con una interfaz moderna y funcionalidades completas.

## 🚀 Características

- ✅ **CRUD completo de usuarios** (Crear, Leer, Actualizar, Eliminar)
- ✅ **Autenticación** con Payload CMS
- ✅ **Interfaz moderna** con shadcn/ui y Tailwind CSS
- ✅ **Formularios validados** con React Hook Form y Zod
- ✅ **Server Actions** de Next.js 15
- ✅ **TypeScript** para type safety
- ✅ **Responsive design** para todos los dispositivos
- ✅ **Dialogs modales** para mejor UX

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 15 (App Router)
- **CMS**: Payload CMS
- **Database**: PostgreSQL (Neon Tech)
- **Styling**: Tailwind CSS + shadcn/ui
- **Forms**: React Hook Form + Zod
- **TypeScript**: Para desarrollo type-safe
- **Package Manager**: pnpm

## 📋 Prerrequisitos

- Node.js 18+ 
- pnpm
- Base de datos PostgreSQL (recomendado: Neon Tech)

## 🔧 Instalación

1. **Clona el repositorio**
   ```bash
   git clone <repository-url>
   cd next-payload
   ```

2. **Instala las dependencias**
   ```bash
   pnpm install
   ```

3. **Configura las variables de entorno**
   
   ⚠️ **IMPORTANTE**: Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

   ```env
   # Configuración de Payload CMS
   PAYLOAD_SECRET=tu-secret-key-muy-segura-aqui
   
   # Base de datos PostgreSQL (Neon Tech)
   DATABASE_URL=postgresql://usuario:password@host.neon.tech/nombre_db?sslmode=require
   ```

   **Notas importantes sobre las variables de entorno:**
   - `PAYLOAD_SECRET`: Debe ser una cadena secreta y única para tu aplicación (mínimo 32 caracteres)
   - `DATABASE_URL`: URL de conexión a tu base de datos PostgreSQL en Neon Tech
   
   **Para obtener tu DATABASE_URL de Neon Tech:**
   1. Ve a tu dashboard de [Neon Tech](https://neon.tech)
   2. Selecciona tu proyecto
   3. Ve a la sección "Connection Details"
   4. Copia la "Connection string" completa

4. **Ejecuta el servidor de desarrollo**
   ```bash
   pnpm dev
   ```

5. **Abre la aplicación**
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Admin Panel: [http://localhost:3000/admin](http://localhost:3000/admin)

## 📁 Estructura del Proyecto

```
src/
├── app/                    # App Router de Next.js
│   ├── (my-app)/           # Rutas de la aplicación
│   │   └── users/          # Gestión de usuarios
│   ├── (payload)/          # Rutas de Payload CMS
│   └── actions/            # Server Actions
├── collections/            # Colecciones de Payload
├── components/             # Componentes UI
├── lib/                    # Utilidades y configuración
└── payload.config.ts       # Configuración de Payload (PostgreSQL)
```

## 🎯 Uso

### Gestión de Usuarios

1. **Crear usuario**: Usa el botón "Nuevo usuario" en la esquina superior derecha
2. **Editar usuario**: Haz clic en el ícono de lápiz en la tabla
3. **Eliminar usuario**: Usa el ícono de papelera (requiere confirmación)

### Panel de Administración

Accede al panel de administración de Payload en `/admin` para gestión avanzada.

## 🗃️ Base de Datos

Este proyecto utiliza **PostgreSQL** como base de datos, específicamente hospedada en **Neon Tech**, que ofrece:

- ✅ **PostgreSQL serverless** optimizado para aplicaciones modernas
- ✅ **Escalamiento automático** según demanda
- ✅ **Branching de base de datos** para desarrollo
- ✅ **Conexiones SSL** seguras por defecto

### Configuración de Neon Tech

1. Crea una cuenta en [Neon Tech](https://neon.tech)
2. Crea un nuevo proyecto
3. Copia la connection string desde el dashboard
4. Pégala en tu variable `DATABASE_URL`

## 🔒 Autenticación

El sistema incluye roles de usuario:
- **Admin**: Acceso completo a todas las funcionalidades
- **User**: Acceso limitado según configuración

## 🎨 Personalización

### Componentes UI
Los componentes están construidos con shadcn/ui y pueden personalizarse fácilmente editando los archivos en `src/components/ui/`.

### Schemas de Validación
Los schemas de Zod están en `src/lib/schemas/` y pueden modificarse según tus necesidades.

## 📝 Scripts Disponibles

```bash
# Desarrollo
pnpm dev

# Build de producción
pnpm build

# Iniciar servidor de producción
pnpm start

# Linting
pnpm lint
```

## 🚀 Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno en el dashboard de Vercel
3. Despliega automáticamente

### Otras Plataformas

Asegúrate de configurar las variables de entorno correctamente en tu plataforma de despliegue.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 💡 Recursos Adicionales

- [Next.js Documentation](https://nextjs.org/docs)
- [Payload CMS Documentation](https://payloadcms.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
