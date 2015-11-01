/**
 * @author xialei <xialeistudio@gmail.com>
 */
require.config({
    baseUrl: '/',
    paths: {
        "angular": '/src/ui/bower_components/angular/angular.min',
        "ui-router": '/src/ui/bower_components/angular-ui-router/release/angular-ui-router',
        "jquery": '/src/ui/bower_components/jquery/dist/jquery'
    },
    shim: {
        "angular": {
            exports: "angular",
            deps: ["jquery"]
        },
        "ui-router": {
            exports: "ui-router",
            deps: ["angular"]
        },
        "jquery": {
            exports: "jquery"
        }
    }//,
    // kick start application
    //deps: ['app']
});



require(["jquery", "angular", "app","router","src/ui/home/controller","src/ui/overview/controller"], function($, angular) {
    $(function() {
        angular.bootstrap(document, ["app"]);
        //deps: ['app']
    });
});
