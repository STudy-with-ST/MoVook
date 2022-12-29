package com.movook.vo;

import io.swagger.annotations.ApiModelProperty;
import io.swagger.annotations.ApiParam;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@Setter
@Getter
public class SearchVo {

	@ApiModelProperty(value = "현재 페이지 번호")
	private int page;			// 현재 페이지 번호
	@ApiModelProperty(value = "페이지당 출력할 데이터 개수")
	private int recordSize;		// 페이지당 출력할 데이터 개수
	@ApiModelProperty(value = "화면 하단에 출력할 페이지 사이즈")
	private int pageSize;		// 화면 하단에 출력할 페이지 사이즈
	@ApiModelProperty(value = "검색 키워드")
	private String keyword;		// 검색 키워드
	@ApiModelProperty(value = "검색 유형")
	private String searchType;	// 검색 유형
	
	public SearchVo() {
		this.page = 1;
		this.recordSize = 10;
		this.pageSize = 10;
	}
	
	public int getOffset() {
		return (page-1) * recordSize;
	}
}
