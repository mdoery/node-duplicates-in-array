"use strict"
var assert = require('assert');
var dupes = require('../index');
var validate = dupes.validate;
describe('validate okay', function() {
  describe('#validate()', function() {
    it('should return false when there are no duplicates', function() {
      assert.equal(validate(["space","letter","space","letter","space","letter"], "space", 2), false);
    });
  });
});

describe('validate two spaces in a row found when there are three', function() {
  describe('#validate()', function() {
    it('should return true when there are 2 duplicates', function() {
      assert.equal(validate(["space","letter","space","space","space","letter"], "space", 2), true);
    });
  });
});

describe('validate 3 spaces in a row but looking for 4', function() {
  describe('#validate()', function() {
    it('should return false when there are only 3 duplicates', function() {
      assert.equal(validate(["space","letter","space","space","space","letter"], "space", 4), false);
    });
  });
});

describe('validate two spaces in a row found when there are 2', function() {
  describe('#validate()', function() {
    it('should return true when there are 2 duplicates', function() {
      assert.equal(validate(["space","letter","letter","space","space","letter"], "space", 2), true);
    });
  });
});

describe('validate no spaces found in empty array', function() {
  describe('#validate()', function() {
    it('should return false for empty array', function() {
      assert.equal(validate([], "space", 2), false);
    });
  });
});
