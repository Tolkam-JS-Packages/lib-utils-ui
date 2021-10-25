/**
 * Cross-browser CSS.supports() helper
 *
 * Old spec function name (window.supportsCSS) and syntax (Opera 12.1) treated as not supported
 *
 * @param {string} args
 * @return {any}
 */
export function supports(...args: string[]) {
    const win = window as any;
    const supportsFn = win.CSS && win.CSS.supports;
    return typeof supportsFn === 'function' ? supportsFn(...args) : false;
}
