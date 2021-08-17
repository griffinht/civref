package net.stzups.civref.converter;

import net.stzups.civref.converter.minecraft.Item;
import net.stzups.civref.converter.realisticbiomes.Yields;
import org.bukkit.Material;
import org.yaml.snakeyaml.Yaml;

import java.io.File;
import java.io.InputStream;

public class Converter {
    public static void main(String[] args) {
        if (args.length == 1) {
            textures(System.in, new File(args[0]));
        } else {
            System.err.println("Specify one input directory file, and pipe realistic biomes config to stdin");
            System.exit(1);
        }
    }

    private static void textures(InputStream inputStream, File file) {
        RealisticBiomes realisticBiomes = new RealisticBiomes(new Yaml().load(inputStream));

        File textures = new File(file, "assets/minecraft/textures");
        if (!textures.exists() || !textures.isDirectory()) {
            System.err.println("File at " + textures.getAbsolutePath() + " is not a directory that exists");
            System.exit(1);
        }
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
