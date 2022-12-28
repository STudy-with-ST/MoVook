package com.movook.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movook.mapper.BookMapper;
import com.movook.vo.Book;

@Service
public class BookServiceImpl implements BookService {

	@Override
	public ArrayList<Book> getBookList() {
		return null;
	}

	@Override
	public ArrayList<Book> bookSearchTitle(String book_title) {
		return null;
	}

	@Override
	public Book bookRead(int isbn_num) {
		return null;
	}

	@Override
	public boolean bookInsert(Book b) {
		return mapper.bookInsert(b);
	}

	@Override
	public boolean bookUpdate(Book b) {
		return mapper.bookUpdate(b);
	}

	@Override
	public boolean bookDelete(String isbn_num) {
		return mapper.bookDelete(isbn_num);
	}
}
