package com.movook.service;

import java.util.ArrayList;
import java.util.List;

import com.movook.vo.Review;
import com.movook.vo.SearchVo;

public interface ReviewService {
	
	List<Review> findAll(final SearchVo params);
	ArrayList<Review> getReviewList(String open_use);
	ArrayList<Review> getReviewUser(String user_id);
	ArrayList<Review> ReviewDetail(String review_id);
	boolean reviewInsert(Review r);
	boolean reviewUpdate(Review r);
	boolean reviewDelete(String review_id);
}
