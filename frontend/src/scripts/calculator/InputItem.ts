import Plant from "../realisticbiomes/Plant.js";

export default class InputItem {
    amount = 0
    growthState =  0
    plant: Plant
    output: HTMLElement
    element: HTMLElement

    constructor(plant: Plant) {
        this.plant = plant

        let element = document.createElement('div')
        element.style.display = 'flex'
        element.style.border = '1px solid black'
        {
            let e = document.createElement('input')
            e.setAttribute('type', 'number')
            const update = () => {
                let amount = parseInt(e.value)
                if (this.amount === amount) return

                this.amount = amount
                this.update()
            }
            e.addEventListener('change', update)
            e.addEventListener('keypress', update)
            element.append(e)
        }
        element.append(this.plant.getElement())
        {
            let e = document.createElement('div')
            e.innerText = 'output'
            element.append(e)
            this.output = e
        }

        this.element = element
    }

    update() {
        // @ts-ignore
        this.output.replaceChildren()
        for (let itemstack of this.plant.getOutput(this.amount, this.growthState)) {
            this.output.append(itemstack.getElement())
        }
    }
}