package com.movook.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.movook.service.BookService;
import com.movook.vo.Book;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@CrossOrigin("*")
@Api(value = "책 정보 API 입니다.")
public class BookRestController {
	
	@Autowired
	BookService service;
	
	@ApiOperation(value = "책 정보 전체 검색", notes = "책 정보 <big>목록</big>을 반환해줍니다.")
	@GetMapping(value="/bookList")
	public ResponseEntity<?> bookSearchAll() {
		List<Book> book_list = service.getBookList();
		
		if(book_list != null && !book_list.isEmpty()) {
			ResponseEntity<List<Book>> response = new ResponseEntity<List<Book>>(book_list, HttpStatus.OK);
			return response;
		}
		else {
			return extracted();
		}
	}
	
	@ApiOperation(value = "책 목록 추가", notes = "책 <big>목록</big>을 추가해줍니다.")
	@PostMapping(value="/book")
	public String bookInsert(@RequestBody Book b) {
		service.bookInsert(b);
		return "success";
	}
	
	@ApiOperation(value = "책 목록 제목 검색", notes = "책 <big>제목 검색 목록</big>을 반환해줍니다.")
	@GetMapping(value="/bookList/{book_title}")
	public ResponseEntity<?> bookSearchTitle(@PathVariable String book_title) {
		List<Book> bookTitle_list = service.bookSearchTitle(book_title);
		
		if(bookTitle_list != null && !bookTitle_list.isEmpty()) {
			ResponseEntity<List<Book>> response = new ResponseEntity<List<Book>>(bookTitle_list, HttpStatus.OK);
			return response;
		}
		else {
			return extracted();
		}
	}
	
	@ApiOperation(value = "책 목록 수정", notes = "책 <big>목록</big>을 수정해줍니다.")
	@PutMapping(value="/book/update")
	public String bookUpdate(@RequestBody Book b) {
		if(service.bookUpdate(b)) {
			return "success";
		} else {
			return "fail";
		}
	}
	
	@ApiOperation(value = "책 목록 삭제", notes = "책 <big>목록</big>을 삭제해줍니다.")
	@DeleteMapping(value="/book/delete/{isbn_num}")
	public String bookDelete(@PathVariable String isbn_num) {
		if(service.bookDelete(isbn_num)) {
			return "success";
		} else {
			return "fail";
		}
	}
	
	private ResponseEntity extracted() {
		return new ResponseEntity(HttpStatus.NO_CONTENT);
	}
}
