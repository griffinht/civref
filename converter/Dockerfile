#
# Build (Gradle)
#
FROM gradle as build

WORKDIR /usr/src/app

COPY . .

RUN gradle shadowJar --no-daemon

#
# Runtime (Java 11)
#
FROM adoptopenjdk/openjdk11:alpine-jre
RUN apk --no-cache add curl

WORKDIR /usr/app

COPY --from=build /usr/src/app/build/libs/discord.jar .

ENTRYPOINT ["java", "-jar", "converter.jar"]