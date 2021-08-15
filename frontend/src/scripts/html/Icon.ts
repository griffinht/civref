import Element from "./Element.js";

export default class Icon implements Element {
    url: string
    size: number
    x: number
    y: number

    constructor(url: string, size: number, index: number) {
        this.url = url
        this.size = size
        this.x = size * index
        this.y = 0
    }

    getElement(): HTMLElement {
        let element = document.createElement('div')
        element.style.background = 'url(\'' + this.url + '\') ' + this.x + 'px ' + this.y + 'px'
        element.style.height = this.size + 'px'
        element.style.width = this.size + 'px'
        return element
    }
}