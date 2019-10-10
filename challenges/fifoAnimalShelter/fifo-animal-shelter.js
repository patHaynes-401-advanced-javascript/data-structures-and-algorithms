const queueImport = require('../stackAndQueue/stack-and-queue');

class AnimalShelter {
  constructor() {
    this.dogQueue = new queueImport.Queue();
    this.catQueue = new queueImport.Queue();
  }

  enqueue(animal) {
    if(animal.type === 'cat') {
      this.catQueue.enqueue(animal.name);
    }
    if(animal.type === 'dog') {
      this.dogQueue.enqueue(animal.name);
    }
  }

  dequeue(perf) {
    if(perf === 'cat') {
      if(!this.catQueue.peek()) return 'the kitties are gone!';
      if(this.catQueue.peek()) return this.catQueue.dequeue();
    }
    if(perf === 'dog') {
      if(!this.dogQueue.peek()) return 'the puppies are gone!';
      if(this.dogQueue.peek()) this.dogQueue.dequeue();
    }
  }
}

module.exports = AnimalShelter;