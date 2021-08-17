package net.stzups.civref.converter.realisticbiomes;

import io.netty.buffer.ByteBuf;
import net.stzups.civref.converter.minecraft.Item;

public class Yields {
    private final Yield[] yields;

    Yields() {
        yields = new Yield[0];
    }

    public void serialize(ByteBuf byteBuf) {
        if (yields.length > 256) {
            throw new RuntimeException("Attempted to serialize too long" + yields.length);
        }
        byteBuf.writeByte((byte) yields.length);
        for (Yield y :  yields) {
            y.serialize(byteBuf);
        }
    }
}

class Yield {
    private final Item item;
    private final float amount;

    Yield(Item item, float amount) {
        this.item = item;
        this.amount = amount;
    }

    public void serialize(ByteBuf byteBuf) {
        //todo serialize item id only
        byteBuf.writeFloat(amount);
    }
}
