package net.stzups.civref.bukkit;

import io.netty.buffer.ByteBuf;
import io.netty.buffer.Unpooled;
import net.stzups.civref.commons.NettyUtils;
import net.stzups.civref.commons.Yield;
import org.bukkit.Bukkit;
import org.bukkit.Material;
import org.bukkit.World;
import org.bukkit.WorldCreator;
import org.bukkit.block.Block;
import org.bukkit.block.data.Ageable;
import org.bukkit.block.data.BlockData;
import org.bukkit.inventory.ItemStack;
import org.bukkit.plugin.java.JavaPlugin;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.nio.MappedByteBuffer;
import java.nio.channels.FileChannel;
import java.util.HashMap;
import java.util.Map;

public class BukkitConverter extends JavaPlugin {
    private static final String OUT_FILE = "out";
    private static final String IN_FILE = OUT_FILE;
    private static final String WORLD_NAME = "world";
    private static final int ITERATIONS = 1000;

    @Override
    public void onEnable() {
        ByteBuf b;
        try {
            b = getFileByteBuffer(new File(IN_FILE), FileChannel.MapMode.READ_ONLY);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        Material[] materials = NettyUtils.readArray8(b, new MaterialDeserializer());


        World world;
        try {
            world = getWorld(WORLD_NAME);
        } catch (Exception e) {
            throw new RuntimeException("Exception while getting world with name " + WORLD_NAME,e);
        }

        getLogger().info("Using " + world.getName());
        Block block = world.getBlockAt(0, 0, 0);

        getLogger().info("Finding yields of " + materials.length + " materials...");

        ByteBuf byteBuf = Unpooled.buffer();
        for (Material material : materials) {
            NettyUtils.writeString8(byteBuf, material.getKey().getKey());
            NettyUtils.writeArray8(byteBuf, getYields(block, material));
        }

        getLogger().info("Done, writing to output...");

        try {
            byteBuf.readBytes(getFileByteBuffer(new File(OUT_FILE), FileChannel.MapMode.READ_WRITE));
        } catch (IOException e) {
            e.printStackTrace();
        }

        getLogger().info("Done, shutting down");
        Bukkit.shutdown();
    }

    /**
     * Calculates yields for given material
     *  @param block any existing block that will be used for simulation
     * @param material material to test for
     */
    private static Yield[] getYields(Block block, Material material) {
        block.setType(material);
        // make crop fully grown
        BlockData data = block.getBlockData();
        if (data instanceof Ageable ageable) {
            ageable.setAge(ageable.getMaximumAge());
            block.setBlockData(ageable);
        }

        Map<Material, Integer> map = new HashMap<>();
        for (int i = 0; i < BukkitConverter.ITERATIONS; i++) {
            for (ItemStack itemStack : block.getDrops()) {
                map.put(itemStack.getType(), map.getOrDefault(itemStack.getType(), 0) + itemStack.getAmount());
            }
        }
        Yield[] yields = new Yield[map.size()];
        int i = 0;
        for (Map.Entry<Material, Integer> entry : map.entrySet()) {
            yields[i++] = new Yield(entry.getKey(), (float) entry.getValue() / BukkitConverter.ITERATIONS);
        }
        return yields;
    }

    private static ByteBuf getFileByteBuffer(File file, FileChannel.MapMode mode) throws IOException {
        FileInputStream fileInputStream = new FileInputStream(file);
        FileChannel fileChannel = fileInputStream.getChannel();
        MappedByteBuffer mappedByteBuffer = fileChannel.map(FileChannel.MapMode.READ_ONLY, 0, file.length());
        return Unpooled.wrappedBuffer(mappedByteBuffer);
    }

    private static World getWorld(String name) throws Exception {
        World world = Bukkit.getWorld(WORLD_NAME);
        if (world == null) {
            world = Bukkit.createWorld(new WorldCreator(WORLD_NAME)); //todo check if this actually works
            if (world == null) {
                throw new Exception("Bukkit#createWorld returned null");
            }
        }

        return world;
    }
}
