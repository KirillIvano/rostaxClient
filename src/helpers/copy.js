export const copyElementContent = el => {
    let rng, sel;
    if (document.createRange) {
        rng = document.createRange();
        rng.selectNode(el);
        sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(rng);
    } else {
        rng = document.body.createTextRange();
        rng.moveToElementText(el);
        rng.select();
    }
    document.execCommand('copy');
    sel.removeAllRanges();
};
