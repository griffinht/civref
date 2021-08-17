import Item from "../minecraft/Item.js";

export default class Yields {
    yields: Yield[]

    constructor(yields: Yield[]) {
        this.yields = yields
    }
}

export class Yield {
    item: Item
    amount: number

    constructor(item: Item, amount: number) {
        this.item = item
        this.amount = amount
    }
}
