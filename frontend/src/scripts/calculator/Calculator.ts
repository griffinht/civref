import Plant from "../realisticbiomes/Plant.js";
import Element from "../html/Element.js";

export default class Calculator implements Element {
    plants: Plant[] = []
    time: number = 0

    getElement(): HTMLElement {
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
            for (let plant of this.plants) {
                let row = document.createElement('div')
                row.style.display = 'flex'
                row.style.border = '1px solid black'
                {
                    let e = document.createElement('h3')
                    e.innerText = 'input'
                    row.append(e)
                }
                row.append(plant.getElement())
                section.append(row)
            }
            element.append(section)
        }

        return element
    }

    addInput(plant: Plant) {
        this.plants.push(plant)
    }
}