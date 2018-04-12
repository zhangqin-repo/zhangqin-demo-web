<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>贸易协议单</title>
	<%@ include file="/WEB-INF/views/include/header.jsp"%>
</head>
<body class="fb fb-col">
	<div id="toolbar">
		<a href="javascript:search(0)" id="searchBtn">查询</a>
		<a href="javascript:void(0)" id="exportBtn">导出</a>
	</div>
	
	<div id="search">
		<form id="searchForm">
			<input id="formNo" name="formNo"  placeholder="请输入单据编号">
		</form>
	</div>
	
	<div id="tradeProtocolGrid" style="height:500px;"></div>
	
	<script type="text/javascript">
		$("#tradeProtocolGrid").gpedatagrid({
			method: "post",
			url : contextPath + '/api/adj/tradeProtocolForm/findListPage',
			pagination : true, //开启分页
			checkbox : false, // 是否显示checkbox全选效果
			settingBtn : "settingBtn", // 列设置按钮ID
			exportBtn : "exportBtn", // 导出按钮ID
			printBtn : "printBtn" // 打印按钮ID
		});

		// 查询方法
		function search() {
			$("#tradeProtocolGrid").gpedatagrid("options").queryParams = $("#searchForm").serializeObject();
			$("#tradeProtocolGrid").gpedatagrid("options").method = "post";
			$("#tradeProtocolGrid").gpedatagrid("load");
		}
	</script>
</body>
</html>