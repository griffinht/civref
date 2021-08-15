import Plant from "./realisticbiomes/Plant.js";
import Items from "./minecraft/Items.js";
import Blocks from "./minecraft/Blocks.js";
import Yield from "./realisticbiomes/Yield.js";
import Flexbox from "./html/Flexbox.js";

let output = document.getElementById('plants') as HTMLElement


let plants: Plant[] = [
    new Plant(
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
    new Plant(
        'Potato',
        Items.POTATO,
        Blocks.POTATOES,
        [
            new Yield(0, 7, Items.POTATO, 1),
            new Yield(8, 8, Items.POTATO, 3)
        ],
        3
    ),
]

let flexbox = new Flexbox()
for (let plant of plants) {
    flexbox.append(plant)
}
output.append(flexbox.getElement())