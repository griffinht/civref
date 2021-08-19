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

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.HashMap;
import java.util.Map;

public class BukkitConverter extends JavaPlugin {
    private String worldName = "world";
    private Material[] materials = new Material[] {
            Material.WHEAT,
            Material.POTATOES,
            Material.SUGAR_CANE,
            Material.BEETROOTS,
            Material.MELON
        };
    private int iterations = 1000;
    private OutputStream outputStream;

    @Override
    public void onEnable() {
        try {
            outputStream = new FileOutputStream("out");
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        World world = Bukkit.getWorld(worldName);
        if (world == null) {
            world = Bukkit.createWorld(new WorldCreator(worldName)); //todo check if this actually works
            if (world == null) {
                throw new RuntimeException("Failed to find or create world with name " + worldName);
            }
        }

        getLogger().info("Using " + world.getName());
        Block block = world.getBlockAt(0, 0, 0);

        ByteBuf byteBuf = Unpooled.buffer();
        for (Material material : materials) {
            NettyUtils.writeString8(byteBuf, material.getKey().getKey());
            NettyUtils.writeArray8(byteBuf, getYields(block, iterations, material));
        }

        try {
            byteBuf.readBytes(outputStream, byteBuf.readableBytes());
        } catch (IOException e) {
            e.printStackTrace();
        }

        getLogger().info("Done, shutting down");
        Bukkit.shutdown();
    }

    /**
     * Calculates yields for given material
     *
     * @param block any existing block that will be used for simulation
     * @param iterations how many times to drop each item
     * @param material material to test for
     */
    private static Yield[] getYields(Block block, int iterations, Material material) {
        block.setType(material);
        // make crop fully grown
        BlockData data = block.getBlockData();
        if (data instanceof Ageable ageable) {
            ageable.setAge(ageable.getMaximumAge());
            block.setBlockData(ageable);
        }

        Map<Material, Integer> map = new HashMap<>();
        for (int i = 0; i < iterations; i++) {
            for (ItemStack itemStack : block.getDrops()) {
                map.put(itemStack.getType(), map.getOrDefault(itemStack.getType(), 0) + itemStack.getAmount());
            }
        }
        Yield[] yields = new Yield[map.size()];
        int i = 0;
        for (Map.Entry<Material, Integer> entry : map.entrySet()) {
            yields[i++] = new Yield(entry.getKey(), (float) entry.getValue() / iterations);
        }
        return yields;
    }
}
