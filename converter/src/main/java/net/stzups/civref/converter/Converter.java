package net.stzups.civref.converter;

import net.stzups.civref.converter.minecraft.Item;
import net.stzups.civref.converter.realisticbiomes.Yields;
import net.stzups.civref.converter.spritemap.Sprite;
import net.stzups.civref.converter.spritemap.SpriteMap;
import org.bukkit.Material;

import javax.imageio.ImageIO;
import java.io.File;
import java.io.IOException;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.List;

public class Converter {
    public static void main(String[] args) throws IOException {
        if (args.length == 1) {
            generateTextures(new File(args[0]), System.out);
        } else {
            System.err.println("Specify one input directory file");
            System.exit(1);
        }
    }

    private static void generateTextures(File file, OutputStream outputStream) throws IOException {
        File textures = new File(file, "assets/minecraft/textures");
        if (!textures.exists() || !textures.isDirectory()) {
            System.err.println("File at " + textures.getAbsolutePath() + " is not a directory that exists");
            System.exit(1);
            //todo necessary?
            return;
        }

        List<Sprite<Object>> sprites = new ArrayList<>();

        String[] blocks = new String[] {
                "acacia_door_bottom",
                "allium",
                "acacia_log",
                "bedrock",
                "beacon"
        };
        File blockDir = new File(textures, "block");
        for (String block : blocks) {
            sprites.add(new Sprite<>(new Object(), ImageIO.read(new File(blockDir, block + ".png"))));
        }
        ImageIO.write(SpriteMap.generate(sprites), "png", outputStream);
    }

    /**
     * @param material growable block material
     * @return yield for given material, or null if the material is not found
     */
    public static Yields getYield(Material material) {
        return null;
    }

    /**
     * @param material growable block material
     * @return seed for given material, or null if the material is not found
     */
    public static Item getSeed(Material material) {
        return null;
    }
}
