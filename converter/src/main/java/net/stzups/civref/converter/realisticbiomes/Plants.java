package net.stzups.civref.converter.realisticbiomes;

import io.netty.buffer.ByteBuf;

import java.util.HashMap;
import java.util.Map;

public class Plants {
    private Map<String, Plant> plants = new HashMap<>();

    public Plants(Object object) {
        for (Map.Entry<?, ?> entry : ((Map<?, ?>) object).entrySet()) {
            plants.put(entry.getKey().toString(), new Plant(entry.getValue()));
        }
    }

    public void serialize(ByteBuf byteBuf) {

    }
}
