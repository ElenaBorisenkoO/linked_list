const LinkedList = require('../src/index.js');
const assert = require('assert');
let list = null;

beforeEach(function() {
  list = new LinkedList();
  list.addLast(1);
  list.addLast(2);
  list.addLast(3);
});

describe('indexof', function() {
  it('should return index of found element', function() {
    assert.strictEqual(list.indexOf(3), 2);
  });

  it('should return -1 if given element not found', function() {
    assert.strictEqual(list.indexOf(10), -1);
  });
});