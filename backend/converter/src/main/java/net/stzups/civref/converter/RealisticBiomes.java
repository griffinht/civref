package net.stzups.civref.converter;

import io.netty.buffer.ByteBuf;
import net.stzups.civref.converter.realisticbiomes.BiomeAliases;
import net.stzups.civref.converter.realisticbiomes.Plants;

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
        //biomeAliases.serialize(byteBuf);
        plants.serialize(byteBuf);
    }
}

