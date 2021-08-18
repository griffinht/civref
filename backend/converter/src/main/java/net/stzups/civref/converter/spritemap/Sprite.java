package net.stzups.civref.converter.spritemap;

import java.awt.image.BufferedImage;

public class Sprite<T> {
    private final T sprite;
    private final BufferedImage image;

    public Sprite(T sprite, BufferedImage image) {
        this.sprite = sprite;
        this.image = image;
    }

    public BufferedImage getImage() {
        return image;
    }
}
