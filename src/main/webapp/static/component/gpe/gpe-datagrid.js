(function($) {
	// gpedatagrid
	$.fn.gpedatagrid = function(param, arg) {
		// easyui默认公共配置,已在zdatagrid有定义。有特殊的可以再覆盖
		var _param = {};
		_param = $.extend(_param,param);
		
		// findGridResult请求路径
		var _findGridResultUrl = param.url + '/gpe/findGridResult?timestamp=' + new Date().getTime();
		var _findListPageUrl = param.url + '/gpe/findListPage?timestamp=' + new Date().getTime();
		
		// 开启列设置功能
		if(_param.cols){
			$("#" + _param.cols).on("click", function() {
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
				//gpeSettingClass.initGpeDataGridCallback(callback);
			});
		}
		
		 
		// 参数
		var _this = this;

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
	
	
})(jQuery);