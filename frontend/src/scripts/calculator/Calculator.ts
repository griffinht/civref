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
            header.style.display = 'flex'
            header.style.justifyContent = 'space-between'
            {
                let e = document.createElement('h3')
                e.innerText = 'Input'
                header.append(e)
            }
            {
                let e = document.createElement('div')
                e.style.display = 'flex'
                {
                    let ee = document.createElement('h3')
                    ee.innerText = 'Time: '
                    e.append(ee)
                }
                {
                    let ee = document.createElement('input')
                    ee.setAttribute('type', 'number')
                    e.append(ee)
                }
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