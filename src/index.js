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

  addLast(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
    }

    if (this.head) {
      this.tail.next = node;
      this.tail = node;
    }

    this.length += 1;
  }

  addFirst(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
    }

    if (this.head) {
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
    }

    if (this.head) {
      let currentNode = this.head;

      for (let i = 1; i < index; i++) {
        currentNode = currentNode.next;
      }

      node.next = currentNode.next;
      currentNode.next = node;
    }

    this.length += 1;
  }

  removeAt(index) {
    let currentNode = this.head;
    let currentIndex = 0;
    let previouceNode = null;

    if (index < 0) {
      return null;
    }

    while (currentIndex < index) {
      currentIndex += 1;
      previouceNode = currentNode;
      currentNode = currentNode.next;
    }

    previouceNode.next = null;

    this.length -= 1;
    return currentNode.value;
  }
}

module.exports = LinkedList;