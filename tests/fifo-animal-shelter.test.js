const AnimalShelter = require('../challenges/fifoAnimalShelter/fifo-animal-shelter');

describe('linked list tests', () => {

  it('successfully enqueues dogs and cats', () => {
    const queue = new AnimalShelter();
    const firstKitty = {
      type: 'cat',
      name: 'Chirpa'
    };
    const secondKitty = {
      type: 'cat',
      name: 'Fluffy'
    };
    const firstPuppy = {
      type: 'dog',
      name: 'Kenobi'
    };
    const secondPuppy = {
      type: 'dog',
      name: 'Summit'
    };
    queue.enqueue(firstKitty);
    queue.enqueue(secondKitty);
    queue.enqueue(firstPuppy);
    queue.enqueue(secondPuppy);
    expect(queue.dogQueue.front.next.value).toEqual('Summit');
    expect(queue.dogQueue.front.value).toEqual('Kenobi');
    expect(queue.catQueue.front.next.value).toEqual('Fluffy');
    expect(queue.catQueue.front.value).toEqual('Chirpa');
  });

  it('dequeues based on pref', () => {
    const queue = new AnimalShelter();
    const firstKitty = {
      type: 'cat',
      name: 'Chirpa'
    };
    const secondKitty = {
      type: 'cat',
      name: 'Fluffy'
    };
    const firstPuppy = {
      type: 'dog',
      name: 'Kenobi'
    };
    const secondPuppy = {
      type: 'dog',
      name: 'Summit'
    };
    queue.enqueue(firstKitty);
    queue.enqueue(secondKitty);
    queue.enqueue(firstPuppy);
    queue.enqueue(secondPuppy);
    queue.dequeue('cat');
    queue.dequeue('dog');
    expect(queue.catQueue.front.value).toEqual('Fluffy');
    expect(queue.dogQueue.front.value).toEqual('Summit');
  });

  it.skip('returns an error if you try to remove more than are available', () => {

  });



});