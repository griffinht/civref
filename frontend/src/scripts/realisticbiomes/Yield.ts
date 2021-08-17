import Item from "../minecraft/Item.js";

export default class Yield {
    item: Item
    amount: number

    constructor(item: Item, amount: number) {
        this.item = item
        this.amount = amount
    }
}
