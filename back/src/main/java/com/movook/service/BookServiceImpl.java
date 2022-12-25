package com.movook.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movook.mapper.BookMapper;
import com.movook.vo.Book;

@Service
public class BookServiceImpl implements BookService {

	@Autowired
	BookMapper mapper;
	
	@Override
	public ArrayList<Book> getBookList() {
		return mapper.getBookList();
	}

	@Override
	public ArrayList<Book> bookSearchTitle(String book_title) {
		return mapper.bookSearchTitle(book_title);
	}

	@Override
	public Book bookRead(int isbn_num) {
		return mapper.bookRead(isbn_num);
	}

	@Override
	public void bookInsert(Book b) {
		mapper.bookInsert(b);
	}

	@Override
	public void bookUpdate(Book b) {
		mapper.bookUpdate(b);
	}

	@Override
	public void bookDelete(int isbn_num) {
		mapper.bookDelete(isbn_num);
	}

}
