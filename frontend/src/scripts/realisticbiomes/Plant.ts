import Item from "../minecraft/Item.js";
import Block from "../minecraft/Block.js";
import Element from "../html/Element.js";
import Yield from "./Yield.js";
import {createYields} from "../html/html.js";

export default class Plant implements Element {
    name: string
    /**
     * item used to plant this plant
     */
    seed: Item
    /**
     * block placed by the seed that grows
     */
    crop: Block
    /**
     * item dropped by the crop, dependent on growth rate
     */
    yields: Yield[]
    persistentGrowthPeriod: number

    constructor(name: string, seed: Item, crop: Block, yields: Yield[], persistentGrowthPeriod: number) {
        this.name = name
        this.seed = seed
        this.crop = crop
        this.yields = yields
        this.persistentGrowthPeriod = persistentGrowthPeriod
    }

    getElement(): HTMLElement {
        let plant = document.createElement('div')
        {
            plant.style.border = '1px solid black'
            plant.style.margin = '1px'

            {
                let e = document.createElement('h4')
                {
                    e.innerText = this.name + ' (Plant)'
                }
                plant.append(e)
            }
            {
                let e = document.createElement('div')
                {
                    e.style.display = 'flex'
                    e.append('Seed: ')
                    e.append(this.seed.getElement())
                }
                plant.append(e)
            }

            plant.append(this.crop.getElement())
            plant.append(createYields(this.yields))
            {
                let e = document.createElement('div')
                {
                    e.innerText = 'Persistent growth: ' + this.persistentGrowthPeriod
                }
                plant.append(e)
            }
        }

        return plant
    }
}