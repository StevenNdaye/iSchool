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

controllers.controller('StudentAttendanceCtrl', ['$scope', '$http', '$interval', '$location', '$filter', function ($scope, $http, $interval, $location, $filter) {

    $scope.date = new Date();
    var _date = $filter('date')(new Date($scope.date), 'yyyy-MM-dd');
    $scope.attendanceList = [];
    $scope.listSubmitted = false;

    $scope.initialize = function () {
        $http.get('/students').success(function (data) {
            if (data.length > 0) {
                _.each(data, function (student) {
                    var attendance = {
                        student: student,
                        presence: false,
                        date: _date
                    };

                    $scope.attendanceList.push(attendance);
                });
            } else {
                $scope.attendanceList = [];
            }
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

    $scope.updateGrid = function () {
        $http.get('/students?className=' + $scope.filteredBy).success(function (data) {
            if (data.length > 0) {
                $scope.attendanceList = [];
                _.each(data, function (student) {
                    var attendance = {
                        student: student,
                        presence: false,
                        date: _date
                    };

                    $scope.attendanceList.push(attendance);
                });
            } else {
                $scope.attendanceList = [];
            }
        });
    };

}]);

controllers.controller('ReportsCtrl', ['$scope', '$http', '$interval', '$location', '$filter', function ($scope, $http, $interval, $location, $filter) {

    $scope.showReportType = false;
    $scope.showDate = false;
    $scope.showTerms = false;
    $scope.canNotViewReport = true;
    var classToReport, reportType;

    $scope.handleClassSelection = function () {
        $scope.showReportType = true;
        classToReport = $scope.className;
    };

    $scope.handleReportType = function () {
        reportType = $scope.reportType;

        if (reportType == 'daily_report') {
            $scope.showDate = true;
            $scope.showTerms = false;

        } else if (reportType == 'termsReport') {
            $scope.showTerms = true;
            $scope.showDate = false;
            $scope.canNotViewReport = false;
        }
    };

    $scope.handleTermChoice = function () {
        $scope.canNotViewReport = false;
    };

    $scope.handleDateSelection = function () {
        $scope.canNotViewReport = false;
    };

    $scope.viewReport = function () {
        if ($scope.showDate == true) {
            var _date = $filter('date')(new Date($scope.selectedDate), 'yyyy-MM-dd');
            $http.get('/attendance?className=' + classToReport + '&attendanceDate=' + _date).success(function (data) {
                if (data.length > 0) {
                    console.log(data);
                } else {
                }
            });
        } else if ($scope.showTerms == true) {
            var selectedTerm = $scope.termSelected;
            $http.get('/attendance?className=' + classToReport + '&term=' + selectedTerm).success(function (data) {
                if (data.length > 0) {
                    console.log(data);
                } else {

                }
            });
        }
    };

    $scope.goBack = function () {
        $location.path('/');
    };

}]);

