import Data from "../Data.js";
import Plants from "../realisticbiomes/Plants.js";
import createInputItem from "./inputItem.js";

export default function createCalculator() {
    let time = new Data<number>(0)

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
                e.addEventListener('input', () => time.update(parseInt(ee.value)))
                e.append(ee)
            }
            header.append(e)
        }

        element.append(header)
    }
    {
        let section = document.createElement('section')
        section.append(createInputItem(Plants.WHEAT, time))
        element.append(section)
    }

    return element
}