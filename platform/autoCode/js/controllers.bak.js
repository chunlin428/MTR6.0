/**
 * Created by chunlin on 2016/6/24.
 */
'use strict';

var autoCodeControllers = angular.module('autoCodeControllers',[
    'ui.grid'
]);

autoCodeControllers.controller('DetailCtrl',['$scope',function AutoCodeCTRL($scope,AutoCodeService){

}]);

autoCodeControllers.controller('ListCtrl',['$scope','$http',
    function AutoCodeListCTRL($scope,AutoCodeService,$http){
        $scope.gridOpgions={

        };
        $http.get('/platform/autoCode/data/autoCodeItems.json').success(
            function(data){
                $scope.gridOpgions.data=data;
            }
        );
    $scope.lang='zh-cn';
    var dataJson = [{
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
    }, {
        "ID": "2012071613",
        "Code": "SS",
        "TableName": "TEST1",
        "Format": "11111111",
        "Digits": 4,
        "LastNumber": 1,
        "LastTime": "2015-06-19 13:40:58"
    }, {
        "ID": "2000072937",
        "Code": "WT",
        "TableName": "WF_TASKINSTANCE",
        "Format": "11110000",
        "Digits": 4,
        "LastNumber": 38,
        "LastTime": "2016-06-28 10:24:41"
    }, {
        "ID": "1011030201",
        "Code": "GX",
        "TableName": "LS_INDIVIDUATION_INFO",
        "Format": "11111111",
        "Digits": 5,
        "LastNumber": 16,
        "LastTime": "2015-12-08 14:21:50"
    }, {
        "ID": "2000072936",
        "Code": "WL",
        "TableName": "WF_WORKFLOW_LINKARC",
        "Format": "11110000",
        "Digits": 29,
        "LastNumber": 30,
        "LastTime": "2016-06-27 15:02:35"
    }, {
        "ID": "2010122405",
        "Code": "MR",
        "TableName": "DPS_MESSAGE_RECIPIENT",
        "Format": "11111111",
        "Digits": 5,
        "LastNumber": 64,
        "LastTime": "2012-03-27 00:00:00"
    }, {
        "ID": "2011012501",
        "Code": "LS",
        "TableName": "LS_SYSINFO",
        "Format": "11111111",
        "Digits": 5,
        "LastNumber": 1,
        "LastTime": "2016-05-27 10:35:13"
    }, {
        "ID": "2012071612",
        "Code": "ZZ",
        "TableName": "ZJZ_TEST_TABLE",
        "Format": "11111111",
        "Digits": 3,
        "LastNumber": 2,
        "LastTime": "2013-12-10 17:42:09"
    }, {
        "ID": "2010072905",
        "Code": "TL",
        "TableName": "C_TREEBASE_LEVELICON",
        "Format": "11111111",
        "Digits": 3,
        "LastNumber": 3,
        "LastTime": "2016-04-22 14:29:01"
    }, {
        "ID": "2000071608",
        "Code": "AP",
        "TableName": "APP_DATAINFO",
        "Format": "11111111",
        "Digits": 3,
        "LastNumber": 1,
        "LastTime": "2015-12-07 17:09:25"
    }, {
        "ID": "2000122703",
        "Code": "AC",
        "TableName": "AC_ACTCASE",
        "Format": "11111111",
        "Digits": 4,
        "LastNumber": 2,
        "LastTime": "2015-11-25 15:06:18"
    }, {
        "ID": "2011032222",
        "Code": "FD",
        "TableName": "FILEDATA",
        "Format": "11111111",
        "Digits": 5,
        "LastNumber": 2,
        "LastTime": "2016-06-16 18:55:30"
    }, {
        "ID": "2010081801",
        "Code": "TB",
        "TableName": "C_TABBASE",
        "Format": "11111100",
        "Digits": 3,
        "LastNumber": 1,
        "LastTime": "2016-04-22 09:31:51"
    }, {
        "ID": "2000071609",
        "Code": "AV",
        "TableName": "APP_DATAVIEW",
        "Format": "11111111",
        "Digits": 3,
        "LastNumber": 1,
        "LastTime": "2015-12-07 17:10:04"
    }, {
        "ID": "2010122202",
        "Code": "OR",
        "TableName": "DPS_ORGANIZATION",
        "Format": "11111111",
        "Digits": 7,
        "LastNumber": 8,
        "LastTime": "2016-04-27 15:35:41"
    }, {
        "ID": "2000072934",
        "Code": "WP",
        "TableName": "WF_PHASE",
        "Format": "11110000",
        "Digits": 29,
        "LastNumber": 894,
        "LastTime": "2012-11-20 11:26:54"
    }, {
        "ID": "2010122203",
        "Code": "RO",
        "TableName": "DPS_SE_ROLE",
        "Format": "11111111",
        "Digits": 5,
        "LastNumber": 1,
        "LastTime": "2016-04-27 16:08:53"
    }, {
        "ID": "201009011 ",
        "Code": "CX",
        "TableName": "CQ_DATABASE",
        "Format": "11111111",
        "Digits": 5,
        "LastNumber": 3,
        "LastTime": "2015-12-07 17:31:26"
    }, {
        "ID": "2010072904",
        "Code": "TC",
        "TableName": "C_TREEBASE",
        "Format": "11111100",
        "Digits": 3,
        "LastNumber": 2,
        "LastTime": "2016-04-22 10:10:21"
    }, {
        "ID": "2010120100",
        "Code": "DS",
        "TableName": "DPS_SITE",
        "Format": "11111111",
        "Digits": 5,
        "LastNumber": 26,
        "LastTime": "2012-04-05 00:00:00"
    }, {
        "ID": "2010122402",
        "Code": "MN",
        "TableName": "DPS_MESSAGE",
        "Format": "11111111",
        "Digits": 5,
        "LastNumber": 64,
        "LastTime": "2013-01-22 00:00:00"
    }, {
        "ID": "2000122705",
        "Code": "WI",
        "TableName": "WF_PHASEINSTANCE",
        "Format": "11111111",
        "Digits": 4,
        "LastNumber": 7,
        "LastTime": "2016-06-28 10:24:41"
    }, {
        "ID": "2000072933",
        "Code": "WW",
        "TableName": "WF_WORKFLOW",
        "Format": "11110000",
        "Digits": 5,
        "LastNumber": 6,
        "LastTime": "2016-05-20 10:40:18"
    }, {
        "ID": "2011022222",
        "Code": "FU",
        "TableName": "FILEINFO",
        "Format": "11111111",
        "Digits": 5,
        "LastNumber": 6,
        "LastTime": "2016-06-21 18:03:41"
    }, {
        "ID": "20110720  ",
        "Code": "RB",
        "TableName": "DMD_BUSINESSRELATION",
        "Format": "11111111",
        "Digits": 5,
        "LastNumber": 3,
        "LastTime": "2016-06-22 10:24:47"
    }, {
        "ID": "2011032301",
        "Code": "GP",
        "TableName": "OMD_OBJECTMANAGEVIEW_GROUP",
        "Format": "11111111",
        "Digits": 9,
        "LastNumber": 2,
        "LastTime": "2016-06-23 14:59:19"
    }, {
        "ID": "2000072931",
        "Code": "EE",
        "TableName": "WF_WORKFLOW_PARAMS",
        "Format": "11110000",
        "Digits": 2,
        "LastNumber": 3,
        "LastTime": "2016-05-13 14:43:32"
    }, {
        "ID": "2010090112",
        "Code": "XN",
        "TableName": "DMD_MODELMEMBERS_HISVERSION",
        "Format": "11111111",
        "Digits": 5,
        "LastNumber": 2,
        "LastTime": "2011-04-29 00:00:00"
    }, {
        "ID": "2010072903",
        "Code": "CD",
        "TableName": "C_DATADICTIONARY",
        "Format": "11111100",
        "Digits": 5,
        "LastNumber": 4,
        "LastTime": "2015-12-07 17:34:47"
    }, {
        "ID": "2011032224",
        "Code": "BF",
        "TableName": "BC_FORMAT",
        "Format": "11111111",
        "Digits": 5,
        "LastNumber": 4,
        "LastTime": "2016-05-19 14:55:36"
    }, {
        "ID": "2011032501",
        "Code": "OY",
        "TableName": "OMD_OBJECTMANAGE_PROPERTRY",
        "Format": "11111111",
        "Digits": 9,
        "LastNumber": 4,
        "LastTime": "2016-04-26 11:43:39"
    }, {
        "ID": "2011072913",
        "Code": "OM",
        "TableName": "OMD_OBJECT",
        "Format": "11111111",
        "Digits": 10,
        "LastNumber": 5,
        "LastTime": "2012-01-05 00:00:00"
    }, {
        "ID": "2010122701",
        "Code": "MU",
        "TableName": "DPS_MENU",
        "Format": "11111111",
        "Digits": 5,
        "LastNumber": 84,
        "LastTime": "2013-06-17 09:50:29"
    }, {
        "ID": "2010111307",
        "Code": "BR",
        "TableName": "BS_RESOURCE",
        "Format": "11111100",
        "Digits": 5,
        "LastNumber": 117,
        "LastTime": "2012-11-19 14:21:58"
    }, {
        "ID": "2010090111",
        "Code": "XB",
        "TableName": "DMD_SYSCONFIG_HISTORYVERSION",
        "Format": "11111111",
        "Digits": 3,
        "LastNumber": 1,
        "LastTime": "2016-06-22 10:24:10"
    }, {
        "ID": "2010090109",
        "Code": "XY",
        "TableName": "DMD_SYSCONFIG",
        "Format": "11111111",
        "Digits": 3,
        "LastNumber": 1,
        "LastTime": "2016-04-28 14:55:53"
    }, {
        "ID": "2000072935",
        "Code": "WS",
        "TableName": "WF_WORKFLOW_SUPERVISE",
        "Format": "11111111",
        "Digits": 4,
        "LastNumber": 30,
        "LastTime": "2015-11-27 09:55:44"
    }, {
        "ID": "2010090115",
        "Code": "SO",
        "TableName": "DPS_SECURITYGRADE_OBJECTS",
        "Format": "11111100",
        "Digits": 4,
        "LastNumber": 4,
        "LastTime": "2012-12-24 09:36:31"
    }, {
        "ID": "2012071607",
        "Code": "FN",
        "TableName": "OMD_OBJECT_V_R_FUN",
        "Format": "11111111",
        "Digits": 9,
        "LastNumber": 1,
        "LastTime": "2012-11-29 16:39:01"
    }, {
        "ID": "2010090210",
        "Code": "FS",
        "TableName": "FS_FORMS",
        "Format": "11111111",
        "Digits": 4,
        "LastNumber": 1,
        "LastTime": "2011-04-20 16:09:02"
    }, {
        "ID": "2011032223",
        "Code": "BC",
        "TableName": "BC_CONFIG",
        "Format": "11111111",
        "Digits": 5,
        "LastNumber": 1,
        "LastTime": "2016-05-19 14:55:35"
    }, {
        "ID": "2011072914",
        "Code": "OV",
        "TableName": "OMD_OBJECT_VERSION",
        "Format": "11111111",
        "Digits": 10,
        "LastNumber": 5,
        "LastTime": "2012-01-05 00:00:00"
    }, {
        "ID": "2000071610",
        "Code": "AA",
        "TableName": "APP_DATAVIEWAPP",
        "Format": "11111111",
        "Digits": 3,
        "LastNumber": 1,
        "LastTime": "2012-10-23 00:00:00"
    }, {
        "ID": "2000060101",
        "Code": "TG",
        "TableName": "WF_TASK_GROUP",
        "Format": "11110000",
        "Digits": 6,
        "LastNumber": 34,
        "LastTime": "2016-06-28 10:24:41"
    }, {
        "ID": "2010090110",
        "Code": "XZ",
        "TableName": "DMD_MODELMEMBERS",
        "Format": "11111111",
        "Digits": 5,
        "LastNumber": 1,
        "LastTime": "2016-06-22 10:24:10"
    }, {
        "ID": "2010122201",
        "Code": "US",
        "TableName": "DPS_USER",
        "Format": "11111111",
        "Digits": 5,
        "LastNumber": 8,
        "LastTime": "2015-11-25 15:38:59"
    }, {
        "ID": "2011032201",
        "Code": "VW",
        "TableName": "OMD_OBJECTMANAGE_VIEW",
        "Format": "11111111",
        "Digits": 9,
        "LastNumber": 1,
        "LastTime": "2016-04-26 11:41:41"
    }, {
        "ID": "2011072923",
        "Code": "DR",
        "TableName": "DC_BASEINFO",
        "Format": "11111111",
        "Digits": 4,
        "LastNumber": 4,
        "LastTime": "2016-06-20 11:56:28"
    }, {
        "ID": "2010111302",
        "Code": "BS",
        "TableName": "BS_BUSINESS_RESOURCE",
        "Format": "11111100",
        "Digits": 5,
        "LastNumber": 1,
        "LastTime": "2011-04-20 16:09:01"
    }, {
        "ID": "2010090715",
        "Code": "SB",
        "TableName": "S_BUSINESSSORT",
        "Format": "11111100",
        "Digits": 3,
        "LastNumber": 2,
        "LastTime": "2016-01-14 14:10:34"
    }, {
        "ID": "2010122401",
        "Code": "LO",
        "TableName": "DPS_LOG",
        "Format": "11111111",
        "Digits": 5,
        "LastNumber": 1,
        "LastTime": "2013-08-08 09:55:56"
    }, {
        "ID": "2010052702",
        "Code": "QS",
        "TableName": "QUERY_SYSINFO",
        "Format": "11111111",
        "Digits": 5,
        "LastNumber": 1,
        "LastTime": "2013-01-21 09:53:59"
    }, {
        "ID": "2012071606",
        "Code": "BP",
        "TableName": "BC_INDEPENDENCEFLOW_INSTANCE",
        "Format": "11111111",
        "Digits": 5,
        "LastNumber": 1,
        "LastTime": "2012-09-19 00:00:00"
    }, {
        "ID": "2010090114",
        "Code": "SG",
        "TableName": "DPS_SECURITYGRADE",
        "Format": "11111100",
        "Digits": 4,
        "LastNumber": 8,
        "LastTime": "2013-01-06 00:00:00"
    }, {
        "ID": "2000122704",
        "Code": "WF",
        "TableName": "WF_FLOWINSTANCE",
        "Format": "11111100",
        "Digits": 5,
        "LastNumber": 13,
        "LastTime": "2016-06-28 10:24:41"
    }, {
        "ID": "2010112301",
        "Code": "SC",
        "TableName": "DPS_SE_FUNITEM",
        "Format": "11111100",
        "Digits": 3,
        "LastNumber": 2,
        "LastTime": "2016-04-22 10:16:24"
    }, {
        "ID": "1982032001",
        "Code": "YD",
        "TableName": "TREE_HELP_USE",
        "Format": "11111111",
        "Digits": 10,
        "LastNumber": 1,
        "LastTime": "2015-10-08 09:15:56"
    }, {
        "ID": "2010122406",
        "Code": "MT",
        "TableName": "DPS_MESSAGE_TYPE",
        "Format": "11111111",
        "Digits": 5,
        "LastNumber": 1,
        "LastTime": "2015-11-19 14:34:51"
    }, {
        "ID": "2011072916",
        "Code": "OF",
        "TableName": "OMD_OBJECT_FUNCTION",
        "Format": "11111111",
        "Digits": 10,
        "LastNumber": 9,
        "LastTime": "2011-11-18 00:00:00"
    }, {
        "ID": "2011072917",
        "Code": "OL",
        "TableName": "OMD_OBJECT_RELATION",
        "Format": "11111111",
        "Digits": 10,
        "LastNumber": 5,
        "LastTime": "2012-01-05 00:00:00"
    }, {
        "ID": "2012071608",
        "Code": "MO",
        "TableName": "DPS_COMMON_MODULEMENU",
        "Format": "11111111",
        "Digits": 5,
        "LastNumber": 10,
        "LastTime": "2015-12-08 15:53:19"
    }, {
        "ID": "2012071609",
        "Code": "MF",
        "TableName": "DPS_MODULE_FUNCTION",
        "Format": "11111111",
        "Digits": 5,
        "LastNumber": 234,
        "LastTime": "2015-12-11 16:20:21"
    }, {
        "ID": "2000072000",
        "Code": "PA",
        "TableName": "P_PACKAGEINFO",
        "Format": "11111111",
        "Digits": 4,
        "LastNumber": 2,
        "LastTime": "2016-06-20 15:31:45"
    }, {
        "ID": "2000072001",
        "Code": "PF",
        "TableName": "P_PAFUCTION",
        "Format": "11111111",
        "Digits": 4,
        "LastNumber": 3,
        "LastTime": "2016-03-25 15:52:03"
    }, {
        "ID": "2000072002",
        "Code": "PI",
        "TableName": "P_PAFILELIST",
        "Format": "11111111",
        "Digits": 4,
        "LastNumber": 5,
        "LastTime": "2016-03-25 15:52:03"
    }, {
        "ID": "2000072003",
        "Code": "PD",
        "TableName": "P_PADATABASE",
        "Format": "11111111",
        "Digits": 4,
        "LastNumber": 219,
        "LastTime": "2016-06-20 15:31:46"
    }, {
        "ID": "2012071611",
        "Code": "ZT",
        "TableName": "ZJZ_TEST_TREE",
        "Format": "11111111",
        "Digits": 3,
        "LastNumber": 12,
        "LastTime": "2013-07-23 15:15:49"
    }, {
        "ID": "2012071614",
        "Code": "CT",
        "TableName": "CQ_QUERYMEMBERS",
        "Format": "11111100",
        "Digits": 4,
        "LastNumber": 22,
        "LastTime": "2015-12-07 17:31:26"
    }, {
        "ID": "2012071615",
        "Code": "ZE",
        "TableName": "Z_TEST_TREE",
        "Format": "11111111",
        "Digits": 5,
        "LastNumber": 5,
        "LastTime": "2014-02-20 11:22:38"
    }, {
        "ID": "2000071616",
        "Code": "SE",
        "TableName": "DEM_SCENE",
        "Format": "11111111",
        "Digits": 3,
        "LastNumber": 2,
        "LastTime": "2016-02-17 15:24:45"
    }, {
        "ID": "2000091722",
        "Code": "ST",
        "TableName": "SUNHUITEST",
        "Format": "11111100",
        "Digits": 3,
        "LastNumber": 1,
        "LastTime": "2015-06-29 09:41:06"
    }, {
        "ID": "2012071616",
        "Code": "ZL",
        "TableName": "ZLTREETEST",
        "Format": "11110000",
        "Digits": 3,
        "LastNumber": 3,
        "LastTime": "2015-06-19 13:48:38"
    }, {
        "ID": "2012071617",
        "Code": "PY",
        "TableName": "PYTESTA",
        "Format": "11111100",
        "Digits": 3,
        "LastNumber": 1,
        "LastTime": "2015-06-19 13:46:39"
    }, {
        "ID": "2012071618",
        "Code": "HD",
        "TableName": "AC_TYPE",
        "Format": "11110000",
        "Digits": 3,
        "LastNumber": 1,
        "LastTime": "2015-10-13 00:00:00"
    }, {
        "ID": "2012071619",
        "Code": "FF",
        "TableName": "AUDIT_RELATION",
        "Format": "11110000",
        "Digits": 3,
        "LastNumber": 2,
        "LastTime": "2015-10-13 00:00:00"
    }, {
        "ID": "2012071620",
        "Code": "XX",
        "TableName": "TREENAV0420",
        "Format": "11110000",
        "Digits": 3,
        "LastNumber": 6,
        "LastTime": "2016-04-22 14:33:25"
    }, {
        "ID": "2012071621",
        "Code": "DD",
        "TableName": "AA",
        "Format": "11110000",
        "Digits": 3,
        "LastNumber": 3,
        "LastTime": "2016-05-04 00:00:00"
    }];
    $scope.codeItems=dataJson;


}]);