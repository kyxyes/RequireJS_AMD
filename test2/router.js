define(["app"], function(app) {
    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('home', {
            url:"/home",
            views: {
                "main": {
                    templateUrl: "src/ui/home/home.html",
                    controller: "HomeCtrl"
                }
            }
        }).state('overview',{
            url:"/overview",
            views: {
                "main": {
                    templateUrl: "src/ui/overview/overview.html",
                    controller: "OverViewCtrl"
                }
            }
        });
        $urlRouterProvider.otherwise('/');
    }]);
});