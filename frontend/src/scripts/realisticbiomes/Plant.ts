import Item from "../minecraft/Item.js";
import Block from "../minecraft/Block.js";
import Element from "../html/Element.js";
import createElement from "../html/HtmlElement.js";
import Yield from "./Yield.js";
import createYields from "../html/yield.js";

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
        element.append(createElement('h4', (e) => e.innerText = this.name + ' (Plant)'))
        let seed = document.createElement('div')
        seed.style.display = 'flex'
        seed.append('Seed: ')
        seed.append(this.seed.getElement())
        element.append(seed)
        element.append(this.crop.getElement())
        element.append(createYields(this.yields))
        //new Tooltip(list).attach(element)
        element.append(createElement('h4', (e) => e.innerText = 'Persistent growth: ' + this.persistentGrowthPeriod))
        return element
    }
}