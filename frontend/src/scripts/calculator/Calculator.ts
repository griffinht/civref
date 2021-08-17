import InputItem from "./InputItem.js";
import Plants from "../realisticbiomes/Plants.js";

export default class Calculator {
    inputItems: InputItem[] = []
    time: number = 0
    element: HTMLElement

    constructor() {
        let element = document.createElement('div')
        {
            let header = document.createElement('header')
            {
                let e = document.createElement('h3')
                e.innerText = 'Input'
                header.append(e)
            }

            element.append(header)
        }
        {
            let section = document.createElement('section')
            element.append(new InputItem(Plants.WHEAT).element)
            element.append(section)
        }
        this.element = element
    }
}