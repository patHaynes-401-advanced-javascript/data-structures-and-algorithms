const linkListImport = require('../challenges/linkedList/linked-list');
const merge = require('../challenges/elevenMerge/eleven-merge');

describe('Linked List Merge', () => {

  it('merges two linked lists in one after the other "zipped list" ', () => {
    const listOne = new linkListImport.LinkedList();
    listOne.insert('damnit');
    listOne.insert('this');
    listOne.insert('I');

    const listTwo = new linkListImport.LinkedList();
    listTwo.insert('!');
    listTwo.insert('works');
    listTwo.insert('hope');
    
    const result = merge.mergeLists(listOne, listTwo);

    expect(result.value).toBe('I');
    expect(result.next.value).toBe('hope');
    expect(result.next.next.value).toBe('this');
    expect(result.next.next.next.value).toBe('works');
    expect(result.next.next.next.next.value).toBe('damnit');
    expect(result.next.next.next.next.next.value).toBe('!');
  });
});
