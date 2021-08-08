#!/bin/bash

# path to converter.jar
converter=$0

if [ -z ${converter+x}] ]; then converter=converter.jar

curl "https://github.com" | java -jar $converter > output
