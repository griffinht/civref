export default class Item {
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
