package com.movook.service;

import java.util.ArrayList;

import com.movook.vo.Book;

public interface BookService {
	ArrayList<Book> getBookList();
	ArrayList<Book> bookSearchTitle(String book_title);
	Book bookRead(int isbn_num);
	boolean bookInsert(Book b);
	boolean bookUpdate(Book b);
	boolean bookDelete(String isbn_num);
}
