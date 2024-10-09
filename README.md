
# Zerveros Nest Skeleton

Este proyecto utiliza Docker para facilitar su ejecución en diferentes entornos. Sigue los pasos a continuación para levantar el proyecto y gestionar sus dependencias.

## Requisitos

1. **Docker**: Asegúrate de tener Docker y Docker Compose instalados en tu máquina.
   - Puedes descargar Docker desde: [https://www.docker.com/get-started](https://www.docker.com/get-started)
2. **SSH Agent**: Para interactuar con Git desde el contenedor, asegúrate de que tu agente SSH esté configurado correctamente y corriendo.

### Comprobación de la instalación de Docker

```bash
docker --version
docker compose --version
```

Si no tienes Docker Compose instalado, asegúrate de que esté disponible como parte de tu instalación de Docker. En versiones recientes de Docker, `docker-compose` se integra como `docker compose`.

## Instalación del proyecto

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone git@github.com:werpoz/skeleton-nestjs.git
   cd skeleton-nestjs
   ```

2. Crea un archivo `.env` en la carpeta raíz del proyecto (o asegúrate de que esté presente).

## Levantar el proyecto

Para levantar el proyecto en modo desarrollo o debug, debes ejecutar los siguientes comandos:

### Levantar el proyecto en modo CLI
Este comando ejecuta el contenedor `node-cli` para interactuar con Node.js en el entorno CLI.

```bash
docker compose -f ".docker/docker-compose.dev.yml" up -d --build node-cli
```

### Levantar el servidor en modo debug
Este comando inicia el servidor con capacidades de debug habilitadas.

```bash
docker compose -f ".docker/docker-compose.dev.yml" up -d --build node-server-debug
```

### Comprobar la versión de Node.js
Para comprobar la versión de Node.js instalada en el contenedor `node-cli`, ejecuta:

```bash
docker compose -f '.docker/docker-compose.dev.yml' run --rm node-cli node --version
```

## Ejecutar comandos en el contenedor

### Ejecutar Prettier
Puedes ejecutar Prettier dentro del contenedor `node-cli` con el siguiente comando:

```bash
docker compose -f '.docker/docker-compose.dev.yml' run --rm node-cli npx prettier . --single-quote --list-different
```

### Ejecutar comandos de Git
Si quieres interactuar con Git dentro del contenedor, usa el siguiente comando:

```bash
docker compose -f '.docker/docker-compose.dev.yml' run --rm node-cli git status
```

Esto te permite ejecutar comandos de Git desde el contenedor Docker.

## Instalar dependencias

Si necesitas instalar dependencias nuevas dentro del contenedor, puedes hacerlo de la siguiente manera:

```bash
docker compose -f '.docker/docker-compose.dev.yml' run --rm node-cli npm install <paquete>
```

Esto instalará el paquete en el contenedor y actualizará tu `package.json` y `package-lock.json`.

## Detener el proyecto

Para detener el contenedor cuando termines de trabajar, ejecuta el siguiente comando:

```bash
docker compose -f ".docker/docker-compose.dev.yml" down
```

Esto apagará y eliminará los contenedores levantados por Docker Compose.

## Recursos adicionales

- [Documentación oficial de Docker](https://docs.docker.com/)
- [Documentación oficial de Docker Compose](https://docs.docker.com/compose/)

Con estos pasos, estarás listo para trabajar en tu proyecto utilizando Docker de manera eficiente. Si tienes dudas adicionales, no dudes en consultar la documentación o contactar a los mantenedores.
