package net.stzups.civref.converter;

import io.netty.buffer.ByteBuf;
import io.netty.buffer.Unpooled;

import java.nio.charset.StandardCharsets;

public class NettyUtils {
    /**
     * Write variable length string up to 256 bytes (not letters!)
     */
    public static void writeString8(ByteBuf byteBuf, String string) {
        ByteBuf b = Unpooled.buffer();
        int length = b.writeCharSequence(string, StandardCharsets.UTF_8);
        if (length > 256) {
            throw new RuntimeException("String too long (" + string.length() + ", " + length + " bytes)");
        }
        byteBuf.writeByte((byte) length);
        byteBuf.writeBytes(b);
    }
}
