FROM eclipse-temurin:17-jdk
WORKDIR /app

# Copiar el JAR que Maven genera en target/
COPY target/*.jar app.jar

EXPOSE 8080
CMD ["java", "-jar", "app.jar", "--server.port=${PORT}"]
