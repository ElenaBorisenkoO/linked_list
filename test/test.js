const LinkedList = require('../src/index.js');
const assert = require('assert');
let list = null;

beforeEach(function() {
  list = new LinkedList();
  list.addLast(1);
  list.addLast(2);
  list.addLast(3);
});

describe('Linked list', function() {
  describe('constructor', function() {
    it('should create empty list with 0 parameters', function() {
      list = new LinkedList();
      assert.strictEqual(list.length, 0);
    });

    it('head and tail should be null with 0 parameters', function() {
      list = new LinkedList();
      assert.strictEqual(list.head, null);
      assert.strictEqual(list.tail, null);
    });
  });

  describe('instance', function() {
    it('first element should has link to second', function() {
      assert.strictEqual(list.head.next.value, 2);
    });

    it('last but one node should has next link to tail', function() {
      list = new LinkedList();
      list.addLast(1);
      list.addLast(2);

      assert.strictEqual(list.head.next, list.tail);
    });

    it('last node should has null next link', function() {
      assert.strictEqual(list.tail.next, null);
    });
  });

  describe('addFirst', function() {
    it('should add element at first position', function() {
      assert.strictEqual(list.head.value, 1);
      list.addFirst(3);
      assert.strictEqual(list.head.value, 3);
    });

    it('should increace length by 1', function() {
      const startLength = list.length;
      list.addFirst(1);
      assert.strictEqual(list.length, startLength + 1);
    });
  });

  describe('addLast', function() {
    it('should add element at last position', function() {
      assert.strictEqual(list.tail.value, 3);
      list.addLast(4);
      assert.strictEqual(list.tail.value, 4);
    });

    it('should increace length by 1', function() {
      const startLength = list.length;
      list.addLast(1);
      assert.strictEqual(list.length, startLength + 1);
    });
  });

  describe('addAt', function() {
    it('should add element at given position', function() {
      assert.strictEqual(list.elementAt(1), 2);
      list.addAt(1, 3);
      assert.strictEqual(list.elementAt(1), 3);
    });

    it('should increace length by 1', function() {
      const startLength = list.length;
      list.addAt(0, 1);
      assert.strictEqual(list.length, startLength + 1);
    });

    it('pevious node should has link to new node', function() {
      list.addAt(1, 4);

      assert.strictEqual(list.head.next.value, 4);
    });

    it('new node should has link to next node', function() {
      list.addAt(0, 4);

      assert.strictEqual(list.head.next.value, 1);
    });
  });

  describe('removeLast', function() {
    it('should work correct with empty list', function() {
      assert.doesNotThrow(list.removeLast());
    });

    it('should reduce length by 1', function() {
      const startLength = list.length;
      list.removeLast();

      assert.strictEqual(list.length, startLength - 1);
    });

    it('should move tail to previous node', function() {
      list.removeLast();

      assert.strictEqual(list.tail.value, 2);
    });

    it('should return value of removed node', function() {
      assert.strictEqual(list.removeLast(), 3);
    });
  });

  describe('removeAt', function() {
    it('should reduce length by 1', function() {
      const startLength = list.length;
      list.removeAt(1);

      assert.strictEqual(list.length, startLength - 1);
    });

    it('should delete element at given position', function() {
      assert.strictEqual(list.elementAt(1), 2);
      list.removeAt(1);
      assert.strictEqual(list.elementAt(1), 3);
    });

    it('pevious node should has link next node after deleted', function() {
      list.removeAt(1);

      assert.strictEqual(list.head.next.value, 3);
    });

    it('should return value of removed node', function() {
      assert.strictEqual(list.removeAt(1), 2);
    });
  });

  describe('removeFirst', function() {
    it('should reduce length by 1', function() {
      const startLength = list.length;
      list.removeFirst();

      assert.strictEqual(list.length, startLength - 1);
    });

    it('should move head to next node', function() {
      list.removeFirst();

      assert.strictEqual(list.head.value, 2);
    });

    it('should return value of removed node', function() {
      assert.strictEqual(list.removeFirst(), 1);
    });
  });

  describe('elementAt', function() {
    it('should return value of element at given index', function() {
      assert.strictEqual(list.elementAt(2), 3);
    });

    it('should return undefined if given index is bigger than length', function() {
      assert.strictEqual(list.elementAt(3), undefined);
    });
  });

  describe('indexof', function() {
    it('should return index of found element', function() {
      assert.strictEqual(list.indexOf(3), 2);
    });

    it('should return -1 if given element not found', function() {
      assert.strictEqual(list.indexOf(10), -1);
    });
  });

  describe('isEmpty', function() {
    it('should return true if list is empty', function() {
      list = new LinkedList();
      assert.ok(list.isEmpty());
    });

    it('should return false if list is empty', function() {
      assert.strictEqual(list.isEmpty(), false);
    });
  });

  describe('size', function() {
    it('should return length of list', function() {
      assert.strictEqual(list.size(), 3);
      list.addLast(1);
      assert.strictEqual(list.size(), 4);
    });
  });
});
