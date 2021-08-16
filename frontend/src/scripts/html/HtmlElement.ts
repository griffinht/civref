export default function createElement(tag: string, constructor: (element: HTMLElement) => void): HTMLElement {
    let element = document.createElement('tag')
    constructor(element)
    return element
}