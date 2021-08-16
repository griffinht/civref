import Element from "../html/Element.js";
import {addTooltip, append, createIcon} from "../html/html.js";

const url = '/assets/items.png'
const size = 16

export default class Item implements Element {
    id: string
    name: string
    index: number

    constructor(id: string, name: string, index: number) {
        this.id = id
        this.name = name
        this.index = index
    }

    getElement(): HTMLElement {
        let element = createIcon(url, size, this.index)
        let tooltip = document.createElement('div')
        tooltip.style.background = 'gray'
        {
            let title = append('div', createIcon(url, size, this.index))
            tooltip.append(title)
            title.style.display = 'flex'
            title.style.alignItems = 'center'
            append('h4', title).innerText = this.name
            append('h5', title).innerText = '(item)'
            append('h6', tooltip).innerText = this.id
        }

        addTooltip(tooltip, element)
        return element
    }
}
