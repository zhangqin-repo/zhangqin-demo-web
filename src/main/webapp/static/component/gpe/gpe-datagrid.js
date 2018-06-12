(function($) {
//	$.extend($.fn.datagrid.defaults, {
//		loader : function(_86f, _870, _871) {
//			var opts = $(this).datagrid("options");
//			if (!opts.url) {
//				return false;
//			}
//			$.ajax({
//				type : opts.method,
//				url : opts.url,
//				data : JSON.stringify(_86f),
//				dataType : "json",
//				contentType : "application/json",
//				success : function(data) {
//					_870(data);
//				},
//				error : function() {
//					_871.apply(this, arguments);
//				}
//			});
//		}
//	});
    
	// gpedatagrid
	$.fn.gpedatagrid = function(param, arg) {
		if (typeof param == "string") {
            return $.fn.gpedatagrid.methods[param](this,arg);
        }
		
		// 参数
		var _this = this;
		
		// easyui默认公共配置,已在zdatagrid有定义。有特殊的可以再覆盖
		var _param = {};
		_param = $.extend(_param,param);
		
		// findGridResult请求路径
		var _findGridResultUrl = param.url + '/gpe/findGridResult?timestamp=' + new Date().getTime();
		var _findListPageUrl = param.url + '/gpe/findListPage?timestamp=' + new Date().getTime();
		var _exportUrl = param.url + '/gpe/export?timestamp=' + new Date().getTime();
		
		// 开启列设置功能
		if(_param.settingBtn){
			$("#"+_param.settingBtn).on("click", function() {
				parent.layer.open({
					type : 1,
					title : "列设置",
					skin : 'layui-layer-rim', // 加上边框
					area : [ '750px', '500px' ], // 宽高
					content : '<table id="gpeUserSettingGrid"></table>',
					btn: ['保存', '重置', '取消']
				});
				
				var gpeSettingClass = new GpeSettingClass(param.url);
				gpeSettingClass.initGpeParams(param);
				gpeSettingClass.initGpeDataGrid();
			});
		}
		
		// 开启导出功能
		if(_param.exportBtn){
			$("#" + _param.exportBtn).on("click", function() {
				var index = layer.msg('导出选项', {
					time : 1000 * 60 * 60,
					btn : [ '导出当前页', '导出所有页' ],
					yes: function(index){
						var options = $(_this[0]).datagrid('options');
						var queryParams = options.queryParams;
						queryParams.rows = options.pageSize;
						queryParams.page = options.pageNumber;
						
						exportData(queryParams,_exportUrl);
						layer.close(index);
					},
					btn2: function(){
						var queryParams = $(_this[0]).datagrid('options').queryParams;
						delete queryParams.rows;
						delete queryParams.page;
						exportData(queryParams,_exportUrl);
						layer.close(index);
					}
				});
			});
		}
		
		// 开启打印功能
		if(_param.printBtn){
			$("#" + _param.printBtn).on("click", function() {
				var index = layer.msg('打印选项', {
					time : 1000 * 60 * 60,
					btn : [ '打印当前页', '打印所有页' ],
					yes: function(index){
						var options = $(_this[0]).datagrid('options');
						var queryParams = options.queryParams;
						queryParams.rows = options.pageSize;
						queryParams.page = options.pageNumber;
						
						printPreview(queryParams,param.url);
						layer.close(index);
					},
					btn2: function(){
						var queryParams = $(_this[0]).datagrid('options').queryParams;
						delete queryParams.rows;
						delete queryParams.page;
						printPreview(queryParams,param.url);
						layer.close(index);
					}
				});
			});
		}
		
		// 请求
		$_fn.ajax({
			method : 'get',
			url : _findGridResultUrl,
			async : false,
			data : {},
		}, function(result) {
			if (result.code == 0) {
				// 普通列信息
				var columns = result.data.columns;
				_param.columns = convertToEasyuiColumns(columns);
				
				// TODO 冻结列信息
				
				// 数据请求地址
				_param.url = _findListPageUrl;
				
				// 创建datagrid
				createDatagrid(_param);
			}
		});

		// 转换为easyui格式的columns
		function convertToEasyuiColumns(columns) {
			// 遍历二维数组
			$.each(columns, function(i, array) {
				// 遍历每一个字段
				$.each(array, function(index, column) {
					// 碰到有EASYUI_FORMATTER特殊标记的字段时，为该字段添加一个函数
					if (column.docks && column.docks.contains("EASYUI_FORMATTER")) {
						column.formatter = function(value, row, index) {
							var formatterFn = window[column.field + "Formatter"];
							if (typeof formatterFn === 'function') {
								return formatterFn.apply(this, [ value, row, index, column.format ]);
							} else {
								return value;
							}
						};
					}

					// 删除easyui没有的属性
					delete column.docks;
					delete column.format;
				});
			});
			return columns;
		}

		// 创建并返回datagrid
		function createDatagrid(param) {
			return $(_this).zdatagrid(param);
		}

		return $(this);
	}
	
	
    /*datagrid 常用方法封装 不显示直接使用 $('').datagrid('method') 改成 $().gpedatagrid('method')  方便维护替换*/
	$.fn.gpedatagrid.methods = {
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
//		load : function(jq, arg) {
//			var param = $(jq[0]).datagrid('options');
//			var queryParams = JSON.stringify(param.queryParams);
//			$_fn.ajax({
//				method : 'post',
//				contentType:"application/json",
//				url : param.url,
//				data : queryParams
//			}, function(result) {
//				return $(jq[0]).datagrid('loadData', result);
//			});
//		}
	}
	
	// 导出数据
	function exportData(params,url){
		var exportForm = $("<form></form>");  
		exportForm.attr("target", "");
		exportForm.attr("method", "post");
		exportForm.attr("action", url);
		var input;
		$.each(params, function(key, value) {
			input = $("<input type='hidden'>");
			input.attr({
				"name" : key
			});
			input.val(value);
			exportForm.append(input);
		});
		exportForm.appendTo('body').submit();
		exportForm.remove();
	}
	
	// 打印预览
	function printPreview(queryParams,url){
		var findPrintHeaderUrl = url + '/gpe/findPrintHeader?timestamp=' + new Date().getTime();
		var findPrintListUrl = url + '/gpe/findPrintList?timestamp=' + new Date().getTime();
		
		var container = $("<div style='position:relative;top:-100000px;left:-100000px;'></div>").appendTo("body");
		var preview = $("<div></div>").appendTo(container);
		
		// 请求
		$_fn.ajax({
			method : 'get',
			url : findPrintHeaderUrl,
			async : false,
			data : {}
		}, function(result) {
			if (result.code == 0) {
				// 普通列信息
				var columns = result.data.columns;
				// 冻结列信息
				var frozenColumns = result.data.frozenColumns;
				// 显示打印网格
				$(preview).datagrid({
					method : 'post',
					align : 'center',
					rownumbers : true,
					pagination : false,
					url : findPrintListUrl,
					queryParams : queryParams,
					columns : columns,
					frozenColumns : frozenColumns,
					onLoadSuccess : function(){
						container.css({ top: "", left: "" });
						container.jqprint();
						container.remove();
					}
				});
			}
		});
	}
	
})(jQuery);