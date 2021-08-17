package net.stzups.civref.converter.minecraft;

import io.netty.buffer.ByteBuf;

import java.nio.charset.StandardCharsets;

public class Biome {
    private final String biome;

    public Biome(Object object) {
        this.biome = object.toString();
    }

    public void serialize(ByteBuf byteBuf) {
        byteBuf.writeByte((byte) biome.length());
        byteBuf.writeCharSequence(biome, StandardCharsets.UTF_8);
    }
}
