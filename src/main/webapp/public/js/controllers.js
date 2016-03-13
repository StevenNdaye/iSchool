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

    $scope.gotoReportScreen = function () {
        $location.path('/reports');
    };
}]);

controllers.controller('StudentRegistrationCtrl', ['$scope', '$http', '$interval', '$location', function ($scope, $http, $interval, $location) {
    $scope.reg_classes = ["Class one", "Class two", "Class three", "Class four", "Class five", "Class six"];
    $scope.selectedClass = undefined;

    $scope.handleSelectedItem = function (reg_class) {
        $scope.selectedClass = reg_class;
    };

    $scope.goBack = function () {
        $location.path('/');
    };

    $scope.register = function () {

    };
}]);

controllers.controller('StudentAttendanceCtrl', ['$scope', '$http', '$interval', '$location', function ($scope, $http, $interval, $location) {

}]);

controllers.controller('ReportsCtrl', ['$scope', '$http', '$interval', '$location', function ($scope, $http, $interval, $location) {

}]);

