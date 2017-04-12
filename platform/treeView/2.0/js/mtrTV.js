/**
 * Created by zlin on 2017-4-10.
 */
define(['jquery','underscore','zTree'],function ($,_) {
    'use strict';
    var mtrTreeView = function (options) {
        if (!options) {
            //TODO:应该直接抛参数错误异常
            throw new Error("缺少参数：options未传入！");
        }

        if (!_.has(options, 'container')) {
            //TODO:应该直接抛参数错误异常
            throw new Error("缺少参数：树容器未传入！");
        }


        return $.fn.zTree.init(options['container'], options['settings'], options['data']);
    };

    return mtrTreeView;
});