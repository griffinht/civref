package net.stzups.civref.converter;

import io.netty.buffer.ByteBuf;

import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class RealisticBiomes {
    private final BiomeAliases biomeAliases;
    private final Plants plants;

    public RealisticBiomes(Object realisticBiomes) {
        Map<?, ?> map = ((Map<?, ?>) realisticBiomes);
        biomeAliases = new BiomeAliases(map.get("biome_aliases"));
        plants = new Plants(map.get("plants"));
    }

    public void serialize(ByteBuf byteBuf) {
        biomeAliases.serialize(byteBuf);
        plants.serialize(byteBuf);
    }
}

class BiomeAliases {
    private final Map<String, Biome[]> biomeAliases = new HashMap<>();

    public BiomeAliases(Object object) {
        for (Map.Entry<?, ?> entry : ((Map<?, ?>) object).entrySet()) {
            Object[] objects = ((List<?>) entry.getValue()).toArray();
            Biome[] biomes = new Biome[objects.length];
            for (int i = 0; i < objects.length; i++) {
                biomes[i] = new Biome(objects[i]);
            }
            biomeAliases.put(entry.getKey().toString(), biomes);
        }
    }

    public void serialize(ByteBuf byteBuf) {
        byteBuf.writeByte((byte) biomeAliases.size());
        for (Map.Entry<String, Biome[]> entry : biomeAliases.entrySet()) {
            byteBuf.writeByte((byte) entry.getKey().length());
            byteBuf.writeCharSequence(entry.getKey(), StandardCharsets.UTF_8);

            byteBuf.writeByte((byte) entry.getValue().length);
            for (Biome biome : entry.getValue()) {
                biome.serialize(byteBuf);
            }
        }
    }
}

class Biome {
    private final String biome;

    public Biome(Object object) {
        this.biome = object.toString();
    }

    public void serialize(ByteBuf byteBuf) {
        byteBuf.writeByte((byte) biome.length());
        byteBuf.writeCharSequence(biome, StandardCharsets.UTF_8);
    }
}

class Plants {
    private Map<String, Plant> plants = new HashMap<>();

    Plants(Object object) {
        for (Map.Entry<?, ?> entry : ((Map<?, ?>) object).entrySet()) {
            plants.put(entry.getKey().toString(), new Plant(entry.getValue()));
        }
    }

    public void serialize(ByteBuf byteBuf) {

    }
}

class Plant {
    private String item;
    private String persistentGrowthPeriod;

    public Plant(Object plant) {
        Map<?, ?> map = (Map<?, ?>) plant;
        persistentGrowthPeriod = map.get("persistent_growth_period").toString();
    }
}