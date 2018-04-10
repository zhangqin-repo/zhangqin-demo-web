<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>Insert title here</title>
	<%@ include file="/WEB-INF/views/include/header.jsp"%>
</head>
<body class="fb fb-col">
	<div id="toolbar">
		<a href="javascript:search(0)" id="searchBtn">查询</a>
		<a href="javascript:void(0)" id="exportBtn">导出</a>
	</div>
	
	<div id="search">
		<form id="searchForm">
			<input id="name" name="name"  placeholder="请输入角色类型名称查询">
		</form>
	</div>
	
	<div id="roleTypeForm" style="height:500px;"></div>
	
	<script type="text/javascript">
		$("#roleTypeForm").gpedatagrid({
			method: "post",
			url : contextPath + '/api/sys/roleType/findListPage',
			pagination : true, //开启分页
			checkbox : false, // 是否显示checkbox全选效果
			settingBtn : "settingBtn", // 列设置按钮ID
			exportBtn : "exportBtn", // 导出按钮ID
			printBtn : "printBtn" // 打印按钮ID
		});

		// 查询方法
		function search() {
			$("#roleTypeForm").gpedatagrid("options").queryParams = $("#searchForm").serializeObject();
			$("#roleTypeForm").gpedatagrid("options").method = "post";
			$("#roleTypeForm").gpedatagrid("load");
		}
	</script>
</body>
</html>