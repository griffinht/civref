import Element from "../html/Element.js";
import Icon from "../html/Icon.js";
import Tooltip from "../html/Tooltip.js";
import HtmlElement from "../html/HtmlElement.js";

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
        title.append(new HtmlElement('h4', this.name, ).getElement())
        title.append(new HtmlElement('h5', '(item)').getElement())
        tooltip.append(title)

        tooltip.append(new HtmlElement('h6', this.id).getElement())
        new Tooltip(tooltip).attach(element)
        return element
    }
}
