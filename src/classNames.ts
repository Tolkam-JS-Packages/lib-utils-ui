const hasOwn = {}.hasOwnProperty;

/**
 * TS version of jed watson's classnames
 *
 * @see http://jedwatson.github.io/classnames
 */
export function classNames(...args: any[]) {
    const classes: any = [];

    for (let i = 0; i < arguments.length; i++) {
        const arg = arguments[i];

        if (!arg) {
            continue;
        }

        const argType = typeof arg;

        if (argType === 'string' || argType === 'number') {
            classes.push(arg);
        } else if (Array.isArray(arg)) {
            classes.push(classNames.apply(null, arg));
        } else if (argType === 'object') {
            for (let key in arg) {
                if (hasOwn.call(arg, key) && arg[key]) {
                    classes.push(key);
                }
            }
        }
    }

    return classes.join(' ');
}