package com.zhangqin.demo.controller.sys.vo;

import com.zhangqin.framework.common.enums.BaseEnum;

public enum Deleted implements BaseEnum<Deleted, Integer> {
	YES("已删除",2),
	NO("未删除",3);
	
	/**
	 * 枚举编号
	 */
	private Integer value;
	/**
	 * 枚举描述
	 */
	private String desc;
	
	Deleted(String desc,Integer value) {
		this.desc = desc;
		this.value = value;
	}

	public Integer getValue() {
		return value;
	}

	public String getDesc() {
		return desc;
	}

}
