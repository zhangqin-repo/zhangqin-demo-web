package com.zhangqin.demo.controller.adj;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 各类基础数据调整单视图
 * @author zhangqin
 *
 */
@Controller
@RequestMapping("api/adj")
public class AdjViewController {
	/**
	 * 跳转到品牌首页
	 */
	@RequestMapping(value="tradeProtocolForm/index")
	public String toBrandIndex(){
		return "/adj/tradeProtocolForm/tradeProtocolFormList";
	}
}
