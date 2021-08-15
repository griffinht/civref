#!/bin/bash

# $1=path to converter.jar
converter=converter.jar
if [[ -z ${$1+x} ]]; then converter=$1; fi

realisticBiomesConfigUrl=https://raw.githubusercontent.com/CivClassic/AnsibleSetup/master/templates/public/plugins/RealisticBiomes/config.yml.j2
convertRealisticBiomes() {
  curl "$realisticBiomesConfigUrl" | java -jar $converter > output
}

launcherMetaUrl=https://launchermeta.mojang.com/mc/game/version_manifest.json

# $1=id
# jq expression or minecraft version
# id=.latest.release
# id=1.17.1
convertTextures() {
  id=$1
  if [[ -z ${id} ]]; then id=.latest.release; fi

  #
  # Download launcher meta from Mojang API and select version
  #

  launcherMeta=$(mktemp)
  curl -s "$launcherMetaUrl" > $launcherMeta
  # check for valid json response
  if ! cat $launcherMeta | jq > /dev/null; then
    echo "couldn't get launcher meta from $launcherMetaUrl"
    exit 1
  fi

  # check for valid jq expression (and ignore errors)
  if id_=$(cat $launcherMeta | jq -r "$id" 2>/dev/null); then
    # $id=.latest.release
    # $id_="1.17.1"
    if [[ $id_ == "null" ]]; then
      echo "jq expression $id not found from $launcherMetaUrl"
      exit 1
    fi
  else
    id_="$id"
  fi

  versionUrl=$(cat $launcherMeta | jq -r ".versions[] | select(.id==\"$id_\").url")

  if [[ -z ${versionUrl} ]]; then
    echo "version $id not found from $launcherMetaUrl"
    exit 1
  fi

  #
  # Download client jar selected version from Mojang API
  #

  version=$(mktemp)
  # todo error handle
  if ! curl -s "$versionUrl" | jq '.downloads.client' > $version; then
    echo "couldn't get launcher meta from $versionUrl"
    exit 1
  fi

  client=$(mktemp)
  curl -s $(cat $version | jq -r '.url') > $client

  # check actual sha1 against give sha1
  sha1VersionUrl=$(cat $version | jq -r '.sha1')
  sha1=$(cat $client | sha1sum | head -c 40)
  if [[ $sha1VersionUrl != $sha1 ]]; then
    echo "sha1 does not match"
    echo "$sha1VersionUrl (given sha1 from $versionUrl)"
    echo "$sha1 (actual sha1 of downloaded file)"
    exit 1
  fi

  #
  # Unzip client jar
  #

  clientDir=$(mktemp -d)
  unzip -q -d $clientDir $client

  #
  # Convert
  #

  java -jar $converter $clientDir > output.png
}

convertTextures