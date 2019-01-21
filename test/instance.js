const LinkedList = require('../src/index.js');
const assert = require('assert');
let list = null;

beforeEach(function() {
  list = new LinkedList();
  list.addLast(1);
  list.addLast(2);
  list.addLast(3);
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