const targetText = "asfjlapa";
const replacementText = "tetoshi";

function replaceText() {
    document.querySelectorAll("*").forEach(el => {
        if (el.childNodes.length) {
            el.childNodes.forEach(node => {
                if (node.nodeType === 3 && node.nodeValue.includes(targetText)) {
                    node.nodeValue = node.nodeValue.replace(targetText, replacementText);
                }
            });
        }
    });
}

setInterval(replaceText, 20);
