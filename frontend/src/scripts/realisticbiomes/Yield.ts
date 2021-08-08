import Item from "../minecraft/Item";

export default class Yield {
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
}
