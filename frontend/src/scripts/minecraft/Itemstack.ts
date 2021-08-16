import Item from "./Item.js";

export default class Itemstack {
    item: Item
    amount: number

    constructor(item: Item, amount: number) {
        this.item = item
        this.amount = amount
    }
}