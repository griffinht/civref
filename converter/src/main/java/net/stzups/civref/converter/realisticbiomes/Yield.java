package net.stzups.civref.converter.realisticbiomes;

import net.stzups.civref.converter.minecraft.Item;

class Yield {
    private final Item item;
    private final int amount;

    Yield(Item item, int amount) {
        this.item = item;
        this.amount = amount;
    }
}
