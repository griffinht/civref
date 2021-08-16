import Element from "../html/Element.js";
import {addTooltip, createIcon} from "../html/html.js";

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
            let title = document.createElement('div')
            tooltip.append(title)
            title.style.display = 'flex'
            title.style.alignItems = 'center'
            title.append(createIcon(url, size, this.index))
            {
                let e = document.createElement('h4')
                e.innerText = this.name
                title.append(e)
            }
            {
                let e = document.createElement('h5')
                e.innerText = '(item)'
                title.append(e)
            }
            {
                let e = document.createElement('h6')
                e.innerText = this.id
                tooltip.append(e)
            }
        }


        addTooltip(tooltip, element)
        return element
    }
}
