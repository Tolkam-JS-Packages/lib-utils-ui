const DOC = document;
const HTML = DOC.documentElement;
const regex = /(auto|scroll)/;

/**
 * Gets computed style property values
 *
 * @param element
 * @param prop
 */
const style = (element: HTMLElement, prop: string) => getComputedStyle(element, null).getPropertyValue(prop);

/**
 * Tests if element has overflow css value
 *
 * @param el
 */
const hasScroll = (el: HTMLElement) => regex.test(
    style(el, "overflow") + style(el, "overflow-y") + style(el, "overflow-x")
);

/**
 * Gets closest scrolling parent
 *
 * @param el
 */
export const closestScrollingParent = (el?: HTMLElement): Document|HTMLElement|undefined => {
    return el == null || el === HTML ? DOC :
        hasScroll(el) ? el : closestScrollingParent(el.parentNode as HTMLElement || null);
};
