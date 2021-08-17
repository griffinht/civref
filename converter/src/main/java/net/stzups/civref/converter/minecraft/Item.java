package net.stzups.civref.converter.minecraft;

import io.netty.buffer.ByteBuf;

public class Item {
    private final String id;
    private final String name;
    // index on sprite map
    private final int index;

    Item(String id, String name, int index) {
        this.id = id;
        this.name = name;
        this.index = index;
    }

    public void serialize(ByteBuf byteBuf) {

    }
}
