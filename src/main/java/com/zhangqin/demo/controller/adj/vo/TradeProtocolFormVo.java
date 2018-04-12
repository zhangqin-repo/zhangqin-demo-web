package com.zhangqin.demo.controller.adj.vo;

import com.zhangqin.framework.web.gpe.annotation.GpeField;
import com.zhangqin.framework.web.gpe.annotation.GpeHeader;

@GpeHeader(title = "供应商贸易协议单")
public class TradeProtocolFormVo extends BaseAdjustFormVo {

	/**
	 * serialVersionUID
	 */
	private static final long serialVersionUID = 1101258444627031564L;

	/**
	 * 供应商ID
	 */
	@GpeField(title = "供应商ID")
	private String supplierId;

	/**
	 * 供应商名称
	 */
	@GpeField(title = "供应商名称")
	private String supplierName;
	
	/**
	 * 单据编号
	 */
	@GpeField(title = "单据编号")
	private String formNo;

	public String getSupplierId() {
		return supplierId;
	}

	public void setSupplierId(String supplierId) {
		this.supplierId = supplierId;
	}

	public String getSupplierName() {
		return supplierName;
	}

	public void setSupplierName(String supplierName) {
		this.supplierName = supplierName;
	}

	public String getFormNo() {
		return formNo;
	}

	public void setFormNo(String formNo) {
		this.formNo = formNo;
	}
}
