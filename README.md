# API Ciudades

Este proyecto es una API para gestionar información sobre ciudades. A continuación, se describen las dependencias utilizadas, los endpoints disponibles, y las instrucciones para instalar y ejecutar el proyecto.
## Estructura del proyecto
```
└── 📁src
    └── 📁componentes
        └── mensaje.js
    └── 📁configuraciones
        └── db.js
    └── 📁controladores
        └── DimCostoBeneficio.controller.js
        └── index.controller.js
        └── inicio.controller.js
    └── 📁modelos
        └── DimCostoBeneficio.model.js
        └── index.model.js
    └── 📁rutas
        └── DimCostoBeneficio.route.js
        └── index.route.js
        └── inicio.route.js
    └── server.js
└── .env
└── env.template
```
## Dependencias

El proyecto utiliza las siguientes dependencias principales:

- **express**: Framework para construir aplicaciones web y APIs.
- **cors**: Middleware para habilitar CORS (Cross-Origin Resource Sharing).
- **dotenv**: Manejo de variables de entorno desde un archivo `.env`.
- **morgan**: Middleware para registrar solicitudes HTTP.
- **sequelize**: ORM para interactuar con bases de datos relacionales.
- **mssql**: Driver para conectarse a bases de datos Microsoft SQL Server.
- **tedious**: Librería subyacente utilizada por `mssql` para conexiones con SQL Server.
- **nodemon**: Herramienta para reiniciar automáticamente el servidor durante el desarrollo.

## Instalación

1. Clona este repositorio en tu máquina local.
2. Instala las dependencias ejecutando:

   ```bash
   npm install

3. Crea un archivo .env en la raíz del proyecto basado en el archivo env.template y configura las variables de entorno necesarias (env.template):
BASE_NOMBRE=
BASE_USUARIO=
BASE_CONTRASENA=
BASE_SERVIDOR=
BASE_PORT=

4. Accede a la API en `http://localhost:3001/api/`.

## Ejecución en Desarrollo

Para ejecutar el proyecto en modo desarrollo con reinicio automático (nodemon) al detectar cambios, utiliza:
```bash
npm run dev
```
## Ejecución en Produccion
Modo producción
Para ejecutar el proyecto en modo producción, utiliza:
```bash
npm start
```

## ENDPOINTS
1. Inicio
-- GET /api/
Devuelve información general sobre la API.
2. Costos Beneficio
GET /api/costosBeneficio/listar


## Notas

- Asegúrate de tener MSSQL instalado y en ejecución antes de iniciar el proyecto.
- Puedes usar herramientas como Postman o cURL para probar los endpoints.
