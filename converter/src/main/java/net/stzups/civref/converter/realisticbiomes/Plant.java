package net.stzups.civref.converter.realisticbiomes;

import io.netty.buffer.ByteBuf;
import net.stzups.civref.converter.Converter;
import net.stzups.civref.converter.NettyUtils;
import net.stzups.civref.converter.minecraft.Block;
import net.stzups.civref.converter.minecraft.Item;
import org.bukkit.Material;

import java.util.Map;

class Plant {
    private final String name;
    private final Item seed;
    private final Block crop;
    private final Yields yields;
    private final int persistentGrowthPeriod;

    public Plant(Object plant) {
        Map<?, ?> map = (Map<?, ?>) plant;
        name = map.get("name").toString();
        seed = null;
        Material material = Material.getMaterial((((Map<?, ?>) map.get("grower"))).get("material").toString());
        crop = new Block(material);
        yields = Converter.getYield(material);
        //todo error handling
        persistentGrowthPeriod = Integer.parseInt(map.get("persistent_growth_period").toString());
    }

    public void serialize(ByteBuf byteBuf) {
        NettyUtils.writeString8(byteBuf, name);
        seed.serialize(byteBuf);
        crop.serialize(byteBuf);
        yields.serialize(byteBuf);
        byteBuf.writeByte((byte) persistentGrowthPeriod);
    }
}
