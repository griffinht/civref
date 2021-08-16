import Element from "../html/Element.js";
import {addTooltip, createElement, createIcon} from "../html/html.js";

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

        let title = document.createElement('div')
        title.style.display = 'flex'
        title.style.alignItems = 'center'
        title.append(createIcon(url, size, this.index))
        title.append(createElement('h4', (element) => element.innerText = this.name))
        title.append(createElement('h5', (element) => element.innerText = '(item)'))
        tooltip.append(title)

        tooltip.append(createElement('h6', (element) => element.innerText = this.id))
        tooltip.style.background = 'gray'
        addTooltip(tooltip, element)
        return element
    }
}
