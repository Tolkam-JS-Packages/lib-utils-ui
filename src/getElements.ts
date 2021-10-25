/**
 * Resolves input to array of HTML elements
 *
 * @param input
 * @param parent
 * @returns {HTMLElement[]}
 */
export function getElements(input: any, parent: Document|HTMLElement = document): HTMLElement[] {
    let found: HTMLElement[] = [];

    // string selectors
    if(typeof input === 'string') {
        input = parent.querySelectorAll(input);
    }

    // NodeList (result of querySelector())
    if(input instanceof NodeList) {
        input = Array.from(input);
    }

    // single HTMLElement
    if(input instanceof HTMLElement) {
        input = [input];
    }

    // array of HTMLElements
    if(Array.isArray(input)) {
        input.forEach((el) => {
            if(el instanceof HTMLElement) {
                found.push(el);
            }
        });
    }

    return found;
}

/**
 * Resolves input to HTML element
 *
 * @param input
 * @param parent
 * @returns {HTMLElement|undefined}
 */
export function getElement(input: any, parent: Document|HTMLElement = document): HTMLElement|undefined {
    let found: HTMLElement|null = null;

    if(input instanceof HTMLElement) {
        found = input;
    }

    if(typeof input === 'string') {
        found = parent.querySelector(input);
    }

    // cast null as undefined
    return found || void(0);
}
