package com.movook.mapper;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Mapper;

import com.movook.vo.Movie;

@Mapper
public interface MovieMapper {
	ArrayList<Movie> getMovieList();
	ArrayList<Movie> movieSearchTitle(String title);
	Movie movieRead(String movie_id);
	String movieInsert(Movie m);
	String movieUpdate(Movie m);
	String movieDelete(String movie_id);
}
