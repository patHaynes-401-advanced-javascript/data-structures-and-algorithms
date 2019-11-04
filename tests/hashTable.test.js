const HashTable = require('../challenges/hashtable/hashTable');

describe('Hash Table testing', () => {

  it('makes a hash table', () => {
    const hashTable = new HashTable();
    expect(hashTable.size).toBe(10);
  });

  it('Adding a key/value to your hashtable results in the value being in the data structure', () => {
    const hashTable = new HashTable();
    const hash = hashTable.hash('Pat');
    expect(hash).toBe(0);
  });

  it.skip('based on a key returns the value stored', () => {
    const hashTable = new HashTable();
    const personName = { name: 'Sarah' };
    const key = Object.keys(personName);
    hashTable.add(key[0], personName.name);
    expect(hashTable.buckets[12]).toEqual(['name', 'Sarah']);
  });

  it.skip('Successfully returns null for a key that does not exist in the hashtable', () => {

  });

  it.skip('Successfully handle a collision wit.skiphin the hashtable', () => {

  });

  it.skip('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {

  });

  it.skip('Successfully hash a key to an in-range value', () => {

  });

});





