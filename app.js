var app = angular.module("myApp", []); 

app.controller("myCtrl", function($scope) {
    $scope.firstList = ['lorem ipsum',
    'first data',
    'second data',
    'third data',
    'fourth data',
    'fifth data'
    ];

    $scope.secondList = [];

    $scope.removeItem = function(event) {
    	var val = event.target.innerText;
    	$scope.firstList.splice($scope.firstList.indexOf(val), 1);
    	$scope.secondList.push(val);
    }
});