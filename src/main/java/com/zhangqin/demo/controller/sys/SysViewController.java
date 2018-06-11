package com.zhangqin.demo.controller.sys;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 系统管理视图
 * @author zhangqin
 *
 */
@Controller
@RequestMapping("api/sys")
public class SysViewController {
	/**
	 * 跳转到品牌首页
	 */
	@RequestMapping(value="roleType/index")
	public String toBrandIndex(){
		return "/sys/role/roleTypeList";
	}
	
	/**
	 * 跳转到品牌首页
	 */
	@RequestMapping(value="dict/index")
	public String toDictIndex(){
		return "/sys/dict/dictList";
	}
}
