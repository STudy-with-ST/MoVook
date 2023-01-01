package com.movook.service;

import com.movook.vo.Movie;

import java.util.List;

public interface MovieService {
    String getGenreName(String genre_id) throws Exception;
    boolean updateGenreList() throws Exception;
    List searchMovieByTitle(String movie_title) throws Exception;
    Movie movieRead(String movie_id) throws Exception;
    boolean movieInsert(Movie movie) throws Exception;
}
