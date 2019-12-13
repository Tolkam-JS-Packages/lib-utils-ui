const DOC = document;

let width: number;

/**
 * Gets client scrollbar width
 *
 * @param {boolean} recalculate
 * @returns {number}
 */
export function scrollbarWidth(recalculate?: boolean) {
    if (!width || recalculate) {
        const scrollDiv = DOC.createElement('div');
        const body = DOC.body;

        scrollDiv.style.position = 'fixed';
        scrollDiv.style.top = '-9999px';
        scrollDiv.style.width = '50px';
        scrollDiv.style.height = '50px';
        scrollDiv.style.overflow = 'scroll';

        body.appendChild(scrollDiv);
        width = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        body.removeChild(scrollDiv);
    }

    return width;
}