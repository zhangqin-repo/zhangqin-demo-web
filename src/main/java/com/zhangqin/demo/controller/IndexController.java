package com.zhangqin.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class IndexController {
	/**
	 * 首页地址
	 */
	public static final String VIEW_INDEX = "index";

	@RequestMapping(value = "/index", method = RequestMethod.GET)
	public String index() {
		return VIEW_INDEX;
	}
}
