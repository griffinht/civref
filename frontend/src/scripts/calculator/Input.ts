import InputItem from "./InputItem.js";

export default class Input {
    inputItems: Set<InputItem> = new Set()
    element: HTMLElement

    constructor(element: HTMLElement) {
        this.element = element
    }

    addInput(inputItem: InputItem) {
        this.inputItems.add(inputItem)
        this.element.append(inputItem.getElement())
    }

    removeInput(inputItem: InputItem) {
        this.inputItems.delete(inputItem)
    }
}