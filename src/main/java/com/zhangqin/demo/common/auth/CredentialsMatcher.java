package com.zhangqin.demo.common.auth;

import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.credential.SimpleCredentialsMatcher;

public class CredentialsMatcher extends SimpleCredentialsMatcher {

	/**
	 * (non-Javadoc)
	 * @see org.apache.shiro.authc.credential.SimpleCredentialsMatcher#doCredentialsMatch(org.apache.shiro.authc.AuthenticationToken, org.apache.shiro.authc.AuthenticationInfo)
	 */
	@Override
	public boolean doCredentialsMatch(AuthenticationToken token, AuthenticationInfo info) {
		// TODO 昌平做完用户后去掉
		if (1 == 1) {
			return true;
		}
		// 转换Token
		UsernamePasswordCaptchaToken utoken = (UsernamePasswordCaptchaToken) token;
		// 获得用户输入的密码
		String inPassword = new String(utoken.getPassword());

		// 获得数据库中的密码
		String dbPassword = (String) info.getCredentials();

		// 进行密码的比对
		return this.equals(inPassword, dbPassword);
	}

}