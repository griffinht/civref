import Yield from "../realisticbiomes/Yield.js";
import Item from "../minecraft/Item.js";
import Data from "../Data.js";

export function append(tag: string, parent: HTMLElement): HTMLElement {
    let child = document.createElement(tag)
    parent.append(child)
    return child
}

export function createIcon(url: string, size: number, index: number): HTMLElement {
    let element = document.createElement('div')
    element.style.background = 'url(\'' + url + '\') ' + size * index + 'px ' + 0 + 'px'
    element.style.height = size + 'px'
    element.style.width = size + 'px'
    return element
}

export function createInnerText(tag: string, text: string): HTMLElement {
    let element = document.createElement(tag)
    element.innerText = text
    return element
}

/**
 * Add child element to parent element
 */
export function appendTooltip(child: HTMLElement, parent: HTMLElement) {
    child.classList.add('tooltip-hover')
    child.style.background = 'gray'
    parent.classList.add('tooltip')
    parent.append(child)
}

export function createYields(yields: Yield[]): HTMLElement {
    let element = document.createElement('div')
    element.style.border = '1px solid black'

    let title = document.createElement('h3')
    title.innerText = 'yield'
    element.append(title)

    let parent = document.createElement('div')
    parent.style.border = '1px solid black'
    for (let i = 0; i < yields.length; i++) {
        let yieldElement = document.createElement('div')
        yieldElement.style.display = 'flex'
        yieldElement.append(yields[i].item.getElement())
        yieldElement.append('x' + yields[i].amount)
        parent.append(yieldElement)
    }
    appendTooltip(parent, element)
    return element
}

export function createItemStack(item: Item, amount: Data<number>): HTMLElement {
    let element = item.getElement()
    amount.listen((amount) => {
        element.innerText = 'x' + amount
    })
    element.innerText = 'x' + amount
    return element
}

export function createItemStacks(itemStacks: HTMLElement[]): HTMLElement {
    let element = document.createElement('div')
    element.style.border = '1px solid black'

    element.style.display = 'flex'
    for (let itemStack of itemStacks) {
        element.append(itemStack)
    }

    return element
}