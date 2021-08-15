export default class Flexbox {
    element = document.createElement('div')
    constructor() {
        this.element.style.display = 'flex'
    }

    append(element: HTMLElement): Flexbox {
        this.element.append(element)
        return this
    }

    getElement(): HTMLElement {
        return this.element
    }
}