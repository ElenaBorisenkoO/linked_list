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

  it('should work correctly with different type of data', function() {
    list = new LinkedList();
    list.addLast('string');
    list.addLast({ name: 'John' });
    list.addLast(true);
    list.addLast(null);
    list.addLast(undefined);

    assert.strictEqual(list.elementAt(0), 'string');
    assert.deepStrictEqual(list.elementAt(1), { name: 'John' });
    assert.ok(list.elementAt(2));
    assert.strictEqual(list.elementAt(3), null);
    assert.strictEqual(list.elementAt(4), undefined);
  });
});