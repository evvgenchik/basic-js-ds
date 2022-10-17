const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
	arr = [];
	push(element) {
		this.arr.unshift(element)
	}

	pop() {
		let aim = this.arr[0];
		this.arr.shift()
		return aim
	}

	peek() {
		return this.arr[0];

	}
}

const stack = new Stack();

stack.push(5);
stack.push(6);
stack.push(7);
console.log(stack.arr);
console.log(stack.peek())// 7))
console.log(stack.pop()) //7))
console.log(stack.peek())// 6))

module.exports = {
	Stack
};
