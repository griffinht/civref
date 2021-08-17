import Plant from "../realisticbiomes/Plant.js";
import Data from "../Data.js";

export default function createInputItem(plant: Plant) {
    let amount = new Data<number>(0)

    let element = document.createElement('div')
    element.style.display = 'flex'
    element.style.border = '1px solid black'
    {
        let e = document.createElement('input')
        e.setAttribute('type', 'number')
        e.addEventListener('input', () => {
            amount.update(parseInt(e.value))
        })
        element.append(e)
    }
    element.append(plant.getElement())
    {
        let e = document.createElement('div')
        e.innerText = 'output'
        amount.listen((data: number) => {
            e.innerText = 'output ' + data
        })
        element.append(e)
    }

    return element
}