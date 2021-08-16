import Yield from "../realisticbiomes/Yield.js";

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

/**
 * Add tooltip element to parent element
 */
export function addTooltip(tooltip: HTMLElement, parent: HTMLElement): void {
    tooltip.classList.add('tooltip-hover')
    tooltip.style.background = 'gray'
    parent.classList.add('tooltip')
    parent.append(tooltip)
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
        if (i > 0
            && yields[i - 1].start === yields[i].start
            && yields[i - 1].start === yields[i].end) {
            // ditto of above
            yieldElement.append('\xa0\xa0\xa0')
        } else {
            let yy: string
            if (yields[i].start === yields[i].end) {
                // start and end are the same, so only show one
                yy = '\xa0\xa0' + yields[i].start
            } else {
                yy = yields[i].start + '-' + yields[i].end
            }
            yieldElement.append(yy)
        }
        yieldElement.append(yields[i].item.getElement())
        yieldElement.append('x' + yields[i].amount)
        parent.append(yieldElement)
    }
    addTooltip(parent, element)
    return element
}