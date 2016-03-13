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
    $scope.regSuccess = false;
    $scope.selectedClass = undefined;

    $scope.handleSelectedItem = function (reg_class) {
        $scope.selectedClass = reg_class;
    };

    $scope.goBack = function () {
        $location.path('/');
    };

    $scope.register = function () {
        $scope.student = {
            firstName: $scope.firstName,
            surname: $scope.surname,
            studentNumber: $scope.studentNumber,
            birthDate: $scope.birthDate,
            registeredTo: $scope.registeredTo
        };

        if ($scope.form.$valid) {
            $http({
                method: 'POST',
                url: '/students',
                data: $scope.student
            }).success(function (data) {
                $scope.regSuccess = true;
                $scope.firstName='';
                $scope.surname='';
                $scope.studentNumber='';
                $scope.birthDate='';
                $scope.registeredTo='Select';

            }).error(function (data, status) {
                console.log(status);
            });
        } else {
            console.log($scope.student);
        }
    };
}]);

controllers.controller('StudentAttendanceCtrl', ['$scope', '$http', '$interval', '$location', function ($scope, $http, $interval, $location) {

}]);

controllers.controller('ReportsCtrl', ['$scope', '$http', '$interval', '$location', function ($scope, $http, $interval, $location) {

}]);

