import Item from "./Item.js";
import Element from "../html/Element.js";

export default class ItemStack implements Element {
    item: Item
    amount: number

    constructor(item: Item, amount: number) {
        this.item = item
        this.amount = amount
    }

    getElement(): HTMLElement {
        let element = this.item.getElement()
        element.append('x' + this.amount)
        return element
    }
}