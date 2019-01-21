const LinkedList = require('../src/index.js');
const assert = require('assert');
let list = null;

beforeEach(function() {
  list = new LinkedList();
  list.addLast(1);
  list.addLast(2);
  list.addLast(3);
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