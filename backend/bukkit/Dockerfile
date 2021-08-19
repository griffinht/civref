#
# Build
#
FROM gradle as build

WORKDIR /usr/src/app

COPY . .

RUN gradle shadowJar

#
# Runtime
#
FROM adoptopenjdk/openjdk16:alpine-jre
RUN apk --no-cache add curl

WORKDIR /usr/app

RUN curl -o server.jar "https://papermc.io/api/v1/paper/1.16.5/latest/download"
RUN echo "eula=true" > eula.txt
COPY --from=build /usr/src/app/build/libs/bukkitconverter.jar ./plugins/

ENTRYPOINT [ "java", "-jar", "server.jar" ]