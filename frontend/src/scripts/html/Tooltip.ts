import Element from "./Element.js";

export default class Tooltip implements Element {
    element: Element

    constructor(element: Element) {
        this.element = element
    }

    getElement(): HTMLElement {
        let element = this.element.getElement();
        element.classList.add('tooltip-hover')
        element.style.background = 'gray'
        return element
    }

    attach(element: HTMLElement) {
        element.classList.add('tooltip')
        element.append(this.getElement())
    }
}