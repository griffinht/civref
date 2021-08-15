#!/bin/bash

realisticBiomesConfigUrl=https://raw.githubusercontent.com/CivClassic/AnsibleSetup/master/templates/public/plugins/RealisticBiomes/config.yml.j2
convertRealisticBiomes() {
  if [[ -z ${converter+x} ]]; then converter=converter.jar; fi
  curl "$realisticBiomesConfigUrl" | java -jar $converter > output
}

launcherMetaUrl=https://launchermeta.mojang.com/mc/game/version_manifest.json

# $1=id
# jq expression or minecraft version
# id=latest.release
# id=1.17.1
convertTextures() {
  id=$1
  if [[ -z ${id} ]]; then id=.latest.release; fi

  launcherMeta=$(curl -s "$launcherMetaUrl")
  # check for valid json response
  if ! echo $launcherMeta | jq > /dev/null; then
    echo "couldn't get launcher meta from $launcherMetaUrl"
    exit 1
  fi

  # check for valid jq expression
  if id_=$(echo "$launcherMeta" | jq "$id"); then
    # $id=.latest.release
    # $id_="1.17.1"
    if [[ $id_ == "null" ]]; then
      echo "jq expression $id not found from $launcherMetaUrl"
      exit 1
    fi
  else
    # $id=1.17.1
    id_="\"$id\""
    # $id_="1.17.1"
  fi

  # $id_ must be wrapped in quotes
  version=$(echo "$launcherMeta" | jq ".versions[] | select(.id==$id_)")

  if [[ -z ${version} ]]; then
    echo "version $id not found from $launcherMetaUrl"
    exit 1
  fi

  echo "version: $version"
}

convertTextures