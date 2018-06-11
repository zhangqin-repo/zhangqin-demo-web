package com.zhangqin.demo.controller.sys;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.github.pagehelper.PageInfo;
import com.zhangqin.demo.sys.qo.DictQo;
import com.zhangqin.demo.sys.vo.DictVo;
import com.zhangqin.framework.web.gpe.annotation.GpeRequestMapping;

@Controller
@RequestMapping("api/sys/dict")
public class DictController {
	
	@GpeRequestMapping(viewObject = DictVo.class, queryClass = DictQo.class)
	@RequestMapping(value = "/listPage", method = RequestMethod.POST)
	@ResponseBody
	public PageInfo<DictVo> listPage(@RequestBody DictQo qo) {
		return null;
	}
}
