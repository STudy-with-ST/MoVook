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
public class Review {
	private String review_id;
	private String comment;
	private String star_grade;
	private String start_date;
	private String end_date;
	private String regist_date;
	private String open_use;
	private String book_seq_num;
	private String movie_id;
	private String user_id;
	private String review_image;
}
