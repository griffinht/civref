import Item from "../minecraft/Item";
import Block from "../minecraft/Block";
import Yield from "./Yield";

export default class Plant {
    /**
     * item used to plant this plant
     */
    seed: Item
    /**
     * block placed by the seed that grows
     */
    crop: Block
    /**
     * item dropped by the crop, dependent on growth rate
     */
    yields: Yield[]
    persistentGrowthPeriod: number

    constructor(seed: Item, crop: Block, yields: Yield[], persistentGrowthPeriod: number) {
        this.seed = seed
        this.crop = crop
        this.yields = yields
        this.persistentGrowthPeriod = persistentGrowthPeriod
    }
}