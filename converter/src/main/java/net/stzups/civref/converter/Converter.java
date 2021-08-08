package net.stzups.civref.converter;


import org.yaml.snakeyaml.Yaml;
import org.yaml.snakeyaml.constructor.Constructor;

public class Converter {
    public static void main(String[] args) {
        RealisticBiomes realisticBiomes = new Yaml(new Constructor(RealisticBiomes.class)).load(System.in);
        System.out.print(realisticBiomes);

    }
}
