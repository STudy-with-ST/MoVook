package com.movook.service;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.movook.controller.MovieRestController;
import com.movook.mapper.MovieMapper;
import com.movook.vo.Movie;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

@Service
public class MovieServiceImpl implements MovieService {

    private String api_key = "e59d8b977e64e85f5ca5fbd375997328";
    private String base_url = "https://api.themoviedb.org/3";
    private final Logger logger = LoggerFactory.getLogger(MovieRestController.class);
    private String img_base_url = "https://image.tmdb.org/t/p/original";

    MovieMapper movieMapper;

    @Autowired
    public MovieServiceImpl(MovieMapper movieMapper) {
        this.movieMapper = movieMapper;
    }

    @Override
    public String getGenreName(String genre_id) throws Exception {
        return movieMapper.getGenreName(genre_id);
    }

    @Override
    public boolean updateGenreList() throws Exception {
        StringBuilder query = new StringBuilder();
        query.append(base_url);
        query.append("/genre/movie/list?api_key=");
        query.append(api_key);
        query.append("&language=ko-KR");

        URL url = new URL(query.toString());
        BufferedReader br = new BufferedReader(new InputStreamReader(url.openStream(), "UTF-8"));

        String result = br.readLine();
        JsonParser jsonParser = new JsonParser();
        JsonObject jsonObject = (JsonObject) jsonParser.parse(result);
        logger.info("genre {}", jsonObject);
        JsonArray genres = jsonObject.get("genres").getAsJsonArray();
        for (JsonElement genre : genres) {
            String id = genre.getAsJsonObject().get("id").toString();
            String name = genre.getAsJsonObject().get("name").toString();
            System.out.println("('"+id+"', '"+name.substring(1,name.length()-1)+"'),");
        }
        return false;
    }

    @Override
    public List searchMovieByTitle(String movie_title) throws Exception {
        StringBuilder query = new StringBuilder();
        query.append(base_url);
        query.append("/search/movie?api_key=");
        query.append(api_key);
        query.append("&region=KR&language=ko-KR");
        query.append("&query=");
        query.append(movie_title);
        URL url = new URL(query.toString());

        BufferedReader br = new BufferedReader(new InputStreamReader(url.openStream(), "UTF-8"));

        String result = br.readLine();
        JsonParser jsonParser = new JsonParser();

        // result
        JsonObject jsonObject = (JsonObject) jsonParser.parse(result);

        // results column in result json
        JsonArray array = jsonObject.get("results").getAsJsonArray();
//        logger.info("result {}", array);

        // pop data from results
        List<Movie> list = new ArrayList<>();
        for (int i = 0; i < array.size(); i++) {
            JsonObject element = array.get(i).getAsJsonObject();

            // If there is no poster
//            if(element.get("poster_path").toString().replaceAll("\"", "").equals("null")) continue;

            // genre_ids -> genre_name
            JsonArray genreIds = element.get("genre_ids").getAsJsonArray();
            List<String> genreNames = new ArrayList<>();
            for (JsonElement genreId : genreIds) genreNames.add(this.getGenreName(genreId.toString()));

            // form movie class
            Movie tmp = new Movie(element.get("id").toString(),
                    element.get("title").toString().replaceAll("\"", ""),
                    genreNames.toString().replaceAll("\"", ""),
                    element.get("poster_path").toString().replaceAll("\"", "").equals("null") ? "": img_base_url+element.get("poster_path").toString().replaceAll("\"", ""),
                    element.get("overview").toString().replaceAll("\"", ""),
                    element.get("release_date").toString().replaceAll("\"", ""),
                    element.get("original_language").toString().replaceAll("\"", ""),
                    element.get("vote_average").getAsFloat(),
                    element.get("popularity").getAsFloat(),
                    element.get("adult").getAsBoolean());
            logger.info("elements {}",tmp);

            // add in list
            list.add(tmp);

            // store in DB
            if(!movieMapper.existInDb(tmp.getMovie_id())){
                logger.info("NEW DATA | INSERT {}",tmp);
                this.movieInsert(tmp);
            }
        }
        list.sort((e1, e2)-> {
            return (int) (e2.getPopularity() - e1.getPopularity());
        });
        return list;
    }

    @Override
    public Movie movieRead(String movie_id) throws Exception {
        return movieMapper.movieRead(movie_id);
    }

    @Override
    public boolean movieInsert(Movie movie) throws Exception {
        return movieMapper.movieInsert(movie);
    }
}
