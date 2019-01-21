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
    it('should create empty list with 0 parameters', function() {
      assert.strictEqual(list.length, 0);
    });

    it('head and tail hould be null with 0 parameters', function() {
      assert.strictEqual(list.length, 0);
    });
  });

  describe('addFirst', function() {
    it('shoul adds to end of list', function() {
      list = new LinkedList();
      list.add(1);
      assert.equal(list.length, 1);
    });

    it('shoul adds to end of list', function() {
      list.add(6);
      assert.equal(list.get(3), 6);
    });
  });

  describe('addLast', function() {

  });

  describe('addAt', function() {

  });

  describe('removeLast', function() {

  });

  describe('elementAt', function() {

  });

  describe('removeAt', function() {

  });

  describe('indexof', function() {

  });

  describe('isEmpty', function() {

  });
});
