package net.stzups.civref.converter;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import net.stzups.civref.converter.minecraft.Biome;

import java.util.Map;

@JsonIgnoreProperties(ignoreUnknown = true)
public class RealisticBiomes {
    @JsonProperty("biome_aliases")
    private Map<String, Biome[]> biomeAliases;

    @Override
    public String toString() {
        return "biomeAliases=" + biomeAliases;
    }
}

