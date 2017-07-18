'use strict';

const expect = require('chai').expect;
const fp = require('../lib/fp.js');

describe('fp Module', () => {
  describe('#map',() => {
    it('should return an array', () => {
      expect(fp).to.have.property('map');
      expect(fp.map).to.be.a('function');
    });
  });

  it('should throw a missing array error', () => {
    var results = fp.map;
    expect(results).to.throw(Error);
  });

  it('should return an array with tripled numbers', () => {
    var results = fp.map([1,2,3], (n) => {
      return n * 3;
    });
    expect(results).to.be.an('array').that.includes.members([3,6,9]);
  });

  describe('#filter', () => {
    it('should return an array', () => {
      expect(fp).to.have.property('filter');
      expect(fp.filter).to.be.a('function');
    });
  });

  it('should throw a missing array error', () => {
    var results = fp.filter;
    expect(results).to.throw(Error);
  });

  it('should return an array without the number 3', () => {
    var results = fp.filter([1,2,3,4], (a) => {
      return a !== 3;
    });
    expect(results).to.be.an('array').to.not.have.members([3]);
  });

  describe('#reduce', () => {
    it('should return a function', () => {
      expect(fp).to.have.property('reduce');
      expect(fp.reduce).to.be.a('function');
    });
  });

  it('should throw a missing array error', () => {
    var results = fp.reduce;
    expect(results).to.throw(Error);
  });

  it('should return an array with all the elements in the array reduced to a single value', () => {
    var results = fp.reduce([1,2,3,4], (acc, n) => {
      return acc + n;
    },0);
    expect(results).to.be.a('number').that.equals(10);
  });

  describe('#concat', () => {
    it('should return a function', () => {
      expect(fp).to.have.property('concat');
      expect(fp.concat).to.be.an('function');
    });
  });

  it('should throw a missing array error', () => {
    var results = fp.concat;
    expect(results).to.throw(Error);
  });

  it('should return an array combinding arr1 and arr2', () => {
    var results = fp.concat([1,2,3],[4,5,6]);
    expect(results).to.be.an('array').that.includes.members([1,2,3,4,5,6]);
  });

  describe('#splice', () => {
    it('should return an function', () => {
      expect(fp).to.have.property('splice');
      expect(fp.splice).to.be.an('function');
    });
  });

  it('should throw a missing array error', () => {
    var results = fp.splice;
    expect(results).to.throw(Error);
  });

  it('should modify an array by adding or removing items', () => {
    var results = fp.splice([1,2,3,4], 4, 0, 5);
    expect(results).to.be.an('array').that.includes.members([1,2,3,4,5]);
  });
});
