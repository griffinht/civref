package net.stzups.civref.converter;

import org.yaml.snakeyaml.Yaml;

import java.util.Map;

public class Converter {
    public static void main(String[] args) {
        Yaml yaml = new Yaml();
        Map<String, String> map;
        map = yaml.load(System.in);
        System.out.print(map);
    }
}
