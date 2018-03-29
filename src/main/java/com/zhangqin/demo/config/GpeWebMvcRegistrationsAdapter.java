package com.zhangqin.demo.config;

import org.springframework.boot.autoconfigure.web.WebMvcRegistrations;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.mvc.method.annotation.ExceptionHandlerExceptionResolver;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping;

import com.zhangqin.framework.web.gpe.config.GpeRequestMappingHandlerMapping;
import com.zhangqin.framework.web.gpe.handler.GpeRequestMappingHandlerAdapter;


/**
 * 继承WebMvcRegistrations，重写getRequestMappingHandlerMapping和getRequestMappingHandlerAdapter方法
 * @author zhangqin
 *
 */
@Configuration
public class GpeWebMvcRegistrationsAdapter implements WebMvcRegistrations {

	@Override
	public RequestMappingHandlerMapping getRequestMappingHandlerMapping() {
		return new GpeRequestMappingHandlerMapping();
	}

	@Override
	public RequestMappingHandlerAdapter getRequestMappingHandlerAdapter() {
		// TODO Auto-generated method stub
		return new GpeRequestMappingHandlerAdapter();
	}

	@Override
	public ExceptionHandlerExceptionResolver getExceptionHandlerExceptionResolver() {
		// TODO Auto-generated method stub
		return null;
	}

}
