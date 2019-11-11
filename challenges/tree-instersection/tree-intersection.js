function treeInterection(firstTree, secondTree) {
  const treeA = firstTree.preOrder(firstTree.root);
  const treeB = secondTree.preOrder(secondTree.root);
  const commonArr = [];
  for(let i = 0; i < treeA.length; i++) {
    if(treeB.includes(treeA[i])) commonArr.push(treeA[i]);
  }
  return commonArr;
}

module.exports = treeInterection;