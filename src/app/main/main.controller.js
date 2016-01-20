'use strict';

angular.module('angularCalculator')
  .controller('MainCtrl', function ($scope, CalculatorService) {
    $scope.calculator = {
    };
    $scope.operations = ['add', 'subtract', 'multiply', 'divide'];

    $scope.calculate = function() {
      if (this.calculatorForm.$valid) {
        $scope.calculator.result = CalculatorService[$scope.calculator.operation]($scope.calculator.a, $scope.calculator.b);
      }
    };
  });
