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
# todo necessary?
RUN apk --no-cache add curl

WORKDIR /usr/app

COPY --from=build /usr/src/app/build/libs/converter.jar .
COPY convert.sh .

ENTRYPOINT ["convert.sh", ${INPUT}]