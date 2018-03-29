package com.zhangqin.demo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.RestController;

/**
 * 启动程序
 * @author zhangqin
 *
 */
@RestController
@SpringBootApplication
@ComponentScan(basePackages = {"com.zhangqin"})
public class WebApplication extends SpringBootServletInitializer {
	/**
	 * Logger
	 */
	private static final Logger logger = LoggerFactory.getLogger(WebApplication.class);

	/**
	 * 主方法
	 * @param args
	 */
	public static void main(String[] args) {
		logger.info("开始启动web~~~~~~~~~~~~~~~~~~~~");
		SpringApplication.run(WebApplication.class, args);
		logger.info("web启动完成~~~~~~~~~~~~~~~~~~~~");
	}
	
	@Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(WebApplication.class);
    }
}
