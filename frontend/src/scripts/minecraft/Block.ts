export default class Block {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    getElement(): HTMLElement {
        let element = document.createElement('div')
        element.innerText = 'Block: ' + this.name
        return element
    }
}