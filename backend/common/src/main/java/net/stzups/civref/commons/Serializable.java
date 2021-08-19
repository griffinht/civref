package net.stzups.civref.commons;

import io.netty.buffer.ByteBuf;

public interface Serializable {
    void serialize(ByteBuf byteBuf);
}
