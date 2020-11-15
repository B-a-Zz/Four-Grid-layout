function nodeSelector(node) {
    document.querySelector(node);
    console.log(node);
}

function nodeSelectorAll(nodes) {
    return document.querySelectorAll(nodes);

}

nodeSelector();
let dom = nodeSelectorAll('.card');
console.log(dom);