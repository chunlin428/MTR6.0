

require.config({
    paths:{
        jquery:'../lib/jquery/1.12.4/jquery.min',
        underscore:'../lib/backbone/underscore',
        zTree:'../lib/zTree/3.5.28/js/jquery.ztree.all',
        mtr:'../platform'
    },
    shim:{
        jquery:{
            exports:'$'
        },
        underscore:{
            exports:'_'
        },
        zTree:{
            deps:['jquery'],
            exports:'zTree'
        }
    }
});

require(['jquery','mtr/treeView/2.0/js/mtrTV'],function ($,mtrTree) {
    $.extend({
        rtrim:function (text) {
            return (text||'').replace(/^\s+/g,'');
        },
        ltrim:function (text) {
            return (text||'').replace(/\s+$/g,'');
        }
    });

    $(function () {
        var setting={
            /* callback:{
             onClick:ff
             }*/
        };

        function filter() {
            var zNodes = [];
            for (var i = 0; i < 10; i++) {
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
        var options = { container: $("#div_Tree"), settings: setting, data: filter() };

        new mtrTree(options);
    })


});
