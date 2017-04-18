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
        .state("kitchenware", {
            url: "/kitchenware",
            templateUrl: "views/kitchenware/kitchenware.html",
            controller: "kitchenCtrl",
            resolve: {
                deps: ["$ocLazyLoad", function ($ocLazyLoad) {
                    return $ocLazyLoad.load("js/controllers/kitchenware/kitchenCtrl.js");
                }]
            }
        })
        .state("accessorice", {
            url: "/accessorice",
            templateUrl: "views/accessorice/accessorice.html",
            controller: "accessCtrl",
            resolve: {
                deps: ["$ocLazyLoad", function ($ocLazyLoad) {
                    return $ocLazyLoad.load("js/controllers/accessorice/accessCtrl.js");
                }]
            }
        })
        .state("groceries", {
            url: "/groceries",
            templateUrl: "views/groceries/groceries.html",
            controller: "grocerCtrl",
            resolve: {
                deps: ["$ocLazyLoad", function ($ocLazyLoad) {
                    return $ocLazyLoad.load("js/controllers/groceries/grocerCtrl.js");
                }]
            }
        })
        .state("foods", {
            url: "/foods",
            templateUrl: "views/foods/foods.html",
            controller: "foodsCtrl",
            resolve: {
                deps: ["$ocLazyLoad", function ($ocLazyLoad) {
                    return $ocLazyLoad.load("js/controllers/foods/foodsCtrl.js");
                }]
            }
        })
        .state("interest", {
            url: "/interest",
            templateUrl: "views/interest/interest.html",
            controller: "interestCtrl",
            resolve: {
                deps: ["$ocLazyLoad", function ($ocLazyLoad) {
                    return $ocLazyLoad.load("js/controllers/interest/interestCtrl.js");
                }]
            }
        })
};