import Element from "./Element.js";

export default class Flexbox implements Element {
    elements: Element[] = []

    append(element: Element): Flexbox {
        this.elements.push(element)
        return this
    }

    getElement(): HTMLElement {
        let element = document.createElement('div')
        element.style.display = 'flex'
        for (let e of this.elements) {
            element.append(e.getElement())
        }
        return element
    }
}