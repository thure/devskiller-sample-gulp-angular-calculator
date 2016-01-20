'use strict';

describe('calculatorService', function(){

  beforeEach(module('angularCalculator'));

  it('should be 5 for add(2,3)', inject(function(CalculatorService) {
    expect(CalculatorService.add(2,3)).toEqual(5);
  }));
  it('should be 2 for subtract(6,4)', inject(function(CalculatorService) {
    expect(CalculatorService.subtract(6,4)).toEqual(2);
  }));
  it('should be 6 for multiply(2,3)', inject(function(CalculatorService) {
    expect(CalculatorService.multiply(2,3)).toEqual(6);
  }));
  it('should be 2 for divide(6,3)', inject(function(CalculatorService) {
    expect(CalculatorService.divide(6,3)).toEqual(2);
  }));
});
