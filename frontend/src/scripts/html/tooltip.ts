/**
 * Add tooltip element to parent element
 */
export function addTooltip(tooltip: HTMLElement, parent: HTMLElement): void {
    tooltip.classList.add('tooltip-hover')
    tooltip.style.background = 'gray'
    parent.classList.add('tooltip')
    parent.append(tooltip)
}