class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insert(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  includes(value) {
    let currentNode = this.head;
    for(let i = 0; i < this.size; i++) {
      if(currentNode.value === value) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    } return false;
  }

  toString() {
    let string = '';
    let currentNode = this.head;
    for(let i = 0; i < this.size; i++) {
      string = string + currentNode.value;
      currentNode = currentNode.next;
    }
    return string;
  }

  append(value) {
    const newNode = new Node(value);
    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    this.size++;
  }

  insertBefore(value, newVal) {
    const newNode = new Node(newVal);
    if(this.head === null) {
      this.head = newNode;
      this.size++;
      return this.head;
    }
    if(this.head.value === value) {
      newNode.next = this.head;
      this.head = newNode;
    }
    let currentNode = this.head;
    while(currentNode.next.value !== value) {
      currentNode.next = newNode;
    }
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.size++;
    return newNode;
  }

  insertAfter(value, newVal) {
    const newNode = new Node(newVal);
    let currentNode = this.head;
    if(this.head === null) {
      this.head = newNode;
      this.size++;
      return this.head;
    }
    while(currentNode.value !== value) {
      currentNode = currentNode.next;
    }
    newNode.next = currentNode;
    currentNode.next = newNode;
    this.size++;
  }

  kthFromEnd(k) {
    let currentNode = this.head;
    let count = 0;
    if(k > this.size) {
      return 'greater than length';
    }
    if(k === this.size) {
      return 'k and length of list the same';
    }
    if(k < 0) {
      return 'not a positive number';
    }
    if(this.size <= 1){
      return 'list is size of 1';
    }
    if(this.size - k !== count) {
      currentNode = currentNode.next;
      count++;
      return currentNode.value;
    }
  }
}


module.exports = {
  Node,
  LinkedList
};