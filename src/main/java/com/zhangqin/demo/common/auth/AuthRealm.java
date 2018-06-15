package com.zhangqin.demo.common.auth;

import org.apache.commons.lang3.StringUtils;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.session.Session;
import org.apache.shiro.subject.PrincipalCollection;

import com.alibaba.dubbo.config.annotation.Reference;
import com.zhangqin.demo.sys.api.LoginApi;
import com.zhangqin.demo.sys.api.TenantApi;
import com.zhangqin.demo.sys.exception.LoginException;
import com.zhangqin.demo.sys.vo.LoginVO;
import com.zhangqin.framework.web.common.auth.TenantUsernamePasswordCaptchaToken;

/**
 * 用户登录授权
 * 
 * @author zhangqin
 *
 */
public class AuthRealm extends AuthorizingRealm {
	
	/**
	 * 租户API
	 */
	@Reference
	private TenantApi tenantApi;
	
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

		// 租户编号不可为空
		String tenantCode = token.getTenant();
		if(StringUtils.isBlank(tenantCode)) {
			throw new AuthenticationException("租户编号不可为空。");
		}
		
		// 登录账号不可为空
		String loginName = token.getUsername();
		if(StringUtils.isBlank(loginName)) {
			throw new AuthenticationException("登录账号不可为空。");
		}
		
		// 登录账号不可为空
		String loginPassword = new String(token.getPassword());
		if(StringUtils.isBlank(loginName)) {
			throw new AuthenticationException("登录账号不可为空。");
		}
		
		try {
			LoginVO login = loginApi.login(tenantCode, loginName, loginPassword);
			Session session = SecurityUtils.getSubject().getSession();
			session.setAttribute("loginInfo", login);
		} catch (LoginException e) {
			throw new AuthenticationException(e.getMsg());
		}
		
		return new SimpleAuthenticationInfo(loginName, loginPassword, this.getName());
	}

}
