const LinkedList = require('../src/index.js');
const assert = require('assert');
let list = null;

beforeEach(function() {
  list = new LinkedList();
  list.addLast(1);
  list.addLast(2);
  list.addLast(3);
});

describe('elementAt', function() {
  it('should return value of element at given index', function() {
    assert.strictEqual(list.elementAt(2), 3);
  });

  it('should return undefined if given index is bigger than length', function() {
    assert.strictEqual(list.elementAt(3), undefined);
  });
});