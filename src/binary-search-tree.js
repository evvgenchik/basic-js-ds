const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

// class Node {
// 	constructor(value) {
// 		this.value = value;
// 		this.left = null;
// 		this.right = null;
// 	}
// }


class BinarySearchTree {
	constructor() {
		this.data = null;
	}

	root() {
		return this.data;
	}

	add(data) {
		const newNode = new Node(data);

		if (!this.data) {
			this.data = newNode;
			return
		}

		let currentNode = this.data

		while (currentNode) {
			if (newNode.data < currentNode.data) {

				if (!currentNode.left) {
					currentNode.left = newNode;
					return
				}

				currentNode = currentNode.left;
			}

			if (newNode.data > currentNode.data) {

				if (!currentNode.right) {
					currentNode.right = newNode;
					return
				}

				currentNode = currentNode.right;
			}
		}
	}

	has(data) {
		return searchWithin(this.data, data);

		function searchWithin(node, value) {

			if (!node) {
				return false
			};

			if (node.data === value) {
				return true
			};

			if (value < node.data) {
				return searchWithin(node.left, value)
			};

			if (value > node.data) {
				return searchWithin(node.right, value)
			};
		}
	}

	find(data) {
		const queue = [this.data];


		while (queue.length) {
			const node = queue.shift();

			if (node.data == data) {
				return node
			}

			if (node.left) {
				queue.push(node.left)

				if (node.left.data == data) {
					return node.left;
				}
			};

			if (node.right) {
				queue.push(node.right);

				if (node.right.data == data) {
					return node.right;

				}
			}
		}
		return null
	}

	remove(data) {
		this.data = removeNode(this.data, data)


		function removeNode(node, data) {
			if (!node) {
				return null;
			}

			if (data < node.data) {
				node.left = removeNode(node.left, data);
				return node;
			} else if (node.data < data) {
				node.right = removeNode(node.right, data);
				return node;
			} else {

				if (!node.left && !node.right) {
					return null;
				}

				if (!node.left) {
					node = node.right;
					return node;
				}

				if (!node.right) {
					node = node.left;
					return node;
				}

				let minFromRight = node.right;
				while (minFromRight.left) {
					minFromRight = minFromRight.left;
				}
				node.data = minFromRight.data;

				node.right = removeNode(node.right, minFromRight.data);

				return node;
			}
		}




	}

	min() {
		if (!this.data) {
			return;
		}

		let currentNode = this.data

		while (currentNode.left) {
			currentNode = currentNode.left
		}

		return currentNode.data;
	}

	max() {
		if (!this.data) {
			return;
		}

		let currentNode = this.data;
		while (currentNode.right) {
			currentNode = currentNode.right;
		}

		return currentNode.data;
	}


}





module.exports = {
	BinarySearchTree
};