/**
 * Created by chunlin on 17-4-10.
 */
require.config({
    paths:{
        jquery:'../../lib/jquery/1.4.4/jquery.min',
        zTree:'../../lib/zTree/3.5.28/js/jquery.ztree.all'
    },
    shim:{
        'jquery':{
            exports:'$'
        },
        'zTree': {
            deps: ['jquery'],
            exports: 'zTree'
        }
    }
});

require(['jquery','zTree'],function ($) {
    var setting = {
        data: {
            simpleData: {
                enable: true,
                idKey: "id",
                pIdKey: "pId"
            }
        },
        view: {
            selectedMulti: false
        }
    }

    function filter() {
        var zNodes = [];
        for (var i = 0; i < 1000; i++) {
            var obj = { id: (i + 1), pId: 0, name: "父节点" + (i + 1) };
            zNodes.push(obj);
            for (var j = 0; j < 3; j++) {
                var obj = { id: (i + 1).toString() + "000" + (j + 1).toString(), pId: (i + 1), name: "父节点" + (i + 1).toString() + "000" + (j + 1).toString() };
                zNodes.push(obj);
                for (var z = 0; z < 3; z++) {
                    var obj = { id: (i + 1).toString() + "000" + (j + 1).toString() + (z + 1).toString(), pId: (i + 1).toString() + "000" + (j + 1).toString(), name: "父节点" + (i + 1).toString() + "000" + (j + 1).toString() + (z + 1).toString() };
                    zNodes.push(obj);
                }
            }
        }
        return zNodes;
    }

    var zNodes = filter();

    $(document).ready(function(){
        $.fn.zTree.init($("#treeContainer"), setting, zNodes);
    });
});