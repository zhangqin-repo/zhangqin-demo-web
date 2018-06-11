package com.zhangqin.demo.config;

import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.springframework.stereotype.Component;

import com.zhangqin.framework.web.core.GpeRealm;
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

	@Override
	public String getStringFromRedis(String key) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void setStringToRedis(String key, String Json, long timeout, TimeUnit unit) {
		// TODO Auto-generated method stub
		
	}
	

	

}
