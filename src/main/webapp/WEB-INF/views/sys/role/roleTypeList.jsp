<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>角色类型</title>
	<%@ include file="/WEB-INF/views/include/header.jsp"%>
</head>
<body class="fb fb-col">
	<div id="toolbar">
		<a href="javascript:search(0)" id="searchBtn">查询</a>
		<a href="javascript:void(0)" id="exportBtn">导出</a>
		<a href="javascript:void(0)" id="printBtn">打印</a>
		<a href="javascript:void(0)" id="settingBtn">设置</a>
	</div>
	
	<div id="search">
		<form id="searchForm">
			<input id="name" name="name"  placeholder="请输入角色类型名称查询">
		</form>
	</div>
	
	<div id="roleTypeGrid" style="height:500px;"></div>
	
	<script type="text/javascript" src="${ctx}/static/js/views/sys/role/roleTypeList.js"></script>
</body>
</html>