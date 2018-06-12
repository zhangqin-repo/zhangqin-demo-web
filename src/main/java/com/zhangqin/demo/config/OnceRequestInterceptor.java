package com.zhangqin.demo.config;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import com.zhangqin.framework.common.dubbo.TenantSelector;
import com.zhangqin.framework.common.dubbo.UserSelector;

@Component
public class OnceRequestInterceptor implements HandlerInterceptor {

	private ThreadLocal<Long> timeLocal = new ThreadLocal<>();

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		timeLocal.set(System.currentTimeMillis());
		String uri = request.getRequestURI();
		if (uri.endsWith("/error")) {
			return true;
		}
//		UserInfo userInfo = UserUtil.getCurrentUser();
//		if (userInfo != null && userInfo.getTenantId() != null) {
//			TenantSelector.setTenantId(userInfo.getTenantId());
//			UserSelector.setUserId(userInfo.getId());
//		}
		UserSelector.setUserId("1869def2667611e899b400163e0a9115");
		return true;
	}

	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
			ModelAndView modelAndView) throws Exception {

	}

	@Override
	public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex)
			throws Exception {
		TenantSelector.remove();
		UserSelector.remove();
		long startTime = timeLocal.get();
		timeLocal.remove();
		System.out.println(
				"本次请求:" + request.getRequestURI() + ":处理时间为：" + (System.currentTimeMillis() - startTime) + "ms");
	}
}
