package net.stzups.civref.bukkit;

import org.bukkit.World;
import org.bukkit.block.Block;
import org.bukkit.inventory.ItemStack;
import org.bukkit.plugin.java.JavaPlugin;

public class BukkitConverter extends JavaPlugin {
    @Override
    public void onEnable() {
        World world = org.bukkit.Bukkit.getWorld("world");
        if (world == null) {
            getLogger().warning("World is null");
            return;
        }

        getLogger().info(world.toString());
        Block block = world.getBlockAt(255, 69, 78);

        for (int i = 0; i < 100; i++) {
            for (ItemStack itemStack : block.getDrops()) {
                getLogger().info(itemStack.toString());
            }
            getLogger().info("done");
        }
    }
}
