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
public class Movie {
	private String movie_id;
	private String movie_title;
	private String genre;
	private String sign;
	private String summary;
	private String movie_date;
	private String movie_language;
	private String adult;
}
