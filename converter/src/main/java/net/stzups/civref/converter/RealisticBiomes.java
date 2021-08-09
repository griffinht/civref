package net.stzups.civref.converter;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class RealisticBiomes {
    private Map<String, String[]> biomeAliases = new HashMap<>();
    private Map<String, Plant> plants = new HashMap<>();

    public RealisticBiomes(Object realisticBiomes) {
        Map<?, ?> map = ((Map<?, ?>) realisticBiomes);
        for (Map.Entry<?, ?> entry : ((Map<?, ?>) map.get("biome_aliases")).entrySet()) {
            Object[] objects = ((List<?>) entry.getValue()).toArray();
            String[] strings = new String[objects.length];
            for (int i = 0; i < objects.length; i++) {
                strings[i] = objects[i].toString();
            }
            biomeAliases.put(entry.getKey().toString(), strings);
        }
        for (Map.Entry<?, ?> entry : ((Map<?, ?>) map.get("plants")).entrySet()) {
            plants.put(entry.getKey().toString(), new Plant(entry.getValue()));
        }
    }
}

class Plant {
    private String persistentGrowthPeriod;

    public Plant(Object plant) {
        Map<?, ?> map = (Map<?, ?>) plant;
        persistentGrowthPeriod = map.get("persistent_growth_period").toString();
    }
}