/**
 * Created by zlin on 2017-4-10.
 */
define(['jquery','underscore','backbone','zTree'],function ($,_,Backbone,zTree) {

    'use strict';

    var ztreeView = Backbone.View.extend({
        initialize:function (options) {
            this._options={};
            if (!options||!options.container){
                //TODO:应该直接抛参数错误异常
                return;
            }

            $.extend(true,this._options,options);

            //
            if(_.isString(options["container"])){
                this._options["treeId"]=options["container"];
            }

            if(_.has(options,'server')){
                //TODO:从服务器端取配置信息


            }


            if(!_.has(options,'data')&&_.has(options,'dataUrl')){
                //TODO:从服务器端取数据.需向服务器端传递code
            }





            // if (!options.data)
            //     return;

            // if (options.settings) setting = options.settings;
            // this.currentTreeView = $.fn.zTree.init(options.container, _options["settings"], _options["data"]);

        },
        render:function () {
            $.fn.zTree.init(this._options['container'], this._options["settings"], this._options["data"]);
            return this;
        }
    });

    return ztreeView;

});