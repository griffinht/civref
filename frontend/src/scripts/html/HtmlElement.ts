import Element from "./Element.js";

export default class HtmlElement implements Element {
    tag: string
    innerText?: string
    class?: string

    constructor(tag: string, innerText?: string, c?: string) {
        this.tag = tag
        this.innerText = innerText
        this.class = c
    }

    getElement(): HTMLElement {
        let element = document.createElement(this.tag)
        if (this.innerText !== undefined) element.innerText = this.innerText
        if (this.class !== undefined) element.classList.add(this.class)
        return element
    }
}