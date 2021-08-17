package net.stzups.civref.converter.minecraft;

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
}
