package net.stzups.civref.converter;

import org.yaml.snakeyaml.Yaml;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;

public class Converter {
    public static void main(String[] args) throws FileNotFoundException {
        if (args.length > 0) {
            for (String arg : args) {
                parse(new FileInputStream(arg));
            }
        } else {
            parse(System.in);
        }
    }

    private static void parse(InputStream inputStream) {
        new RealisticBiomes(new Yaml().load(inputStream));
    }
}
