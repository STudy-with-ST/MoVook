package com.movook.controller;

import com.movook.vo.Movie;
import io.swagger.annotations.ApiOperation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.movook.service.MovieService;

import io.swagger.annotations.Api;

import java.util.List;

@RestController
@CrossOrigin("*")
@Api(value = "영화 정보 API 입니다.")
public class MovieRestController {

	MovieService movieService;
	private final Logger logger = LoggerFactory.getLogger(MovieRestController.class);

	private static final String OK = "success";
	private static final String NO = "fail";

	@Autowired
	public MovieRestController(MovieService movieService) {
		this.movieService = movieService;
	}

	@ApiOperation(value = "영화 검색", notes = "제목 검색 결과를 리턴합니다.")
	@GetMapping("/movie/search/{title}")
	public ResponseEntity<?> getMovieList(@PathVariable String title){
		try {
			return new ResponseEntity<List>(movieService.searchMovieByTitle(title), HttpStatus.OK);
		}catch (Exception e){
			System.out.println(e.getMessage());
		}
		return new ResponseEntity<String>(NO, HttpStatus.INTERNAL_SERVER_ERROR);
	}

//	@ApiOperation(value = "영화 추가", notes = "영화의 리뷰를 작성할 때 외래키 사용을 위해 영화 데이터를 추가합니다.")
//	@PostMapping("/movie")
//	public ResponseEntity<?> insertMovie(@RequestBody Movie movie){
//		try {
//			movieService.movieInsert(movie);
//			return new ResponseEntity<String>(OK,HttpStatus.OK);
//		} catch (Exception e) {
//			logger.warn(e.getMessage());정
//			return new ResponseEntity<String>(NO, HttpStatus.INTERNAL_SERVER_ERROR);
//		}
//	}

	@ApiOperation(value = "영화 검색(in local DB)", notes = "DB에 저장된 영화 정보를 검색합니다. 영화 제목으로 검색시 DB에 영화가 저장되며 이 api는 review의 movie_id 컬럼을 통해 영화의 정보에 접근하고자 할 때 사용합니다.")
	@GetMapping("/movie/{movie_id}")
	public ResponseEntity<?> readMovie(@PathVariable String movie_id){
		try {
			Movie movie = movieService.movieRead(movie_id);
			return new ResponseEntity<Movie>(movie, HttpStatus.OK);
		} catch (Exception e) {
			logger.warn(e.getMessage());
			return new ResponseEntity<String>(NO, HttpStatus.NO_CONTENT);
		}
	}


}
