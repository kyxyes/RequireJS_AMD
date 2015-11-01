define(["./module"], function(module) {
    return module.controller("HomeCtrl", ["$scope", function($scope) {
        console.log('Hi, this is controller.....');
        $scope.run = function() {
            console.log('run');
        };
    }]);
});