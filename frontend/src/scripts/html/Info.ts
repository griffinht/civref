import Element from "./Element.js";

export default class Info implements Element {
    string: string

    constructor(string: string) {
        this.string = string
    }

    getElement(): HTMLElement {
        let element = document.createElement('div')
        element.innerText = this.string
        return element
    }
}