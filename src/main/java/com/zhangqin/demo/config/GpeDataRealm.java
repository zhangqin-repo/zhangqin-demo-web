package com.zhangqin.demo.config;

import java.util.Set;

import org.springframework.stereotype.Component;

import com.google.common.collect.Sets;
import com.zhangqin.framework.web.gpe.GpeRealm;
import com.zhangqin.framework.web.gpe.bean.result.UserColumnSetting;

@Component
public class GpeDataRealm implements GpeRealm {

	@Override
	public UserColumnSetting getUserColumnSetting(String key) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean saveUserColumnSetting(String key, UserColumnSetting setting) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean restoreUserColumnSetting(String key) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public Set<String> getForbidFields(String userId) {
		// TODO Auto-generated method stub
		return null;
	}
	

	

}
