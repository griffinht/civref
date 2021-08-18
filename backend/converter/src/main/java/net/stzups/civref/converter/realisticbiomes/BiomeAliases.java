package net.stzups.civref.converter.realisticbiomes;

import io.netty.buffer.ByteBuf;
import net.stzups.civref.converter.minecraft.Biome;

import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class BiomeAliases {
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
