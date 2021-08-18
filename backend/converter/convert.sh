#!/bin/bash

# $1=path to converter.jar
converter=$1
if [[ -z ${converter+x} ]]; then converter=converter.jar; fi

realisticBiomesConfigUrl=https://raw.githubusercontent.com/CivClassic/AnsibleSetup/master/templates/public/plugins/RealisticBiomes/config.yml.j2
# downloads realistic biomes config to stdout
downloadRealisticBiomes() {
  curl "$realisticBiomesConfigUrl"
}

launcherMetaUrl=https://launchermeta.mojang.com/mc/game/version_manifest.json

# downloads specified minecraft client files and echos location
# $1=id
# jq expression or minecraft version
# id=.latest.release
# id=1.17.1
downloadMinecraftClient() {
  id=$1
  if [[ -z ${id} ]]; then id=.latest.release; fi

  #
  # Download launcher meta from Mojang API and select version
  #

  launcherMeta=$(mktemp)
  curl -s "$launcherMetaUrl" > "$launcherMeta"
  # check for valid json response
  if ! < "$launcherMeta" jq > /dev/null; then
    echo "couldn't get launcher meta from $launcherMetaUrl"
    exit 1
  fi

  # check for valid jq expression (and ignore errors)
  if id_=$(< "$launcherMeta" jq -r "$id" 2>/dev/null); then
    # $id=.latest.release
    # $id_="1.17.1"
    if [[ $id_ == "null" ]]; then
      echo "jq expression $id not found from $launcherMetaUrl"
      exit 1
    fi
  else
    id_="$id"
  fi

  versionUrl=$(< "$launcherMeta" jq -r ".versions[] | select(.id==\"$id_\").url")

  if [[ -z ${versionUrl} ]]; then
    echo "version $id not found from $launcherMetaUrl"
    exit 1
  fi

  #
  # Download client jar selected version from Mojang API
  #

  version=$(mktemp)
  # todo error handle (if statement never happens)
  if ! curl -s "$versionUrl" | jq '.downloads.client' > "$version"; then
    echo "couldn't get launcher meta from $versionUrl"
    exit 1
  fi

  client=$(mktemp)
  curl -s "$(< "$version" jq -r '.url')" > "$client"

  # check actual sha1 against give sha1
  sha1VersionUrl=$(< "$version" jq -r '.sha1')
  sha1=$(< "$client" sha1sum | head -c 40)
  if [[ "$sha1VersionUrl" != "$sha1" ]]; then
    echo "sha1 does not match"
    echo "$sha1VersionUrl (given sha1 from $versionUrl)"
    echo "$sha1 (actual sha1 of downloaded file)"
    exit 1
  fi

  #
  # Unzip client jar
  #

  clientDir=$(mktemp -d)
  unzip -q -d "$clientDir" "$client"

  echo "$clientDir"
}


convert() {
  echo "$converter"
  java -jar "$converter" "$(downloadMinecraftClient "1.16.5")" > output.png
}

convert