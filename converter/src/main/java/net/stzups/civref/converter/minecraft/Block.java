package net.stzups.civref.converter.minecraft;

import io.netty.buffer.ByteBuf;
import net.stzups.civref.converter.NettyUtils;
import org.bukkit.Material;

public class Block {
    private final Material material;

    public Block(Material material) {
        this.material = material;
    }

    public void serialize(ByteBuf byteBuf) {
        NettyUtils.writeString8(byteBuf, material.getKey().getKey());
        NettyUtils.writeString8(byteBuf, material.name());
    }
}
