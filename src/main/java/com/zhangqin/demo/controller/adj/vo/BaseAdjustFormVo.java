package com.zhangqin.demo.controller.adj.vo;

import java.io.Serializable;

import com.zhangqin.framework.web.gpe.annotation.GpeField;

/**
 * 调整单VO基类
 * @author zhangqin
 *
 */
public class BaseAdjustFormVo implements Serializable{

	/**
	 * serialVersionUID
	 */
	private static final long serialVersionUID = 6032267280051536526L;
	
	/**
	 * 单据ID
	 */
	@GpeField(title = "单据ID")
	private String id;
	
	/**
	 * 单据编号
	 */
	@GpeField(title = "单据编号")
	private String formNo;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getFormNo() {
		return formNo;
	}

	public void setFormNo(String formNo) {
		this.formNo = formNo;
	}
	
}
