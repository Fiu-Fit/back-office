# Fiu-Fit Back-Office

## Requisitos
* [Node.js version LTS 18.16.1](https://nodejs.org/en/download) 
* [Yarn version estable 1.22.19](https://github.com/yarnpkg/yarn/releases/tag/v1.22.19)

Tambien es necesario tener el [Back End](https://github.com/Fiu-Fit/Back) levantado y la URL del API Gateway para poder acceder al Dashboard.

## Setup

1. Copiar el archivo `.env.template` y renombrar la copia a `.env.local`.
2. Dentro del archivo creado, `.env.local`, reemplazar donde dice `<API URL HERE>` por la URL del API Gateway. Por ejemplo, si este estuviera escuchando en `http://localhost:8080`, `.env.local` se veria algo asi:
   ```txt
   API_URL=http://localhost:8080
   ```
3. Instalar las dependencias usando `yarn install`.
4. Instalar el modulo `common` usando `yarn common:install`.


## Ejecutar el servidor
El servidor de NextJS se levanta por defecto en el puerto 3000, por lo que este se debe encontrar disponible. En caso de querer cambiar el puerto, se puede agregar el flag `-p <PUERTO>` a los comandos indicados posteriormente.

### Modo development
Para levantar el servidor en modo desarrollo, de forma que tengamos [Fast Refresh](https://nextjs.org/docs/architecture/fast-refresh), simplemente hay que ejecutar el comando `yarn dev`.

### Modo production
Para levantar el servidor en modo production, hace falta seguir los siguiente pasos:
1. Hacer un build del proyecto ejecutando `yarn build`.
2. Ejecutar el comando `yarn start` para levantar el servidor de Next.