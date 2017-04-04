"use strict"
app.config(["$stateProvider", "$urlRouterProvider", routeFn]);
function routeFn($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/main");
    $stateProvider
        .state("main", {
            url: "/main",
            templateUrl: "views/main/main.html",
            controller: "mainCtrl",
            resolve: {
                deps: ["$ocLazyLoad", function ($ocLazyLoad) {
                    return $ocLazyLoad.load("js/controllers/main/mainCtrl.js");
                }]
            }
        })
        .state("home", {
            url: "/home",
            templateUrl: "views/home/home.html",
            controller: "homeCtrl",
            resolve: {
                deps: ["$ocLazyLoad", function ($ocLazyLoad) {
                    return $ocLazyLoad.load("js/controllers/home/homeCtrl.js");
                }]
            }
        })
};