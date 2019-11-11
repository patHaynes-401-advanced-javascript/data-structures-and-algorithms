const Graph = require('../challenges/graph/graph');

describe('Testing Graph', () => {

  it('Node can be successfully added to the graph', () => {
    const graph = new Graph(1);
    graph.addNode('A');
    expect(graph.getNodes()).toEqual(['A']);
  });

});
