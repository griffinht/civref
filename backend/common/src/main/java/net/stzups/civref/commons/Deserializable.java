package net.stzups.civref.commons;

import io.netty.buffer.ByteBuf;

public interface Deserializable<T> {
    public T deserialize(ByteBuf byteBuf);
}
