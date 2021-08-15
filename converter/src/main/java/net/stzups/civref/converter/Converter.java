package net.stzups.civref.converter;

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
}
