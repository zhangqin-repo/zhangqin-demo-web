$(function() {
	page.initDom();
	page.initEvent();
})

var route = {
	sys : {
		dict : {
			list : contextPath + '/api/sys/dict/listPage'
		}
	}
}

var page = {
	dg : $("#dictGrid"), // 网格对象
	initDom : function() {
		// 初始化网格
		page.dg.gpedatagrid({
			method : "post",
			url : route.sys.dict.list,
			pagination : true, // 开启分页
			checkbox : false, // 是否显示checkbox全选效果
			settingBtn : "settingBtn", // 列设置按钮ID
			exportBtn : "exportBtn", // 导出按钮ID
			printBtn : "printBtn" // 打印按钮ID
		});
	},
	initEvent : function() { // 初始化监听事件
		$("#searchBtn").on('click', function() {
			page.search();
		});
	},
	search : function() {
		var params = {
			typeCode : '01',
			typeName : '支付宝',
			nbsRules : [ {
				property : "typeCode",
				operator : "EQ"
			}, {
				property : "typeName",
				operator : "LR"
			} ]
		};
		
		page.dg.gpedatagrid("options").queryParams = params;
		page.dg.gpedatagrid("options").method = "post";
		page.dg.gpedatagrid("load");
	}
}