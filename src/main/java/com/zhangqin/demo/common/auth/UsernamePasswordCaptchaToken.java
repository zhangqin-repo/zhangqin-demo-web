package com.zhangqin.demo.common.auth;

import org.apache.shiro.authc.UsernamePasswordToken;

/**
 * 用户名-密码-验证码校验
 * 
 * @author zhangqin
 *
 */
public class UsernamePasswordCaptchaToken extends UsernamePasswordToken {

	/**
	 * serialVersionUID
	 */
	private static final long serialVersionUID = 3705789999489310595L;

	private String captcha;

	public String getCaptcha() {
		return captcha;
	}

	public void setCaptcha(String captcha) {
		this.captcha = captcha;
	}

}
