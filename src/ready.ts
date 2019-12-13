/**
 * Runs a callback when document is ready
 *
 * @param {() => any} callback
 */
export function ready(callback: () => any) {
    document.addEventListener('DOMContentLoaded', callback);
}