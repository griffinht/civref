package net.stzups.civref.commons;

import io.netty.buffer.ByteBuf;

public interface Serializer<T> {
    void serialize(ByteBuf byteBuf, T object);
}
