package com.movook.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.movook.service.ReviewService;
import com.movook.vo.Review;
import com.movook.vo.SearchVo;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@CrossOrigin("*")
@Api(value = "리뷰 정보 API 입니다.")
public class ReviewRestController {

	@Autowired
	ReviewService service;
	
	@ApiOperation(value = "리뷰 정보 전체 검색(페이징)", notes = "전체 리뷰 정보(페이징) <big>목록</big>을 반환해줍니다.")
	@GetMapping(value="/reviews")
	public ResponseEntity<?> findAllReview(@ModelAttribute("params") final SearchVo params, Model model) {
		List<Review> review_list = service.findAll(params);

		if(review_list != null && !review_list.isEmpty()) {
			ResponseEntity<List<Review>> response = new ResponseEntity<List<Review>>(review_list, HttpStatus.OK);
			return response;
		}
		else {
			return extracted();
		}
	}
	
//	@ApiOperation(value = "리뷰 정보 전체 검색(페이징)", notes = "전체 리뷰 정보(페이징) <big>목록</big>을 반환해줍니다.")
//	@GetMapping(value="/reviews")
//	public String openPostList(@ModelAttribute("params") final SearchVo params, Model model) {
//        List<Review> posts = service.findAll(params);
//        model.addAttribute("posts", posts);
//        return "reviews";
//    }
	
	@ApiOperation(value = "리뷰 정보 전체 검색(비공개 제외)", notes = "전체 리뷰 정보 <big>목록</big>을 반환해줍니다.")
	@GetMapping(value="/reviews/{open_use}")
	public ResponseEntity<?> reviewOpenSearch(@PathVariable String open_use) {
		List<Review> review_list = service.getReviewList(open_use);
		
		if(review_list != null && !review_list.isEmpty()) {
			ResponseEntity<List<Review>> response = new ResponseEntity<List<Review>>(review_list, HttpStatus.OK);
			return response;
		}
		else {
			return extracted();
		}
	}
	
	@ApiOperation(value = "리뷰 정보 상세 검색", notes = "상세 리뷰 정보 <big>목록</big>을 반환해줍니다.")
	@GetMapping(value="/review/datail/{review_id}")
	public ResponseEntity<?> reviewDetailSearch(@PathVariable String review_id) {
		List<Review> review_list = service.ReviewDetail(review_id);
		
		if(review_list != null && !review_list.isEmpty()) {
			ResponseEntity<List<Review>> response = new ResponseEntity<List<Review>>(review_list, HttpStatus.OK);
			return response;
		}
		else {
			return extracted();
		}
	}
	
	@ApiOperation(value = "나의 리뷰 정보 검색", notes = "나의 리뷰 정보 <big>목록</big>을 반환해줍니다.")
	@GetMapping(value="/review/user/{user_id}")
	public ResponseEntity<?> reviewUserSearch(@PathVariable String user_id) {
		List<Review> review_list = service.getReviewUser(user_id);
		
		if(review_list != null && !review_list.isEmpty()) {
			ResponseEntity<List<Review>> response = new ResponseEntity<List<Review>>(review_list, HttpStatus.OK);
			return response;
		}
		else {
			return extracted();
		}
	}
	
	@ApiOperation(value = "리뷰 추가", notes = "리뷰 <big>목록</big>을 추가해줍니다.")
	@PostMapping(value="/review")
	public String reviewInsert(@RequestBody Review r) {
		service.reviewInsert(r);
		return "success";
	}
	
	@ApiOperation(value = "리뷰 수정", notes = "책 <big>목록</big>을 수정해줍니다.")
	@PutMapping(value="/review")
	public String reviewUpdate(@RequestBody Review r) {
		if(service.reviewUpdate(r)) {
			return "success";
		} else {
			return "fail";
		}
	}
	
	@ApiOperation(value = "리뷰 삭제", notes = "리뷰 <big>목록</big>을 삭제해줍니다.")
	@PutMapping(value="/review/{review_id}")
	public String reviewDelete(@PathVariable String review_id) {
		if(service.reviewDelete(review_id)) {
			return "success";
		} else {
			return "fail";
		}
	}
	
	
	private ResponseEntity extracted() {
		return new ResponseEntity(HttpStatus.NO_CONTENT);
	}
}
