# Imagen base con Java 17
FROM openjdk:17-jdk-slim

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar el JAR generado por Maven
COPY target/portafolio-academico-1.0.0.jar app.jar

# Render asigna dinámicamente el puerto en la variable $PORT
EXPOSE 8080
CMD ["java", "-jar", "app.jar", "--server.port=${PORT}"]
