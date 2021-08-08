import Plant from "./realisticbiomes/Plant.js";
import Items from "./minecraft/Items.js";
import Blocks from "./minecraft/Blocks.js";
import Yield from "./realisticbiomes/Yield.js";

let output: HTMLDivElement = document.getElementById('plants') as HTMLDivElement



let wheat = new Plant(
        Items.WHEAT_SEEDS,
        Blocks.WHEAT,
        [
            new Yield(0, 6, Items.WHEAT_SEEDS, 1),
            new Yield(7, 7, Items.WHEAT_SEEDS, 2.535),//todo find real average https://minecraft.fandom.com/wiki/Wheat_Seeds#Breaking
            new Yield(7, 7, Items.WHEAT, 1),
        ],
        3
    )

output.append(wheat.getElement())