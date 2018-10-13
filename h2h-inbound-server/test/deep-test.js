var express = require('express');
describe('Our application', function() {
  var app, date;
  this.timeout(5000);
  before(function(done) {
    app = express();
    app.listen(3000, function(err) {
      if (err) { return done(err); }
      done();
    });
  });
  beforeEach(function() {
    date = new Date();
  });
  after(function() {
    console.log("Our applicationa tests done!");
  });
  afterEach(function() {
    console.log("The date for that one was", date);
  });
  it('should understand basic mathematical principles', function() {
    if (5 == 3) {
      throw new Error("Oh no.");
    }
  });

  it('should understand basic truths', function() {
    if (false) {
      throw new Error("Oh no.");
    }
  });
  describe('(deeper)', function() {
    before(function() {
      console.log("Begin going deeper!")
    });
    it('should perform basic math', function() {
      if (1+1 != 2) {
        throw new Error("Oh no.");
      }
    });
    it('should perform basic counting', function() {
      if ('abc'.length != 3) {
        throw new Error("Oh no.");
      }
    });
  });
});
