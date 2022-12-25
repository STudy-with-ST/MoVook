package com.movook.mapper;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Mapper;

import com.movook.vo.Book;

@Mapper
public interface BookMapper {
	ArrayList<Book> getBookList();
	ArrayList<Book> bookSearchTitle(String book_title);
	Book bookRead(int isbn_num);
	String bookInsert(Book b);
	String bookUpdate(Book b);
	String bookDelete(int isbn_num);
}
