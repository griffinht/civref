package net.stzups.civref.converter.realisticbiomes;

import net.stzups.civref.converter.minecraft.Block;
import net.stzups.civref.converter.minecraft.Item;

import java.util.Map;

class Plant {
    private final String name;
    private final Item seed;
    private final Block crop;
    private final Yield[] yields;
    private final int persistentGrowthPeriod;

    public Plant(Object plant) {
        Map<?, ?> map = (Map<?, ?>) plant;
        name = map.get("name").toString();
        //todo how do you get this?
        seed = null;
        //todo get block from material string
        crop = (Block) ((Map<?, ?>) map.get("grower")).get("material");
        //todo how do you get this?
        yields = null;
        persistentGrowthPeriod = Integer.parseInt(map.get("persistent_growth_period").toString());
    }
}
