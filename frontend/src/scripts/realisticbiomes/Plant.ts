import Item from "../minecraft/Item.js";
import Block from "../minecraft/Block.js";
import Yield from "./Yield.js";
import Info from "../html/Info.js";
import Element from "../html/Element.js";

export default class Plant implements Element {
    name: string
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

    constructor(name: string, seed: Item, crop: Block, yields: Yield[], persistentGrowthPeriod: number) {
        this.name = name
        this.seed = seed
        this.crop = crop
        this.yields = yields
        this.persistentGrowthPeriod = persistentGrowthPeriod
    }

    getElement(): HTMLElement {
        let element = document.createElement('div')
        element.style.border = '1px solid black'
        element.style.margin = '1px'
        element.append(new Info(this.name + ' (Plant)').getElement())
        element.append(this.seed.getElement())
        element.append(this.crop.getElement())
        let list = document.createElement('div')
        for (let yields of this.yields) {
            list.append(yields.getElement())
        }
        element.append(list)
        element.append(new Info('Persistent growth: ' + this.persistentGrowthPeriod).getElement())
        return element
    }
}