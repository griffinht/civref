package net.stzups.civref.bukkit;

import org.bukkit.Bukkit;
import org.bukkit.Material;
import org.bukkit.World;
import org.bukkit.WorldCreator;
import org.bukkit.block.Block;
import org.bukkit.block.data.Ageable;
import org.bukkit.block.data.BlockData;
import org.bukkit.inventory.ItemStack;
import org.bukkit.plugin.java.JavaPlugin;

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

    @Override
    public void onEnable() {
        World world = Bukkit.getWorld(worldName);
        if (world == null) {
            world = Bukkit.createWorld(new WorldCreator(worldName)); //todo check if this actually works
            if (world == null) {
                throw new RuntimeException("Failed to find or create world with name " + worldName);
            }
        }

        getLogger().info("Using " + world.getName());
        Block block = world.getBlockAt(0, 0, 0);

        for (Material material : materials) {
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
            getLogger().info("Done for  " + material);
            for (Map.Entry<Material, Integer> entry : map.entrySet()) {
                getLogger().info(entry.getKey() + ": " + ((double) entry.getValue() / iterations));
            }
        }

        getLogger().info("Done, shutting down");
        Bukkit.shutdown();
    }
}
