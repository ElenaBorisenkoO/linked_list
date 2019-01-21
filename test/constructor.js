const LinkedList = require('../src/index.js');
const assert = require('assert');
let list = null;

beforeEach(function() {
  list = new LinkedList();
  list.addLast(1);
  list.addLast(2);
  list.addLast(3);
});

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