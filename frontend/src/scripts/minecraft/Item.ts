import Element from "../html/Element.js";
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
        element.innerText = 'Item: ' + this.name
        return element
    }
}
