package net.stzups.civref.bukkit;

import io.netty.buffer.ByteBuf;
import net.stzups.civref.commons.Deserializable;
import net.stzups.civref.commons.NettyUtils;
import org.bukkit.Material;

public class MaterialDeserializer implements Deserializable<Material> {
    @Override
    public Material deserialize(ByteBuf byteBuf) {
        return Material.valueOf(NettyUtils.readString8(byteBuf));
    }
}
