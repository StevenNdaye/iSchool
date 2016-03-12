'use strict';

var controllers = angular
    .module('controllers', []);

controllers.controller('IndexCtrl', ['$scope', '$http', '$interval', '$location', function ($scope, $http, $interval, $location) {
    $scope.gotoStudentRegistrationScreen = function () {
        $location.path('/register-student');
    };

    $scope.gotoStudentAttendanceScreen = function () {
        $location.path('/student-attendance');
    };

    $scope.gotoStudentAttendanceScreen = function () {
        $location.path('/reports');
    };
}]);

controllers.controller('StudentRegistrationCtrl', ['$scope', '$http', '$interval', '$location', function ($scope, $http, $interval, $location) {

}]);

controllers.controller('StudentAttendanceCtrl', ['$scope', '$http', '$interval', '$location', function ($scope, $http, $interval, $location) {

}]);

controllers.controller('ReportsCtrl', ['$scope', '$http', '$interval', '$location', function ($scope, $http, $interval, $location) {

}]);

