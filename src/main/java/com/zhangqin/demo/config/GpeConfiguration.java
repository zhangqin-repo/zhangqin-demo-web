package com.zhangqin.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.zhangqin.framework.gpe.GpeGlobalPropertyBean;
import com.zhangqin.framework.gpe.enums.TextAlign;
import com.zhangqin.framework.web.gpe.GpeFieldPropertyConfigurer;

@Configuration
public class GpeConfiguration {

	/**
	 * GPE默认配置属性
	 * 
	 * @return
	 */
	@Bean(name = "defaultGpeProperty")
	public GpeGlobalPropertyBean defaultGpeProperty() {
		GpeGlobalPropertyBean property = new GpeGlobalPropertyBean();
		property.setGshow(true);
		property.setPshow(true);
		property.setEshow(true);
		property.setTextAlign(TextAlign.LEFT);
		property.setNumericAlign(TextAlign.RIGHT);
		property.setDateAlign(TextAlign.LEFT);
		property.setgDecimalFormat("00.00");
		property.setpDecimalFormat("00.00");
		property.seteDecimalFormat("00.0000");
		property.setgDateFormat("yyyy-MM-dd");
		property.setpDateFormat("yyyy-MM-dd");
		property.seteDateFormat("yyyy-MM-dd HH:mm:ss");
		property.setWidth(100);
		property.setSortable(false);
		return property;
	}
	/**
	 * 
	 * @Description: GPE属性文件配置器
	 * @return GpePropertyConfigurer  
	 * @author zhangq
	 * @date 2017年9月27日
	 */
	@Bean
	public GpeFieldPropertyConfigurer gpeFieldPropertyConfigurer() {
		return new GpeFieldPropertyConfigurer();
	}
	
}
