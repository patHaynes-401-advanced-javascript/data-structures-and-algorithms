const { Node, BinaryTree } = require('../challenges/binaryTree/binary-tree');

describe('tree testing', () => {

  it('can successfully make an empty ree with a single root', () => {
    const tree = new BinaryTree();
    expect(tree.root).toBe(null);
  });

  it('can successfully make a tree with right and left child', () => {
    const tree = new BinaryTree();
    tree.root = new Node('root');
    expect(tree.root.value).toBe('root');
  });

  it('can successfully return a collection from a preorder traversal', () => {
    const tree = new BinaryTree();
    tree.root = new Node('root');
    tree.root.left = new Node('left');
    tree.root.right = new Node('right');
    expect(tree.root.value).toBe('root');
    expect(tree.root.left.value).toBe('left');
    expect(tree.root.right.value).toBe('right');
  });

  it('can successfully return a collection from an inorder traversal', () => {
    const tree = new BinaryTree();
    tree.root = new Node('F');
    tree.root.left = new Node('B');
    tree.root.left.left = new Node('A');
    tree.root.left.right = new Node('D');
    tree.root.left.right.left = new Node('C');
    tree.root.left.right.right = new Node('E');
    tree.root.right = new Node('G');
    tree.root.right.right = new Node('I');
    tree.root.right.right.left = new Node('H');
    expect(tree.preOrder(tree.root)).toEqual(['F', 'B', 'A', 'D', 'C', 'E', 'G', 'I', 'H']);
  });

  it('can successfully return a collection from a postorder traversal', () => {
    const tree = new BinaryTree();
    tree.root = new Node('F');
    tree.root.left = new Node('B');
    tree.root.left.left = new Node('A');
    tree.root.left.right = new Node('D');
    tree.root.left.right.left = new Node('C');
    tree.root.left.right.right = new Node('E');
    tree.root.right = new Node('G');
    tree.root.right.right = new Node('I');
    tree.root.right.right.left = new Node('H');
    expect(tree.inOrder(tree.root)).toEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']);
  });

  it.skip('can successfully add a node with a certain value to where it is supposed to go', () => {

  });

  it.skip('can successfully locate a node with the value provided', () => {

  });



});