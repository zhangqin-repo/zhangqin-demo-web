<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>

<!-- easyui -->
<link rel="stylesheet" href="${ctx}/static/libs/easyui/themes/default/easyui.css">

<!-- jquery -->
<script src="${ctx}/static/libs/jquery/jquery.min.js"></script>
<!-- easyui -->
<script src="${ctx}/static/libs/easyui/jquery.easyui.min.js"></script>

<script src="${ctx}/static/js/plugins/layer/layer.min.js?v=${version}"></script>

<!-- component -->
<script src="${ctx}/static/component/zfunction.js"></script>
<script src="${ctx}/static/component/zdatagrid.js"></script>
<script src="${ctx}/static/component/gpe/gpe-datagrid.js"></script>
<script src="${ctx}/static/component/gpe/gpe-colsetting.js"></script>
<script src="${ctx}/static/component/gpe/gpe-datagrid-dnd.js"></script>

<script type="text/javascript">
	var contextPath = '${ctx}';
</script>