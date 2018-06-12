package com.zhangqin.demo.controller.sys;

import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.dubbo.config.annotation.Reference;
import com.github.pagehelper.PageInfo;
import com.zhangqin.demo.sys.api.DictTypeApi;
import com.zhangqin.demo.sys.qo.DictTypeQO;
import com.zhangqin.demo.sys.vo.dict.DictTypeVO;
import com.zhangqin.framework.web.common.controller.BaseGeneralController;
import com.zhangqin.framework.web.gpe.annotation.GpeRequestMapping;

/**
 * 字典类型Controller
 * @author zhangqin
 *
 */
@RestController
@RequestMapping("api/sys/dict")
public class DictTypeController extends BaseGeneralController {
	/**
	 * 字典类型Api
	 */
	@Reference
	private DictTypeApi dictTypeApi;

	/**
	 * 查询分页数据
	 * @return
	 */
	@GpeRequestMapping(viewObject = DictTypeVO.class, queryClass = DictTypeQO.class)
	@RequestMapping(value = "/listPage", method = RequestMethod.POST)
	@ResponseBody
	public PageInfo<DictTypeVO> listPage(DictTypeQO qo){
		@SuppressWarnings("unused")
		List<DictTypeVO> list = dictTypeApi.findBaseCodeDictTypeList();
		return null;
	}
}
