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

  it.skip('can successfully return a collection from an inorder traversal', () => {

  });

  it.skip('can successfully return a collection from a postorder traversal', () => {

  });

  it.skip('can successfully add a node with a certain value to where it is supposed to go', () => {

  });

  it.skip('can successfully locate a node with the value provided', () => {

  });



});