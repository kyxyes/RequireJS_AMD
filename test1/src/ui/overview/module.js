/**
 * Created by yuxinkang on 11/1/15.
 */
define(["angular"], function(angular) {
    return angular.module('FinancialTracker.app.overview',[])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('overview',{
            url:"/overview",
            views: {
                "main": {
                    templateUrl: "./src/ui/overview/overview.html",
                    controller: "OverViewCtrl"
                }
            }
        });
        $urlRouterProvider.otherwise('/');
    }]);
});