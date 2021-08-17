import Item from "./Item.js";
import Element from "../html/Element.js";
import {appendTooltip} from "../html/html.js";

export default class ItemStack implements Element {
    item: Item
    amount: number

    constructor(item: Item, amount: number) {
        this.item = item
        this.amount = amount
    }

    getElement(): HTMLElement {
        let element = document.createElement('div')
        element.append('' + this.amount)
        appendTooltip(this.item.getElement(), element)
        return element
    }
}