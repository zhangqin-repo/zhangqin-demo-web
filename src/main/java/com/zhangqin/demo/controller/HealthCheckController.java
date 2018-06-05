package com.zhangqin.demo.controller;

import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.common.collect.Maps;

/**
 * 健康监测Controller
 * @author zhangqin
 *
 */
@Controller
@RequestMapping("/")
public class HealthCheckController {
	
	/**
	 * 健康监测
	 * @return
	 */
	@RequestMapping("health")
	@ResponseBody
	public Map<String,Object> health() {
		Map<String,Object> map = Maps.newHashMap();
		map.put("status", "UP");
		return map;
	}
}
