"use strict"
app.config(["$stateProvider", "$urlRouterProvider", routeFn]);
function routeFn($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/main");
    $stateProvider
        .state("main", {
            url: "/main",
            templateUrl: "views/home/main.html",
            controller: "mainCtrl",
            resolve: {
                deps: ["$ocLazyLoad", function ($ocLazyLoad) {
                    return $ocLazyLoad.load("js/controllers/main.js");
                }]
            }
        })
        .state("adminUser", {
            url: "/adminUser",
            templateUrl: "views/home/adminUser.html",
            controller: "adminUserCtrl",
            resolve: {
                deps: ["$ocLazyLoad", function ($ocLazyLoad) {
                    return $ocLazyLoad.load("js/controllers/adminUser.js");
                }]
            }
        })
};