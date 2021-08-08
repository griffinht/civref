package net.stzups.civref.converter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.dataformat.yaml.YAMLFactory;

import java.io.IOException;

public class Converter {
    public static void main(String[] args) throws IOException {
        RealisticBiomes realisticBiomes = new ObjectMapper(new YAMLFactory()).readValue(System.in, RealisticBiomes.class);
        System.out.print(realisticBiomes);
    }
}
