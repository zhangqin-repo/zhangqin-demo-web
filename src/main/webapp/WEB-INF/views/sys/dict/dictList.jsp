<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>字典列表</title>
	<%@ include file="/WEB-INF/views/include/header.jsp"%>
</head>
<body class="fb fb-col">
	<div id="search">
		<div id="toolbar">
			<a href="javascript:search(0)" id="searchBtn">查询</a>
		</div>
	</div>
	
	<div id="dictGrid"></div>
	<script type="text/javascript" src="${ctx}/static/js/views/sys/dict/dictList.js"></script>
</body>
</html>