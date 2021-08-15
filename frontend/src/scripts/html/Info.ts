export default class Info {
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