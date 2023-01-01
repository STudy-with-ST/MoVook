package com.movook.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movook.mapper.ReviewMapper;
import com.movook.vo.Review;
import com.movook.vo.SearchVo;

@Service
public class ReviewServiceImpl implements ReviewService {
	
	@Autowired
	ReviewMapper mapper;

	@Override
	public ArrayList<Review> getReviewList(String open_use) {
		return mapper.getReviewList(open_use);
	}

	@Override
	public ArrayList<Review> getReviewUser(String user_id) {
		return mapper.getReviewUser(user_id);
	}

	@Override
	public ArrayList<Review> ReviewDetail(String review_id) {
		return mapper.ReviewDetail(review_id);
	}

	@Override
	public boolean reviewInsert(Review r) {
		return mapper.reviewInsert(r);
	}

	@Override
	public boolean reviewUpdate(Review r) {
		return mapper.reviewUpdate(r);
	}

	@Override
	public boolean reviewDelete(String review_id) {
		return mapper.reviewDelete(review_id);
	}

	@Override
	public List<Review> findAll(SearchVo params) {
		return mapper.findAll(params);
	}

}
