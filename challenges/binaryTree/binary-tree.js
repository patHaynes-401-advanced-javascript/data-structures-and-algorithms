class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
}

preOrder(node) {
  if (node === null) return [];

  let stack = [];
  let result = [];
  stack.push(node);

  while (stack.length > 0) {
    let current = stack.pop();
    result.push(current.value);
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return result;
}

inOrder(node) {
  if (node === null) return [];
  let result = [];
  stack.push(node);

  while (stack.length > 0) {
    let current = stack.pop();
    result.push(current.value);
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return result;
}

postOrder(node) {

}