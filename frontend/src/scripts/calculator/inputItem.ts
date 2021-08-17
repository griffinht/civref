import Plant from "../realisticbiomes/Plant.js";
import Data from "../Data.js";

export default function createInputItem(plant: Plant, time: Data<number>) {
    let amount = new Data<number>(0)

    let element = document.createElement('div')
    element.style.display = 'flex'
    element.style.border = '1px solid black'
    {
        let e = document.createElement('div')
        e.style.display = 'flex'
        {
            let ee = document.createElement('h3')
            ee.innerText = 'Amount: '
            e.append(ee)
        }
        {
            let ee = document.createElement('input')
            ee.setAttribute('type', 'number')
            ee.addEventListener('input', () => {
                amount.update(parseInt(ee.value))
            })
            e.append(ee)
        }
        element.append(e)
    }
    element.append(plant.getElement())
    {
        let e = document.createElement('div')
        e.style.display = 'flex'
        {
            let ee = document.createElement('h3')
            ee.innerText = 'Output: '
            e.append(ee)
        }
        {
            let ee = document.createElement('div')
            ee.style.display = 'flex'
            ee.style.flexDirection = 'vertical'
            for (let htmlElement of plant.getOutput(time, amount)) {
                ee.append(htmlElement)
            }
            e.append(ee)
        }
        element.append(e)
    }

    return element
}