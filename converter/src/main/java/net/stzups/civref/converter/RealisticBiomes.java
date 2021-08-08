package net.stzups.civref.converter;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Map;

public class RealisticBiomes {
    @JsonProperty("biome_aliases")
    private Map<String, String[]> biomeAliases;

    @Override
    public String toString() {
        return "biomeAliases=" + biomeAliases;
    }
}
