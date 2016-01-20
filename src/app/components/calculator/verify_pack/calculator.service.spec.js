'use strict';

describe('verify_pack.calculatorService', function(){

  beforeEach(module('angularCalculator'));

  it('should be -5 for add(-10,5)', inject(function(CalculatorService) {
    expect(CalculatorService.add(-10,5)).toEqual(-5);
  }));
  it('should be -4 for subtract(6,10)', inject(function(CalculatorService) {
    expect(CalculatorService.subtract(6,10)).toEqual(-4);
  }));
  it('should be 6 for multiply(2,3)', inject(function(CalculatorService) {
    expect(CalculatorService.multiply(2,3)).toEqual(6);
  }));
  it('should be 2 for divide(6,3)', inject(function(CalculatorService) {
    expect(CalculatorService.divide(6,3)).toEqual(2);
  }));
  it('should be NaN for divide(6,0)', inject(function(CalculatorService) {
    expect(CalculatorService.divide(6,0)).toEqual(NaN);
  }));
});
