package com.movook.mapper;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Mapper;

import com.movook.vo.Book;

@Mapper
public interface BookMapper {
	ArrayList<Book> getBookList();
	ArrayList<Book> bookSearchTitle(String book_title);
	Book bookRead(int isbn_num);
	void bookInsert(Book b);
	void bookUpdate(Book b);
	void bookDelete(int isbn_num);
}
