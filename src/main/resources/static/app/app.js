'use strict';

angular
    .module('highSchoolUIApp', ['ngResource', 'ngRoute', 'ngCookies', 'controllers'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'home.html',
                controller: 'HomeCtrl'
            })
            .otherwise({
                redirectTo: '/'
            })
    });
