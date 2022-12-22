package com.movook.service;

import java.util.ArrayList;

import com.movook.vo.Book;

public interface BookService {
	ArrayList<Book> getBookList();
	ArrayList<Book> bookSearchTitle(String book_title);
	Book bookRead(int isbn_num);
	void bookInsert(Book b);
	void bookUpdate(Book b);
	void bookDelete(int isbn_num);
}
