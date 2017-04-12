/********************************************************
* COPYRIGHT (C) 2010 瑞风科技
* ALL RIGHTS RESERVED.
*
* 文件名：RfSoft.MapleTr.Tree.Engine.js
* 摘要：部件树对外接口js文件
*
*
* 当前版本：1.0.0.1
* 作者： sunh
* 负责人：sunh,20170406
* 完成日期：20170406
* 变更记录： 
*            20170406,sunh,新增文件。
********************************************************/
'use strict';

(function ($) {

    var _options = {
        settings: {
            data: {
                simpleData: {
                    enable: true,
                    idKey: "id",
                    pIdKey: "pId"
                }
            }
        }
    };

    var currentTreeView = {
        addNodes: null
    };

    /*************Begin:用户自定义私有方法，其他js不可见*************/

    /**
     *初始化Tree
     * @param {Object} options:{
     *                            {Object} settings:树设置信息,
     *                            {Object} data:数据
     *                         }
     */
    var init = function (options) {
        if (!options) {
            //TODO:应该直接抛参数错误异常
            throw new Error("缺少参数：options未传入！");
        }
        if (!_.has(options, 'container')) {
            //TODO:应该直接抛参数错误异常
            throw new Error("缺少参数：树容器未传入！");
        }
        $.extend(true, _options, options);

        if (_.has(_options, 'server') && _.has(_options['server'], 'url') && _.has(_options['server'], 'code') && _.has(_options['server'], 'actionType')) {
            //TODO:从服务器端取配置信息


        }
        currentTreeView = $.fn.zTree.init(_options['container'], _options['settings'], _options['data']);
        return this;
    };
    /*    var getTreeObj = function (treeId) {
            currentTreeView = $.fn.zTree.getZTreeObj(treeId);
            return currentTreeView;
        }*/
    var getSelectedNodes = function () {
        return currentTreeView.getSelectedNodes();
    };

    var addClickEvent = function (callBack) {
    var setting={
        callback:{
            onClick:callBack
        }
    };
    $.extend(true, currentTreeView.setting, setting);
};
    var addNodes = function (parentNode, newNodes, isSlient) {
        currentTreeView.addNodes(parentNode, "-1", newNodes, isSlient);
    };
    var editNode = function (treeNode) {
        currentTreeView.editName(treeNode);
    };
    var removeNode = function (treeNode) {
        currentTreeView.removeNode(treeNode);
    };

    /*************End:用户自定义私有方法，其他js不可见*************/



    /*************Begin:公共方法。也即用户API*************/
    $.fn.extend({MTRTreeView:{

        /*新增接口----------------------开始--------------------------*/
        Init: init,
        // GetTreeObj: getTreeObj,
        AddNodes: addNodes,
        EditNode: editNode,
        RemoveNode: removeNode,
        GetSelectedNodes: getSelectedNodes,
        AddClickEvent:addClickEvent
        /*新增接口----------------------结束--------------------------*/

        /*************End:公共方法。也即用户API*************/
    }});

    window.MTRTreeView = {

        /*新增接口----------------------开始--------------------------*/
        Init: init,
        // GetTreeObj: getTreeObj,
        AddNodes: addNodes,
        EditNode: editNode,
        RemoveNode: removeNode,
        GetSelectedNodes: getSelectedNodes,
        AddClickEvent:addClickEvent
        /*新增接口----------------------结束--------------------------*/

        /*************End:公共方法。也即用户API*************/
    };

}(jQuery));