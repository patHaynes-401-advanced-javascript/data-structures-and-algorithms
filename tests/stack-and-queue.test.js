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

  it('Can successfully pop off the stack', () => {
    const stack = new stackImport.Stack();
    stack.push('first element');
    stack.push('second element');
    const answer = stack.pop();
    expect(answer).toBe('second element');
  });

  it('Can successfully empty a stack after multiple pops', () => {
    const stack = new stackImport.Stack();
    stack.push('first element');
    stack.push('second element');
    stack.push('third element');
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.top).toBe(null);
  });

  it('Can successfully peek the next item on the stack', () => {
    const stack = new stackImport.Stack();
    stack.push('first element');
    stack.push('second element');
    const answer = stack.peek();
    expect(answer).toBe('second element');
  });

  it('Can successfully instantiate an empty stack', () => {
    const stack = new stackImport.Stack();
    expect(stack.top).toBe(null);
  });

  it('Can successfully enqueue into a queue', () => {
    const queue = new stackImport.Queue();
    queue.enqueue('element');
    expect(queue.front.value).toBe('element');
  });

  it('Can successfully enqueue multiple values into a queue', () => {
    const queue = new stackImport.Queue();
    queue.enqueue('element');
    queue.enqueue('second element');
    expect(queue.front.value).toBe('element');
    expect(queue.front.next.value).toBe('second element');
  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    const queue = new stackImport.Queue();
    queue.enqueue('element');
    queue.enqueue('second element');
    queue.enqueue();
    expect(queue.front.value).toBe('element');
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
    const queue = new stackImport.Queue();
    queue.enqueue('element');
    expect(queue.front.value).toBe('element');
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    const queue = new stackImport.Queue();
    queue.enqueue('element');
    queue.enqueue('second element');
    queue.dequeue();
    queue.dequeue();
    expect(queue.front).toBe(null);
  });

  it('Can successfully instantiate an empty queue', () => {
    const queue = new stackImport.Queue();
    expect(queue.front).toBe(null);
  });

});