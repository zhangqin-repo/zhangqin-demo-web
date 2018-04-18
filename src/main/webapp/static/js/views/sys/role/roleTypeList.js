$(function() {
	page.initEvent();
	page.initDg();
})

var page = {
	listUrl : contextPath + '/api/sys/roleType/findListPage', // 查询列表数据Url
	searchForm : $("#searchForm"), // 搜索表单
	dg : $("#roleTypeGrid"), // 网格对象
	initEvent : function(){ // 初始化监听事件
		// 点击查询按钮
		$("#searchBtn").on('click',function(){
			this.search();
		});
	},
	initDg : function(){ // 初始化网格
		this.dg.gpedatagrid({
			method : "post",
			url : this.listUrl,
			pagination : true, // 开启分页
			checkbox : false, // 是否显示checkbox全选效果
			settingBtn : "settingBtn", // 列设置按钮ID
			exportBtn : "exportBtn", // 导出按钮ID
			printBtn : "printBtn" // 打印按钮ID
		});
	},
	search : function(){ // 网格查询方法
		this.dg.gpedatagrid("options").queryParams = this.searchForm.serializeObject();
		this.dg.gpedatagrid("options").method = "post";
		this.dg.gpedatagrid("load");
	}
}