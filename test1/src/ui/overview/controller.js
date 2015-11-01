define(["./module"], function(module) {
    return module.controller("OverViewCtrl", ["$scope", function($scope) {
        console.log('Hi, this is overview controller.....');
        $scope.run = function() {
            console.log('run');
        };
    }]);
});