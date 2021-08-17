package net.stzups.civref.converter.spritemap;

import java.awt.*;
import java.awt.image.BufferedImage;
import java.util.List;

public class SpriteMap {
    /**
     * Generate with dimensions of first sprite
     */
    public static <T> BufferedImage generate(List<Sprite<T>> sprites) {
        if (sprites.size() == 0) return new BufferedImage(0, 0, BufferedImage.TYPE_INT_RGB);

        Image image = sprites.get(0).getImage();

        return generate(sprites, image.getWidth(null), image.getHeight(null));
    }

    /**
     * Resize each sprite to specified size and draw sprite map horizontally
     */
    public static <T> BufferedImage generate(List<Sprite<T>> sprites, int width, int height) {
        BufferedImage image = new BufferedImage(width * sprites.size(), height, BufferedImage.TYPE_INT_RGB);
        for (int i = 0; i < sprites.size(); i++) {
            BufferedImage spriteImage = sprites.get(i).getImage();
            Image spriteImageScaled;
            // check if resize is necessary
            if (spriteImage.getWidth(null) != width || spriteImage.getHeight(null) != height) {
                spriteImageScaled = spriteImage.getScaledInstance(width, height, BufferedImage.TYPE_INT_RGB);
            } else {
                spriteImageScaled = spriteImage;
            }

            image.getGraphics().drawImage(spriteImageScaled, width * i, 0, null);
        }

        return image;
    }
}
