'use strict';

var iSchool = angular
    .module('iSchool', [
        'ngRoute',
        'ui.bootstrap',
        'controllers'
    ]).config(['$routeProvider', '$locationProvider',
        function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);

            $routeProvider.
            when('/', {
                templateUrl: '/partials/_index.html',
                controller: 'IndexCtrl'
            }).
            when('/register-student', {
                templateUrl: '/partials/_register-student.html',
                controller: 'StudentRegistrationCtrl'
            }).
            when('/student-attendance', {
                templateUrl: '/partials/_student-attendance.html',
                controller: 'StudentAttendanceCtrl'
            }).
            when('/reports', {
                templateUrl: '/partials/_reports.html',
                controller: 'ReportsCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
        }
    ])
    .run(['$rootScope', function ($rootScope) {
        $rootScope.currentYear = new Date().getFullYear();
    }]);