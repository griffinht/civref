package net.stzups.civref.converter;

import java.util.HashMap;
import java.util.Map;

public class RealisticBiomes {
    private Map<String, String[]> biomeAliases;
    private Map<String, Plant> plants = new HashMap<>();

    public RealisticBiomes(Map<String, ?>  realisticBiomes) {
        this.biomeAliases = (Map<String, String[]>) realisticBiomes.get("biome_aliases");
        for (Map.Entry<String, Map<String, ?>> entry : ((Map<String, Map<String, ?>>)realisticBiomes.get("plants")).entrySet()) {
            plants.put(entry.getKey(), new Plant(entry.getValue()));
        }
    }
}

class Plant {
    private String persistentGrowthPeriod;

    public Plant(Map<String, ?> plant) {
        Object object = plant.get("persistent_growth_period");
        if (object instanceof String) {
            persistentGrowthPeriod = (String) object;
        } else if (object instanceof Integer) {
            persistentGrowthPeriod = ((Integer) object).toString();
        } else {
            throw new ClassCastException(object + " is not a " + String.class + " or " + Integer.class);
        }
    }
}