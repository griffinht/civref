import Item from "../minecraft/Item.js";
import Info from "../html/Info.js";
import Element from "../html/Element.js";

export default class Yield implements Element {
    start: number
    end: number
    item: Item
    amount: number

    constructor(start: number, end: number, item: Item, amount: number) {
        this.start = start
        this.end = end
        this.item = item
        this.amount = amount
    }

    getElement(): HTMLElement {
        let element = document.createElement('div')
        element.append(new Info('Yield: ' + this.start + '-' + this.end).getElement())
        element.append(this.item.getElement())
        element.append(new Info('x' + this.amount).getElement())
        return element
    }
}
