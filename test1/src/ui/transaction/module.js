/**
 * Created by yuxinkang on 11/1/15.
 */
define(["angular"], function(angular) {
    return angular.module('FinancialTracker.app.transaction',[])
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
            $stateProvider.state('transaction',{
                url:"/transaction",
                views: {
                    "main": {
                        templateUrl: "./src/ui/transaction/transaction.html",
                        controller: "OverViewCtrl"
                    }
                }
            });
            $urlRouterProvider.otherwise('/');
        }]);
});