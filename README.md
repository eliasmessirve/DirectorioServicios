# DirectorioServicios

DirectorioServicios es una aplicación web que permite encontrar profesionales y servicios para el hogar. Los usuarios pueden explorar las categorías disponibles, buscar servicios por nombre o palabras relacionadas y acceder a la información de cada profesional para contactarlo.

**Sitio publicado:** https://directorio-servicios-blue.vercel.app/

## Funcionalidades

- Listado de servicios disponibles.
- Búsqueda por nombre, descripción, categoría y sinónimos.
- Filtro de servicios por categoría.
- Página de detalles para cada servicio.
- Botones para contactar mediante llamada telefónica y WhatsApp.
- Formulario de contacto con validación de datos.
- Diseño adaptable a diferentes tamaños de pantalla.
- Metadatos para mejorar la presentación del sitio en buscadores y redes sociales.

## Tecnologías utilizadas

- Next.js 13
- React
- TypeScript
- Tailwind CSS
- API Routes de Next.js
- Vercel para el despliegue.

## Requisitos previos

Para ejecutar el proyecto localmente necesitás tener instalado:

- Node.js y npm en versiones compatibles con las dependencias del proyecto.
- Git, si vas a clonar el repositorio.

## Instalación y ejecución

1. Cloná el repositorio:

   ```bash
   git clone https://github.com/eliasmve/DirectorioServicios.git
   ```

2. Entrá en la carpeta del proyecto:

   ```bash
   cd DirectorioServicios
   ```

3. Instalá las dependencias:

   ```bash
   npm install
   ```

4. Iniciá el servidor de desarrollo:

   ```bash
   npm run dev
   ```

5. Abrí http://localhost:3000 en el navegador.

Para generar una compilación de producción, ejecutá:

```bash
npm run build
```

## Estructura del proyecto

```text
DirectorioServicios/
├── app/
│   ├── api/
│   │   └── contacto/
│   │       └── route.ts
│   ├── contacto/
│   │   └── page.tsx
│   ├── data/
│   │   └── servicios.ts
│   ├── servicio/
│   │   └── [nombre]/
│   │       └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── package.json
└── README.md
```

## Cómo agregar un servicio

1. Abrí `app/data/servicios.ts`.
2. Agregá un nuevo objeto al arreglo `servicios`.
3. Completá sus propiedades: `nombre`, `precio`, `categoria`, `color`, `descripcion`, `sinonimos`, `imagen`, `telefono` y `ruta`.
4. Guardá los cambios y comprobá que la tarjeta aparezca correctamente.

Ejemplo ilustrativo:

```typescript
{
  nombre: "Ejemplo",
  precio: 10000,
  categoria: "Ejemplos",
  color: "bg-blue-100 text-blue-600",
  descripcion: "Descripción del servicio",
  sinonimos: ["palabra relacionada", "otra variante"],
  imagen: "/ejemplo.jpg",
  telefono: "264000000",
  ruta: "/servicio/ejemplo"
}
```

La imagen debe estar dentro de la carpeta `public/`. La ruta debe coincidir con la utilizada por la página de detalles.

## Formulario de contacto

El formulario se encuentra en `app/contacto/page.tsx` y envía los datos mediante una solicitud HTTP POST a `/api/contacto`.

La API valida los campos recibidos y devuelve una respuesta de éxito o error. En la implementación actual, las solicitudes recibidas se registran en los logs del servidor; no se debe asumir que se almacenan permanentemente ni que se envían correos electrónicos.

## Despliegue

El proyecto está publicado en Vercel:

https://directorio-servicios-blue.vercel.app/

Los cambios deben guardarse, confirmarse en Git y subirse al repositorio remoto para que Vercel pueda generar un nuevo despliegue, siempre que la integración esté configurada correctamente.

## Estado del proyecto

Este proyecto corresponde a una etapa de desarrollo de un directorio web de servicios. Sus funcionalidades pueden ampliarse en futuras versiones.
