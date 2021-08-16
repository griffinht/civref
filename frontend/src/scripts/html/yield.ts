import Yield from "../realisticbiomes/Yield.js";
import {addTooltip} from "./tooltip.js";
import createElement from "./HtmlElement.js";

export default function createYields(yields: Yield[]): HTMLElement {
    return createElement('div', (e) => {
        e.style.border = '1px solid black'
        let title = document.createElement('h3')
        title.innerText = 'yield'
        e.append(title)
        let parent = document.createElement('div')
        parent.style.border = '1px solid black'
        for (let i = 0; i < yields.length; i++) {
            let yieldElement = document.createElement('div')
            yieldElement.style.display = 'flex'
            if (i > 0
                && yields[i - 1].start === yields[i].start
                && yields[i - 1].start === yields[i].end) {
                // ditto of above
                yieldElement.append('\xa0\xa0\xa0')
            } else {
                let yy: string
                if (yields[i].start === yields[i].end) {
                    // start and end are the same, so only show one
                    yy = '\xa0\xa0' + yields[i].start
                } else {
                    yy = yields[i].start + '-' + yields[i].end
                }
                yieldElement.append(yy)
            }
            yieldElement.append(yields[i].item.getElement())
            yieldElement.append('x' + yields[i].amount)
            parent.append(yieldElement)
        }
        addTooltip(parent, e)
    })
}