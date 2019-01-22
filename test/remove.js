const LinkedList = require('../src/index.js');
const assert = require('assert');
let list = null;

beforeEach(function() {
  list = new LinkedList();
  list.addLast(1);
  list.addLast(2);
  list.addLast(3);
});

describe('removeLast', function() {
  it('should work correct with empty list', function() {
    list = new LinkedList();
    assert.strictEqual(list.removeLast(), undefined);
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

  it('should set head and tail to null if list became empty', function() {
    list = new LinkedList();
    list.addLast(5);
    list.removeLast();

    assert.strictEqual(list.head, null);
    assert.strictEqual(list.tail, null);
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

  it('should set head and tail to null if list became empty', function() {
    list = new LinkedList();
    list.addLast(5);
    list.removeAt(0);

    assert.strictEqual(list.head, null);
    assert.strictEqual(list.tail, null);
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

  it('should set head and tail to null if list became empty', function() {
    list = new LinkedList();
    list.addLast(5);
    list.removeFirst();

    assert.strictEqual(list.head, null);
    assert.strictEqual(list.tail, null);
  });
});