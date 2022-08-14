/*
Min Stack

https://leetcode.com/problems/min-stack/description/

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
Example:
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.
*/
class MinStack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    const length = this.stack.length;
    this.stack[length] = value;
  }

  getStack() {
    return this.stack;
  }

  getMin() {
    let min = this.stack[0];
    for (let value of this.stack) {
      min = min > value ? value : min;
    }
    return min;
  }

  pop() {
    const newStack = [];
    const length = this.stack.length;
    const number = this.stack[length - 1];
    for (let i = 0; i < length - 1; i++) {
      newStack[i] = this.stack[i];
    }
    this.stack = newStack;
    return number;
  }

  top() {
    const length = this.stack.length;
    const number = this.stack[length - 1];
    return number;
  }

}

module.exports.MinStack = MinStack;
