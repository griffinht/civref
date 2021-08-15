#!/bin/bash

# check if $0 is set, otherwise set $0 with a default value
set() {
  if [ -z ${$0+x} ]; then $0=$1
}

realisticBiomesConfigUrl=https://raw.githubusercontent.com/CivClassic/AnsibleSetup/master/templates/public/plugins/RealisticBiomes/config.yml.j2
#converter=converter.jar
convertRealisticBiomes() {
  set "converter" "converter.jar"
  curl "$realisticBiomesConfigUrl" | java -jar $converter > output
}

launcherMetaUrl=https://launchermeta.mojang.com/mc/game/version_manifest.json
# jq command or minecraft version
# mcVersion=.latest.release
# mcVersion=1.17.1
mcVersion=.latest.release
convertTextures() {
  launcherMeta=$(curl "$launcherMetaUrl")
  # $mcVersion=.latest.release
  $mcVersionUrl=$(echo $launcherMeta | jq '.$mcVersion')
  # $mcVersion=1.17.1
  if [ $mcVersionUrl == "null" ]; then
    $mcVersionUrl=$(echo "$launcherMeta" | jq '.versions[] | select(.id=="1.17.1").url')

    if [ $mcVersionUrl == "" ]; then
      echo "Minecraft version $mcVersion not found from $launcherMetaUrl"
      exit 1
    fi
  fi

  echo $mcVersionUrl
}

