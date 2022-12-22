package com.movook.vo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Book {
	private int seq_num;
	private String isbn_num;
	private String book_title;
	private String writer;
	private String publisher;
	private String book_date;
	private String image;
}
