export const maybeMobile = () => {
    const win = window;
    const n = win.navigator as any || ({} as any);

    let maybeMobile;

    if ('maxTouchPoints' in n) {
        maybeMobile = n.maxTouchPoints > 0;
    } else {
        const mQ = win.matchMedia && win.matchMedia("(pointer:coarse)");
        if (mQ && mQ.media === "(pointer:coarse)") {
            maybeMobile = mQ.matches;
        } else {
            // Only as a last resort, fall back to user agent sniffing
            const UA = n.userAgent;
            maybeMobile = (
                /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
                /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
            );
        }
    }

    return maybeMobile;
}
