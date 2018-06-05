package com.zhangqin.demo.controller.sys.vo;

import com.zhangqin.framework.gpe.annotation.ExcelCell;
import com.zhangqin.framework.web.importer.ExcelImporterError;

/**
 * 商品货号导入Excel
 * 
 * @author zhangqin
 *
 */
public class ProductCodeExcel extends ExcelImporterError {
	@ExcelCell(title = "货号")
	private String productCode;

	public String getProductCode() {
		return productCode;
	}

	public void setProductCode(String productCode) {
		this.productCode = productCode;
	}

}
