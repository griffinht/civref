import Element from "./Element.js";
import Yield from "../realisticbiomes/Yield.js";

export default class Yields implements Element {
    yields: Yield[]

    constructor(yields: Yield[]) {
        this.yields = yields
    }

    getElement(): HTMLElement {
        let element = document.createElement('div')
        for (let i = 0; i < this.yields.length; i++) {
            let e = document.createElement('div')
            e.style.display = 'flex'
            if (i > 0
                && this.yields[i - 1].start === this.yields[i].start
                && this.yields[i - 1].start === this.yields[i].end) {
                // ditto of above
                e.append('\xa0\xa0\xa0')
            } else {
                let yy: string
                if (this.yields[i].start === this.yields[i].end) {
                    // start and end are the same, so only show one
                    yy = '\xa0\xa0' + this.yields[i].start
                } else {
                    yy = this.yields[i].start + '-' + this.yields[i].end
                }
                e.append(yy)
            }
            e.append(this.yields[i].item.getElement())
            e.append('x' + this.yields[i].amount)
            element.append(e)
        }
        return element
    }
}