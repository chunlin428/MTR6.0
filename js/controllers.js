/**
 * Created by chunlin on 2016/6/24.
 */
'use strict';

var mtr6Controllers=angular.module('mtr6Controllers',[]);

mtr6Controllers.controller('MainCtrl',['$scope','$location','checkCreds',
    function MainCtrl($scope,$location,checkCreds){
        if(!checkCreds()){
            //未通过身份验证,跳往登陆界面
            $location.path('/login');
        }
}]);

mtr6Controllers.controller('LoginCtrl',['$scope','$location','checkCreds','Login','setCreds',
    function($scope,$location,checkCreds,Login,setCreds){
        if(checkCreds()){ //已通登陆则转向主界面
            $location.path('/');
        }

        //提交表单
        $scope.submit=function(){
            $scope.sub=true;
            var postData={
                'userName':$scope.username,
                'password':$scope.password
            };

            //提交数据
            Login.login({},postData,
                function success(response){ //向服务器端请成成功时执行
                    console.log('Success'+JSON.stringify(response));
                    console.log(response);
                    console.log(response['authenticated']);
                    //通过身份认证
                    if(response.authenticated){
                        //保存认证信息
                        setCreds($scope.username,$scope.password);
                        //跳往主页面
                        $location.path('/');
                    }
                    else {
                        $scope.error='登陆失败';
                    }
                },
                function error(errorResponse){ //向服务器端请求失败时执行
                    console.log('Error:'+JSON.stringify(errorResponse));
                });

        };
}]);