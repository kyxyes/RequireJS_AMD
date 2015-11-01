
define(["angular",
    "ui-router",
    './src/ui/home/index',
    './src/ui/login/index',
    './src/ui/overview/index',
    './src/ui/signup/index',
    './src/ui/transaction/index'], function(angular) {
    var app = angular.module("app", ["ui.router",
        'FinancialTracker.app.home',
        'FinancialTracker.app.login',
        'FinancialTracker.app.overview',
        'FinancialTracker.app.signup',
        'FinancialTracker.app.transaction']);
    return app;
});