import Plant from "./Plant.js";
import Items from "../minecraft/Items.js";
import Blocks from "../minecraft/Blocks.js";
import Yield from "./Yield.js";

const Plants = {
    WHEAT: new Plant(
        'Wheat',
        Items.WHEAT_SEEDS,
        Blocks.WHEAT,
        [
            new Yield(0, 6, Items.WHEAT_SEEDS, 1),
            new Yield(7, 7, Items.WHEAT_SEEDS, 2.535),//todo find real average https://minecraft.fandom.com/wiki/Wheat_Seeds#Breaking
            new Yield(7, 7, Items.WHEAT, 1),
        ],
        3
    ),
    POTATO: new Plant(
        'Potato',
        Items.POTATO,
        Blocks.POTATOES,
        [
            new Yield(0, 7, Items.POTATO, 1),
            new Yield(8, 8, Items.POTATO, 3)
        ],
        3
    )
}

export default Plants