//  element is an object with a value and next property
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.length === 0;
  }

  indexOf(value) {
    let currentNode = this.head;
    let index = -1;

    while (currentNode) {
      index += 1;

      if (currentNode.value === value) {
        return index;
      }

      currentNode = currentNode.next;
    }

    return -1;
  }

  elementAt(index) {
    if (index > this.length - 1) {
      return;
    }

    let currentNode = this.head;
    let count = 0;

    while (count < index) {
      count += 1;
      currentNode = currentNode.next;
    }

    return currentNode.value;
  }

  addLast(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length += 1;
  }

  addFirst(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length += 1;
  }

  addAt(index, value) {
    if (index !== 0 && index >= this.length) {
      throw new Error('`index` can`t be bigger than number of elements in the list');
    }

    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let currentNode = this.head;

      for (let count = 1; count < index; count++) {
        currentNode = currentNode.next;
      }

      node.next = currentNode.next;
      currentNode.next = node;
    }

    this.length += 1;
  }

  removeAt(index) {
    if (this.length === 1) {
      this.head = null;
      this.tail = null;

      return this;
    }

    let currentNode = this.head;
    let currentIndex = 0;
    let previousNode = null;


    if (index < 0) {
      return null;
    }

    if (index === 0) {
      this.head = currentNode.next;
    } else {
      while (currentIndex < index) {
        currentIndex += 1;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }

    if (currentNode.next === null) {
      this.tail = previousNode;
      previousNode.next = null;
    }

    this.length -= 1;

    return currentNode.value;
  }

  removeFirst() {
    if (this.length === 1) {
      this.head = null;
      this.tail = null;

      return this;
    }


    const currentNode = this.head;
    this.head = currentNode.next;
    this.length -= 1;

    return currentNode.value;
  }

  removeLast() {
    if (this.length === 1) {
      this.head = null;
      this.tail = null;

      return this;
    }


    let currentNode = this.head;
    let previousNode = null;

    if (this.length === 0) {
      return;
    }

    while (currentNode.next !== null) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    previousNode.next = null;
    this.tail = previousNode;
    this.length -= 1;

    return currentNode.value;
  }
}

module.exports = LinkedList;
