package net.stzups.civref.commons;

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

    public static String readString8(ByteBuf byteBuf) {
        return byteBuf.readCharSequence(byteBuf.readUnsignedByte(), StandardCharsets.UTF_8).toString();
    }

    public static <T extends Serializable> void writeArray8(ByteBuf byteBuf, T[] array) {
        if (array.length > 256) {
            throw new RuntimeException("Array of length " + array.length + " is too long");
        }
        byteBuf.writeByte((byte) array.length);
        for (T element : array) {
            element.serialize(byteBuf);
        }
    }

    public static <A, T extends Deserializable<A>> A[] readArray8(ByteBuf byteBuf, T deserializer) {
        int length = byteBuf.readUnsignedByte();
        A[] array = (A[]) new Object[length];

        for (int i = 0; i < length; i++) {
            array[i] = deserializer.deserialize(byteBuf);
        }

        return array;
    }
}
