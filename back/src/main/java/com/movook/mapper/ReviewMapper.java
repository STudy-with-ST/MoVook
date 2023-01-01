package com.movook.mapper;

import java.util.ArrayList;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.movook.vo.Review;
import com.movook.vo.SearchVo;

@Mapper
public interface ReviewMapper {
	List<Review> findAll(SearchVo params);
	int count(SearchVo params);
	
	ArrayList<Review> getReviewList(String open_use);
	ArrayList<Review> getReviewUser(String user_id);
	ArrayList<Review> ReviewDetail(String review_id);
	boolean reviewInsert(Review r);
	boolean reviewUpdate(Review r);
	boolean reviewDelete(String review_id);
}
