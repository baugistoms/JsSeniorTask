class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree extends Node {
    constructTree(array) {
        let currentElement;
        let nextElement;
        let node = new Node();
        for (let i = 0; i < array.length; i++) {
            currentElement = array[i];
            nextElement = array[i + 1];
            const remainingElements = array.slice(1);
            node.data = currentElement;
            if (typeof nextElement !== 'undefined' && nextElement < node.data) {
                node.left = this.constructTree(remainingElements);
            } else if (typeof nextElement !== 'undefined' && nextElement > node.data) {
                node.right = this.constructTree(remainingElements);
            }
            return node;
        }
    }

}

const array = [9, 5, 1, 7, 20, 50];
const tree = new BinaryTree();
const root = tree.constructTree(array);
console.log(root);