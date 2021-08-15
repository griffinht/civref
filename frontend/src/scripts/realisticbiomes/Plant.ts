import Item from "../minecraft/Item.js";
import Block from "../minecraft/Block.js";
import Yield from "./Yield.js";
import Element from "../html/Element.js";
import HtmlElement from "../html/HtmlElement.js";
import Yields from "../html/Yields.js";

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
    yields: Yields
    persistentGrowthPeriod: number

    constructor(name: string, seed: Item, crop: Block, yields: Yields, persistentGrowthPeriod: number) {
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
        element.append(new HtmlElement('h4', this.name + ' (Plant)').getElement())
        element.append(this.seed.getElement())
        element.append(this.crop.getElement())
        element.append(this.yields.getElement())
        //new Tooltip(list).attach(element)
        element.append(new HtmlElement('h4', 'Persistent growth: ' + this.persistentGrowthPeriod).getElement())
        return element
    }
}