import Element from "../html/Element.js";
import {addTooltip} from "../html/tooltip.js";
import createElement from "../html/HtmlElement.js";
import createIcon from "../html/Icon.js";
import Icon from "../html/Icon.js";

const url = '/assets/items.png'
const size = 16

export default class Item implements Element {
    id: string
    name: string
    icon: Icon

    constructor(id: string, name: string, index: number) {
        this.id = id
        this.name = name
        this.icon = new Icon(url, size, index)
    }

    getElement(): HTMLElement {
        let element = this.icon.getElement()
        let tooltip = document.createElement('div')

        let title = document.createElement('div')
        title.style.display = 'flex'
        title.style.alignItems = 'center'
        title.append(this.icon.getElement())
        title.append(createElement('h4', (element) => element.innerText = this.name))
        title.append(createElement('h5', (element) => element.innerText = '(item)'))
        tooltip.append(title)

        tooltip.append(createElement('h6', (element) => element.innerText = this.id))
        tooltip.style.background = 'gray'
        addTooltip(tooltip, element)
        return element
    }
}
