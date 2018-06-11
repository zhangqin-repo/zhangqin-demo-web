package com.zhangqin.demo.config;

import org.springframework.boot.autoconfigure.web.WebMvcRegistrations;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.mvc.method.annotation.ExceptionHandlerExceptionResolver;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping;

import com.zhangqin.framework.web.core.RequestMappingHandlerAdapterPlus;
import com.zhangqin.framework.web.core.RequestMappingHandlerMappingPlus;


/**
 * 继承WebMvcRegistrations，重写getRequestMappingHandlerMapping和getRequestMappingHandlerAdapter方法
 * @author zhangqin
 *
 */
@Configuration
public class GpeWebMvcRegistrationsAdapter implements WebMvcRegistrations {

	@Override
	public RequestMappingHandlerMapping getRequestMappingHandlerMapping() {
		return new RequestMappingHandlerMappingPlus();
	}

	@Override
	public RequestMappingHandlerAdapter getRequestMappingHandlerAdapter() {
		return new RequestMappingHandlerAdapterPlus();
	}

	@Override
	public ExceptionHandlerExceptionResolver getExceptionHandlerExceptionResolver() {
		// TODO Auto-generated method stub
		return null;
	}

}
