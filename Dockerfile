# Usa una imagen oficial de Node con la versión específica
FROM node:18.16.1

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el archivo package.json y package-lock.json a /app
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de la aplicación al directorio de trabajo
COPY . .

# Construye la aplicación
RUN npm run build

# Expone el puerto 3000 (o el puerto que uses en tu aplicación React)
EXPOSE 3000

# Comando para ejecutar la aplicación cuando el contenedor se inicie
CMD ["npm", "start"]