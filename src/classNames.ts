/**
 * TS version of Luke Edwards clsx
 *
 * @see https://github.com/lukeed/clsx
 * @param value
 */
function toVal(value: any) {
    let k, y, str = '';
    if (value) {
        if (typeof value === 'object') {
            if (Array.isArray(value)) {
                for (k = 0; k < value.length; k++) {
                    if (value[k] && (y = toVal(value[k]))) {
                        str && (str += ' ');
                        str += y;
                    }
                }
            } else {
                for (k in value) {
                    if (value[k] && (y = toVal(k))) {
                        str && (str += ' ');
                        str += y;
                    }
                }
            }
        } else if (typeof value !== 'boolean' && !value.call) {
            str && (str += ' ');
            str += value;
        }
    }
    return str;
}

export function classNames(...args: any) {
    let i = 0, x, str = '';

    while (i < args.length) {
        if ((x = toVal(args[i++]))) {
            str && (str += ' ');
            str += x
        }
    }

    return str;
}
