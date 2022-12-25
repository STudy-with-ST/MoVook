package com.movook.service;

import com.movook.vo.Movie;
import org.springframework.stereotype.Service;

@Service
public class MovieServiceImpl implements MovieService {

    @Override
    public String getGenreName(String genre_id) throws Exception {
        return null;
    }

    @Override
    public String searchMovieByTitle(String movie_title) throws Exception {
        return null;
    }

    @Override
    public boolean saveMovieData(Movie movie) throws Exception {
        return false;
    }

    @Override
    public boolean findMovieData(String movie_id) throws Exception {
        return false;
    }
}
