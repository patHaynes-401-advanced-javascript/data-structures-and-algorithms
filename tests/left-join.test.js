const leftJoin = require('../challenges/left-join/left-join');
const HashTable = require('../challenges/hashtable/hashTable');


describe('Left Join Function', () => {
  it.skip('finds the common values in two hash tables', () => {
    const tableOne = new HashTable();
    tableOne.add('I', 'love');
    tableOne.add('when', 'they');
    tableOne.add('really', 'hard');
    tableOne.add('make', 'me');
    tableOne.add('challenges', 'except');

    const tableTwo = new HashTable();
    tableTwo.add('I', 'code');
    tableTwo.add('when', 'are');
    tableTwo.add('really', 'and');
    tableTwo.add('flow', 'jame');
    tableTwo.add('challenges', 'except');

    expect(leftJoin(tableOne, tableTwo)).toEqual([
      ['I', 'love', 'code'],
      ['challenges', 'except', 'except'],
      ['when', 'they', 'are'],
      ['really', 'hard', 'and'],
      ['make', 'me', 'cry'],
    ]);
  });
});