/**
 * Created by yuxinkang on 11/1/15.
 */
define(["angular"], function(angular) {
    return angular.module('FinancialTracker.app.login',[])
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
            $stateProvider.state('login',{
                url:"/login",
                views: {
                    "main": {
                        templateUrl: "./src/ui/login/login.html",
                        controller: "OverViewCtrl"
                    }
                }
            });
            $urlRouterProvider.otherwise('/');
        }]);
});