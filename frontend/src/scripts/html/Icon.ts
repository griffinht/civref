import createElement from "./HtmlElement.js";
import Element from "./Element.js";

export default class Icon implements Element {
    url: string
    size: number
    index: number

    constructor(url: string, size: number, index: number) {
        this.url = url
        this.size = size
        this.index = index
    }

    getElement(): HTMLElement {
        return createElement('div', (e) => {
            e.style.background = 'url(\'' + this.url + '\') ' + this.size * this.index + 'px ' + 0 + 'px'
            e.style.height = this.size + 'px'
            e.style.width = this.size + 'px'
        })
    }
}