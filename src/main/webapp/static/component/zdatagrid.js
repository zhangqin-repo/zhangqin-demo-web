(function($) {
    // 重写 datarid 默认的 loadFilter 函数
    $.extend($.fn.datagrid.defaults, {
        loadFilter:function(data){
            return $_fn.gridLoadFilter(data);
        }
    });
    
    // zdatagrid
	$.fn.zdatagrid = function(param,arg){
        if(typeof param == "string"){
            return $.fn.datagrid.methods[param](this,arg);
        }
        
        // easyui默认公共配置
        var _param = {
            method : 'post',
            align : 'center',
            fit:true,
            singleSelect : false,
            rownumbers : true,
            pagination : true,
            fitColumns : false,
            showFooter : true,
            pageSize : 50,
            height : '100%',
            width : '100%',
            pageList:[50,100,200,300,500],
            edit:false
        };
        _param = $.extend(_param,param);
        
        var _datagrid = $(this).datagrid(_param);
        return _datagrid;
    }
	
})(jQuery);
