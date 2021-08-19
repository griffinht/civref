package net.stzups.civref.commons;

import io.netty.buffer.ByteBuf;

public interface Deserializer<T> {
    public T deserialize(ByteBuf byteBuf);
}
