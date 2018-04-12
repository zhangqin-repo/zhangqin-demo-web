package com.zhangqin.demo.controller.adj;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.github.pagehelper.PageInfo;
import com.google.common.collect.Lists;
import com.zhangqin.demo.controller.adj.vo.TradeProtocolFormVo;
import com.zhangqin.demo.sys.qo.RoleTypeQo;
import com.zhangqin.framework.web.gpe.annotation.GpeRequestMapping;

/**
 * 角色类型Controller
 * 
 * @author zhangqin
 *
 */
@Controller
@RequestMapping("api/adj/tradeProtocolForm")
public class TradeProtocolFormController {
	/**
	 * 查询分页数据
	 * 
	 * @return
	 */
	@GpeRequestMapping(viewObject = TradeProtocolFormVo.class)
	@RequestMapping(value = "/findListPage", method = RequestMethod.POST)
	public PageInfo<TradeProtocolFormVo> findListPage(RoleTypeQo qo) {
		TradeProtocolFormVo vo = new TradeProtocolFormVo();
		vo.setId("1");
		vo.setSupplierId("1");
		vo.setSupplierName("测试供应商");
		vo.setFormNo("123");
		return new PageInfo<TradeProtocolFormVo>(Lists.newArrayList(vo));
	}
}
