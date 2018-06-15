var route = {
	common : {
		search : {
			listSearchRules : '/search/listSearchRules',
			listMySearchs : '/search/listMySearchs',
			removeById : '/search/removeById/{0}',
			getById : '/search/getById/{0}'
		}
	},
	bd : { // 基础数据
		user : { // 用户
			listPage : contextPath + '/api/bd/user/listPage',
			getById : contextPath + '/api/bd/user/getById/{0}',
			add : contextPath + '/api/bd/user/add',
			update : contextPath + '/api/bd/user/update',
			remove : contextPath + '/api/bd/user/remove'
		}
	}
}