/**
 * Created by chunlin on 2016/6/24.
 */

'use strict';

var mtr6 = angular.module('mtr6', [
    'ngRoute',
    'mtr6Controllers',
    'autoCodeControllers'
]);

mtr6.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            templateUrl: 'platform/partials/main.html',
            controller: 'MainCtrl'
        }).when('/auto/list', {
            templateUrl: 'platform/autoCode/partials/list-ui-grid.html',
            controller: 'ListCtrl'
        }).when('/auto/detail/:ID', {
            templateUrl: 'platform/autoCode/partials/detail.html',
            controller: 'DetailCtrl'
        }).otherwise({redirectTo:'/'});

        $locationProvider.html5Mode(false).hashPrefix('!');
    }]);

mtr6.controller('Mtr6Ctrl', ['$scope', function Mtr6Ctrl($scope) {
    $scope.click = function ($event) {
        var currTarget = $event.currentTarget;
        $('.active').removeClass('active');
        $(currTarget).parent().addClass('active');
    }   

}]);