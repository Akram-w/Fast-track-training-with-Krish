var TreeNode = require("./TreeNode.js");
class BinaryTree {

    constructor(value) {
            this.root;
            this.nextInsertLevel = [];
            this.nextIndex;
            this.addNode(value);
        }
        /**
         * Algorithm of printing binary tree leaf nodes
         * @param {TreeNode} node The Node of the tree should start to print
         * @returns 
         */
    printLeafNodeAlgo(node) {
            if (node === undefined) {
                return
            }
            if ((node.left == undefined) && (node.right === undefined)) {
                console.log(node.value);
                return
            }
            this.printLeafNodeAlgo(node.left);
            this.printLeafNodeAlgo(node.right);
        }
        /**
         * driver function to print binary tree leafnode
         */
    printLeafNode() {
            this.printLeafNodeAlgo(this.root);
        }
        /**
         * function to add nodes to binary tree
         * @param {number} value binary tree node value
         * @returns 
         */
    addNode(value) {
            if (!this.root) {
                this.root = new TreeNode(value);
                this.nextInsertLevel.push(this.root);
                this.nextIndex = 0;
                return;
            }
            for (let i = this.nextIndex; i < this.nextInsertLevel.length; i++) {
                const element = this.nextInsertLevel[i];
                if (element.left === undefined) {
                    element.left = new TreeNode(value);
                    this.nextIndex = i;
                    return;
                } else if (element.right === undefined) {
                    element.right = new TreeNode(value);
                    this.nextIndex = ++i;
                    return;
                }
            }
            this.changeToNextLevel();
            this.nextIndex = 0;
            this.addNode(value);
        }
        /**
         * The helper function to change the insertion level inorder to help adding nodes
         */
    changeToNextLevel() {
        let temp = [];
        for (let i = 0; i < this.nextInsertLevel.length; i++) {
            const element = this.nextInsertLevel[i];
            temp.push(element.left);
            temp.push(element.right);

        }
        this.nextInsertLevel = temp;
    }

}
module.exports = BinaryTree;