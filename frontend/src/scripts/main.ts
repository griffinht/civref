import Plant from "./realisticbiomes/Plant";
import Items from "./minecraft/Items";
import Blocks from "./minecraft/Blocks";
import Yield from "./realisticbiomes/Yield";

let input: HTMLInputElement = document.getElementById('input') as HTMLInputElement
let output: HTMLDivElement = document.getElementById('output') as HTMLDivElement

input.addEventListener('change', () => {
    console.log(input)
})

let wheat = new Plant(
        Items.WHEAT_SEEDS,
        Blocks.WHEAT,
        [
            new Yield(0, 6, Items.WHEAT_SEEDS, 1),
            new Yield(7, 7, Items.WHEAT_SEEDS, 2.5),//todo find real average https://minecraft.fandom.com/wiki/Wheat_Seeds#Breaking
            new Yield(7, 7, Items.WHEAT, 1),
        ],
        3
    )

