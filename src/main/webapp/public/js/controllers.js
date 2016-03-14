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
                $scope.firstName = '';
                $scope.surname = '';
                $scope.studentNumber = '';
                $scope.birthDate = '';
                $scope.registeredTo = 'Select';

            }).error(function (data, status) {
                console.log(status);
            });
        } else {
        }
    };
}]);

controllers.controller('StudentAttendanceCtrl', ['$scope', '$http', '$interval', '$location', function ($scope, $http, $interval, $location) {

    $scope.date = new Date();
    $scope.attendanceList = [];
    $scope.initialize = function () {
        $http.get('/students').success(function (data) {
            _.each(data, function (student) {
                var attendance = {
                    student: student,
                    presence: false,
                    date: $scope.date
                };

                $scope.attendanceList.push(attendance);
            });
        });
    };

    $scope.goBack = function () {
        $location.path('/');
    };

    $scope.processAttendance = function (attendanceList) {
        $scope.attendanceList = attendanceList;

        $http({
            method: 'POST',
            url: '/attendance',
            headers: {'Content-Type': 'application/json'},
            data: $scope.attendanceList
        }).success(function (data) {
            $scope.listSubmitted = true;
        }).error(function (data, status) {
            console.log(status);
        });

    };

}]);

controllers.controller('ReportsCtrl', ['$scope', '$http', '$interval', '$location', function ($scope, $http, $interval, $location) {

}]);

