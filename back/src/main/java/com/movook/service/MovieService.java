package com.movook.service;

import com.movook.vo.Movie;

public interface MovieService {
    String getGenreName(String genre_id) throws Exception;
    String searchMovieByTitle(String movie_title) throws Exception;
    boolean saveMovieData(Movie movie) throws Exception;
    boolean findMovieData(String movie_id) throws Exception;
}
