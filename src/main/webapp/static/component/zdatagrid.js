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
	
    /*datagrid 常用方法封装 不显示直接使用 $('').datagrid('method') 改成 $().zdatagrid('method')  方便维护替换*/
	$.fn.zdatagrid.methods = {
		getRows : function(jq) {
			return $(jq[0]).datagrid('getRows');
		},
		getChecked : function(jq) {
			return $(jq[0]).datagrid('getChecked');
		},
		getSelected : function(jq) {
			return $(jq[0]).datagrid('getSelected');
		},
		options : function(jq) {
			return $(jq[0]).datagrid('options');
		},
		loadData : function(jq, arg) {
			return $(jq[0]).datagrid('loadData', arg);
		},
		load : function(jq, arg) {
			if (arg) {
				return $(jq[0]).datagrid('load', arg);
			} else {
				return $(jq[0]).datagrid('load');
			}
		},
		resize : function(jq, arg) {
			if (arg) {
				return $(jq[0]).datagrid('resize', arg);
			} else {
				return $(jq[0]).datagrid('resize');
			}
		},
		getPanel : function(jq) {
			return $(jq[0]).datagrid('getPanel');
		},
		appendRow : function(jq, arg) {
			return $(jq[0]).datagrid('appendRow', arg);
		},
		updateRow : function(jq, arg) {
			return $(jq[0]).datagrid('updateRow', arg);
		},
		acceptChanges : function(jq) {
			return $(jq[0]).datagrid('acceptChanges');
		},
		refreshRow : function(jq, arg) {
			return $(jq[0]).datagrid('refreshRow', arg);
		},
		insertRow : function(jq, arg) {
			return $(jq[0]).datagrid('insertRow', arg);
		},
		deleteRow : function(jq, arg) {
			return $(jq[0]).datagrid("deleteRow", arg);
		},
		selectRow : function(jq, arg) {
			return $(jq[0]).datagrid('selectRow', arg)
		},
		checkRow : function(jq, arg) {
			return $(jq[0]).datagrid('checkRow', arg)
		},
		getSelections : function(jq, arg) {
			return $(jq[0]).datagrid('getSelections')
		},
		reloadFooter : function(jq, arg) {
			return $(jq[0]).datagrid('reloadFooter', arg)
		},
		beginEdit : function(jq, arg) {
			return $(jq[0]).datagrid('beginEdit', arg)
		},
		endEdit : function(jq, arg) {
			return $(jq[0]).datagrid("endEdit", arg);
		},
		getRowIndex : function(jq, arg) {
			return $(jq[0]).datagrid("getRowIndex", arg);
		},
		getEditor : function(jq, arg) {
			return $(jq[0]).datagrid("getEditor", arg);
		},
		getEditors : function(jq, arg) {
			return $(jq[0]).datagrid("getEditors", arg);
		},
		keyCtr : function(jq, arg) {
			return $(jq[0]).datagrid('keyCtr')
		},
		textChange : function(jq, arg) {
			return $(jq[0]).datagrid('textChange');
		},
		inputEventBind : function(jq, arg) {
			return $(jq[0]).datagrid('inputEventBind');
		}
	}
	
})(jQuery);
