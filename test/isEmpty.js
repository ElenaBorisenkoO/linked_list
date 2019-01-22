const LinkedList = require('../src/index.js');
const assert = require('assert');
let list = null;

beforeEach(function() {
  list = new LinkedList();
  list.addLast(1);
  list.addLast(2);
  list.addLast(3);
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