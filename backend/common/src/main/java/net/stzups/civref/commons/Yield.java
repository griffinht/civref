package net.stzups.civref.commons;

import io.netty.buffer.ByteBuf;
import org.bukkit.Material;

public class Yield implements Serializable {
    private final Material material;
    private final float amount;

    public Yield(Material material, float amount) {
        this.material = material;
        this.amount = amount;
    }

    @Override
    public void serialize(ByteBuf byteBuf) {
        NettyUtils.writeString8(byteBuf, material.getKey().getKey());
        byteBuf.writeFloat(amount);
    }
}
