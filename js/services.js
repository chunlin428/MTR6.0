/**
 * Created by chunlin on 2016/6/24.
 */

var mtr6Services = angular.module('mtr6Services',['ngResource','ngCookies']);

mtr6Services.factory('Login',['$resource',
    function($resource){
        //return $resource('services/login.ashx',{},{
        return $resource('js/user.json',{},{
            login:{method:'GET',cache:false,isArray:false}
        });
    }
]);

/**
 * 检验用户认证信息
 */
mtr6Services.factory('checkCreds',['$cookies',
    function($cookies){
        return function (){
            var returnVal = false;
            if($cookies.creds)
            {
                returnVal= true;
            }
            return returnVal;
        };
    }]);

/**
 * 设置用户身份认证信息
 */
mtr6Services.factory('setCreds',['$cookies',
    function($cookies){
        //un 用户名，pw 密码
        return function (un,pw){
            //认证信息，格式为 username:password
            var token = un.concat(':',pw);
            //用户信息放入到cookie中
            $cookies.creds=token;
            $cookies.userName=un;
        };
    }]);