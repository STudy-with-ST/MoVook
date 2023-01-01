package com.movook.mapper;


import org.apache.ibatis.annotations.Mapper;

import com.movook.vo.Movie;

@Mapper
public interface MovieMapper {
	String getGenreName(String genre_id) throws Exception;
	Movie movieRead(String movie_id) throws Exception;
	boolean movieInsert(Movie movie) throws Exception;
}
