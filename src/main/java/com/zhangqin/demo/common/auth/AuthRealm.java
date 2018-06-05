package com.zhangqin.demo.common.auth;

import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;

import com.alibaba.dubbo.config.annotation.Reference;
import com.zhangqin.demo.sys.api.LoginApi;
import com.zhangqin.framework.web.common.auth.TenantUsernamePasswordCaptchaToken;

/**
 * 用户登录授权
 * 
 * @author zhangqin
 *
 */
public class AuthRealm extends AuthorizingRealm {
	/**
	 * 登录Api
	 */
	@Reference
	private LoginApi loginApi;

	/**
	 * 授权 (non-Javadoc)
	 * 
	 * @see org.apache.shiro.realm.AuthorizingRealm#doGetAuthorizationInfo(org.apache.shiro.subject.PrincipalCollection)
	 */
	@Override
	protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection arg0) {
		// TODO Auto-generated method stub
		return null;
	}

	/**
	 * 认证 (non-Javadoc)
	 * 
	 * @see org.apache.shiro.realm.AuthenticatingRealm#doGetAuthenticationInfo(org.apache.shiro.authc.AuthenticationToken)
	 */
	@Override
	protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authToken) throws AuthenticationException {
		// 获取认证Token
		TenantUsernamePasswordCaptchaToken token = (TenantUsernamePasswordCaptchaToken) authToken;

		String tenantCode = token.getTenant();
		String loginName = token.getUsername();
		String loginPassword = new String(token.getPassword());
		
		loginApi.login(tenantCode, loginName, loginPassword);

		return new SimpleAuthenticationInfo();
	}

}
