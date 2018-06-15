package com.zhangqin.demo.controller.sys;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.dubbo.config.annotation.Reference;
import com.github.pagehelper.PageInfo;
import com.zhangqin.demo.sys.api.RoleTypeApi;
import com.zhangqin.demo.sys.dto.RoleTypeDto;
import com.zhangqin.demo.sys.qo.RoleTypeQo;
import com.zhangqin.demo.sys.vo.RoleTypeVO;
import com.zhangqin.framework.common.utils.BeanMapper;
import com.zhangqin.framework.web.gpe.annotation.GpeRequestMapping;

/**
 * 角色类型Controller
 * @author zhangqin
 *
 */
@Controller
@RequestMapping("api/sys/roleType")
public class RoleTypeController {
	
	/**
	 * 角色类型Api接口
	 */
	//@Reference
	private RoleTypeApi roleTypeApi;
	
	/**
	 * 查询分页数据
	 * @return
	 */
	@GpeRequestMapping(viewObject = RoleTypeVO.class, queryClass = RoleTypeQo.class)
	@RequestMapping(value = "/findListPage", method = RequestMethod.POST)
	@ResponseBody
	public PageInfo<RoleTypeVO> findListPage(RoleTypeQo qo){
		PageInfo<RoleTypeDto> page = roleTypeApi.findListPage(qo);
		List<RoleTypeDto> dtoList = page.getList();
		List<RoleTypeVO> voList = BeanMapper.mapList(dtoList, RoleTypeVO.class);
		voList.forEach(action->{
			action.setDecimalTest(BigDecimal.valueOf(0));
		});
		
		PageInfo<RoleTypeVO> newPage = new PageInfo<RoleTypeVO>();
		BeanMapper.copy(page, newPage);
		newPage.setList(voList);
		return newPage;
	}
}
