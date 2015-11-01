define(["app"], function(app) {
    app.controller("HomeCtrl", ["$scope", function($scope) {
        console.log('Hi, this is controller.....');
        $scope.run = function() {
            console.log('run');
        };
    }]);
});