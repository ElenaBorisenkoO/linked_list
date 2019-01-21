const LinkedList = require('../src/index.js');
const assert = require('assert');
let list = null;

beforeEach(function() {
  list = new LinkedList();
});

describe('Linked list', function() {
  describe('constructor', function() {
    it('should create empty list with 0 parameters', function() {
      assert.strictEqual(list.length, 0);
    });

    it('head and tail hould be null with 0 parameters', function() {
      assert.strictEqual(list.head, null);
      assert.strictEqual(list.tail, null);
    });
  });

  describe('instance', function() {
    it('first element should has link to second', function() {
      list.addLast(5);
      list.addLast(1);
      list.addLast(6);

      const secondValue = list.head.next.value;
      assert.strictEqual(secondValue, 1);
    });

    it('last but one node should has next link to tail', function() {
      list.addLast(5);
      list.addLast(1);
      list.addLast(6);

      const secondNode = list.head.next;
      assert.strictEqual(secondNode.next, list.tail);
    });

    it('last node should has null next link', function() {
      list.addLast(5);
      list.addLast(1);
      list.addLast(6);

      assert.strictEqual(list.tail.next, null);
    });
  });

  describe('addFirst', function() {
    it('should add element at first position', function() {
      list.addFirst(1);
      list.addFirst(2);
      assert.strictEqual(list.head, 2);
      list.addFirst(3);
      assert.strictEqual(list.head, 3);
    });

    it('should increace length by 1', function() {
      const startLength = list.length;
      list.addFirst(1);
      assert.strictEqual(list.length, startLength + 1);
    });
  });

  describe('addLast', function() {
    it('should add element at last position', function() {
      list.addLast(1);
      list.addLast(2);
      assert.strictEqual(list.tail, 2);
      list.addLast(3);
      assert.strictEqual(list.tail, 3);
    });

    it('should increace length by 1', function() {
      const startLength = list.length;
      list.addLast(1);
      assert.strictEqual(list.length, startLength + 1);
    });
  });

  describe('addAt', function() {
    it('should add element at given position', function() {
      list.addLast(1);
      list.addLast(2);
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
      list.addLast(1);
      list.addLast(2);
      list.addLast(3);

      list.addAt(1, 4);

      assert.strictEqual(list.elementAt(0).next.value, 4);
    });

    it('new node should has link to next node', function() {
      list.addLast(1);
      list.addLast(2);
      list.addLast(3);

      list.addAt(1, 4);

      assert.strictEqual(list.elementAt(1).next.value, 2);
    });
  });

  describe('removeLast', function() {
    it('should work correcr with empty list', function() {
      assert.doesNotThrow(list.removeLast());
    });

    it('should reduce length by 1', function() {
      list.addLast(1);
      list.addLast(1);
      list.addLast(1);
      const startLength = list.length;
      list.removeLast();

      assert.strictEqual(list.length, startLength - 1);
    });

    it('should move tail to previous node', function() {
      list.addLast(1);
      list.addLast(2);
      list.addLast(3);
      list.removeLast();

      assert.strictEqual(list.tail.value, 2);
    });
  });

  describe('removeAt', function() {
    it('should reduce length by 1', function() {
      list.addLast(1);
      list.addLast(1);
      list.addLast(1);
      const startLength = list.length;
      list.removeLast();

      assert.strictEqual(list.length, startLength - 1);
    });

    it('should delete element at given position', function() {
      list.addLast(1);
      list.addLast(2);
      list.addLast(3);
      assert.strictEqual(list.elementAt(1), 2);
      list.removeAt(1);
      assert.strictEqual(list.elementAt(1), 3);
    });

    it('pevious node should has link next node after deleted', function() {
      list.addLast(1);
      list.addLast(2);
      list.addLast(3);

      list.removeAt(1);

      assert.strictEqual(list.elementAt(0).next.value, 3);
    });

  });

  describe('removeFirst', function() {
    it('should reduce length by 1', function() {
      list.addLast(1);
      list.addLast(1);
      list.addLast(1);
      const startLength = list.length;
      list.removeFirst();

      assert.strictEqual(list.length, startLength - 1);
    });

    it('should move head to next node', function() {
      list.addLast(1);
      list.addLast(2);
      list.addLast(3);
      list.removeFirst();

      assert.strictEqual(list.head.value, 2);
    });
  });

  describe('elementAt', function() {
    it('should return value of element at given index', function() {
      list.addLast(1);
      list.addLast(2);
      list.addLast(3);

      assert.strictEqual(list.elementAt(2), 3);
    });

    it('should return undefined if given index is bigger than length', function() {
      list.addLast(1);
      list.addLast(2);
      list.addLast(3);

      assert.strictEqual(list.elementAt(3), undefined);
    });
  });

  describe('indexof', function() {
    it('should return index of found element', function() {
      list.addLast(1);
      list.addLast(2);
      list.addLast(3);

      assert.strictEqual(list.indexof(3), 2);
    });

    it('should return -1 if given element not found', function() {
      list.addLast(1);
      list.addLast(2);
      list.addLast(3);

      assert.strictEqual(list.indexof(10), -1);
    });
  });

  describe('isEmpty', function() {
    it('should return true if list is empty', function() {
      assert.ok(list.isEmpty());
    });

    it('should return false if list is empty', function() {
      list.addLast(1);

      assert.strictEqual(list.isEmpty(), false);
    });
  });
});
