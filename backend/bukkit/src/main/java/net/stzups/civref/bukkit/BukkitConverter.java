package net.stzups.civref.bukkit;

import org.bukkit.Bukkit;
import org.bukkit.Material;
import org.bukkit.World;
import org.bukkit.WorldCreator;
import org.bukkit.block.Block;
import org.bukkit.inventory.ItemStack;
import org.bukkit.plugin.java.JavaPlugin;

public class BukkitConverter extends JavaPlugin {
    private String worldName = "world";
    private Material[] materials = new Material[] {
            Material.WHEAT,
            Material.POTATO,
            Material.PODZOL,
            Material.ACACIA_BOAT,
        };
    private int iterations = 100;

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

            for (int i = 0; i < iterations; i++) {
                for (ItemStack itemStack : block.getDrops()) {
                    getLogger().info(itemStack.toString());
                }
                getLogger().info("done");
            }
        }
    }
}
