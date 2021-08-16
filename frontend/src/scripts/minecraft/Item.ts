import Element from "../html/Element.js";
import {appendTooltip, append, createIcon, createInnerText} from "../html/html.js";

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
        let icon = createIcon(url, size, this.index)
        {
            let tooltip = document.createElement('div')
            {
                tooltip.style.background = 'gray'
            }
            appendTooltip(tooltip, icon)

            let title = document.createElement('div')
            {
                title.style.display = 'flex'
                title.style.alignItems = 'center'
                title.append(createIcon(url, size, this.index))
                title.append(createInnerText('h4', this.name))
                title.append(createInnerText('h5', '(item)'))
            }

            tooltip.append(title)
            tooltip.append(createInnerText('h6', this.id))
        }


        return icon
    }
}
