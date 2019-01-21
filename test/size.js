const LinkedList = require('../src/index.js');
const assert = require('assert');
let list = null;

beforeEach(function() {
  list = new LinkedList();
  list.addLast(1);
  list.addLast(2);
  list.addLast(3);
});

describe('size', function() {
  it('should return length of list', function() {
    assert.strictEqual(list.size(), 3);
    list.addLast(1);
    assert.strictEqual(list.size(), 4);
  });
});