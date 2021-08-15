import Element from "../html/Element.js";

export default class Item implements Element {
    id: string
    name: string

    constructor(id: string, name: string) {
        this.id = id
        this.name = name
    }

    getElement(): HTMLElement {
        let element = document.createElement('div')
        element.innerText = 'Item: ' + this.name
        return element
    }
}
