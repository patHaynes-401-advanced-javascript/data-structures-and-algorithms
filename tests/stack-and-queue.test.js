const stackImport = require('../challenges/stackAndQueue/stack-and-queue');

describe('Stack and Queue', () => {

  it('Can successfully push onto a stack', () => {
    const stack = new stackImport.Stack();
    const result = stack.push('element');
    expect(result.value).toBe('element');
  });

  it('Can successfully push multiple values onto a stack', () => {
    const stack = new stackImport.Stack();
    stack.push('first element');
    stack.push('second element');
    expect(stack.top.value).toBe('second element');
    expect(stack.top.next.value).toBe('first element');
  });

  it.skip('Can successfully pop off the stack', () => {

  });

  it.skip('Can successfully empty a stack after multiple pops', () => {

  });

  it.skip('Can successfully peek the next item on the stack', () => {

  });

  it.skip('Can successfully instantiate an empty stack', () => {

  });

  it.skip('Can successfully enqueue into a queue', () => {

  });

  it.skip('Can successfully enqueue multiple values into a queue', () => {

  });

  it.skip('Can successfully dequeue out of a queue the expected value', () => {

  });

  it.skip('Can successfully peek into a queue, seeing the expected value', () => {

  });

  it.skip('Can successfully empty a queue after multiple dequeues', () => {

  });

  it.skip('Can successfully instantiate an empty queue', () => {

  });

});

