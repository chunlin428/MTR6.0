/**
 * Created by chunlin on 2016/6/24.
 */
'use strict';

var autoCodeControllers = angular.module('autoCodeControllers',[
'ui.grid'
]);

autoCodeControllers.controller('DetailCtrl',['$scope',function DetailCtrl($scope,AutoCodeService){

}]);

autoCodeControllers.controller('ListCtrl',['$scope','$http',
    function ListCtrl($scope,AutoCodeService,$http){
        $scope.gridOpgions={
            columnDefs:[
                {field:'ID'},
                {field:'Code'},
                {field:'TableName'},
                {field:'Format'},
                {field:'Digits'},
                {field:'LastNumber'},
                {field:'LastTime'}
            ]

        };

        //$http.get('platform/autoCode/data/autoCodeItems.json').success(
        //    function(data){
        //        $scope.gridOpgions.data=data;
        //    }
        //);
        var data=[{
            "ID": "2010090113",
            "Code": "SU",
            "TableName": "DPS_SECURITYGRADE_USER",
            "Format": "11111111",
            "Digits": 4,
            "LastNumber": 5,
            "LastTime": "2015-06-19 13:37:57"
        }, {
            "ID": "2011072920",
            "Code": "CF",
            "TableName": "CONTROL_FUNCTION",
            "Format": "11111111",
            "Digits": 5,
            "LastNumber": 7,
            "LastTime": "2015-11-18 14:37:46"
        }, {
            "ID": "2011072915",
            "Code": "OA",
            "TableName": "OMD_OBJECT_ATTRIBUTEINFO",
            "Format": "11111111",
            "Digits": 10,
            "LastNumber": 12,
            "LastTime": "2012-01-05 00:00:00"
        }];
        $scope.gridOpgions.data=data;

}]);
