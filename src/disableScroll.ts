import { scrollbarWidth } from './scrollbarWidth';

/**
 * Disables element scrolling
 *
 * @param  {HTMLElement} element
 * @return {String}      previous style string
 */
export function disableScroll(element: HTMLElement): string {
    const style = element.style;
    const prevStyleText = style.cssText;
    const computed = window.getComputedStyle(element);
    const yOverflowed = element.clientHeight < element.scrollHeight;
    const xOverflowed = element.clientWidth < element.scrollWidth;
    const scrollBarWidth = scrollbarWidth();
    const paddingRight: string = 'paddingRight';
    const paddingBottom: string = 'paddingBottom';
    const parse = parseFloat;
    const px = 'px';

    if (yOverflowed || xOverflowed) {
        style['overflow' + (yOverflowed ? 'Y' : xOverflowed ? 'X' : '')] = 'hidden';
    }

    if (yOverflowed) {
        style[paddingRight] = (parse(computed[paddingRight]) || 0) + scrollBarWidth + px;
    }

    if(xOverflowed) {
        style[paddingBottom] = (parse(computed[paddingBottom]) || 0) + scrollBarWidth + px;
    }

    return prevStyleText;
}