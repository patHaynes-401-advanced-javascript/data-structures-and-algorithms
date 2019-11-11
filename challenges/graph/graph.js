
class Graph {
  constructor(element) {
    this.element = element;
    this.adjust = new Map();
  }
  addNode(value) {
    this.adjust.set(value, []);
    return this.adjust;
  }

  addEdge(nodeOne, nodeTwo) {
    this.adjust.get(nodeOne).push(nodeTwo);
    this.adjust.get(nodeTwo).push(nodeOne);
  }

  getNodes() {
    const keys = this.adjust.keys();
    let newArr = [];
    for(let i = 0; i < this.element; i++) {
      newArr.push(keys.next().value);
    }
    return newArr;
  }

}

module.exports = Graph;
