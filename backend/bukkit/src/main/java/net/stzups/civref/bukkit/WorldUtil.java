package net.stzups.civref.bukkit;

import org.bukkit.Bukkit;
import org.bukkit.World;
import org.bukkit.WorldCreator;

public class WorldUtil {
    /**
     * Get existing world by name or create a temporary new one
     * @param name name of world
     * @return existing or new world
     */
    public static World getWorld(String name) throws Exception {
        World world = Bukkit.getWorld(name);
        if (world == null) {
            world = Bukkit.createWorld(new WorldCreator(name)); //todo check if this actually works
            if (world == null) {
                throw new Exception("Bukkit#createWorld returned null");
            }
        }

        return world;
    }
}
