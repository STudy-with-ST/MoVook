package com.movook.controller;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import io.swagger.annotations.ApiOperation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.movook.service.MovieService;

import io.swagger.annotations.Api;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;

@RestController
@CrossOrigin("*")
@Api(value = "영화 정보 API 입니다.")
public class MovieRestController {

	MovieService movieService;
	private final Logger logger = LoggerFactory.getLogger(MovieRestController.class);

	private String api_key = "e59d8b977e64e85f5ca5fbd375997328";
	private String base_url = "https://api.themoviedb.org/3";
	private String img_base_url = "https://image.tmdb.org/t/p/original";

	@Autowired
	public MovieRestController(MovieService movieService) {
		this.movieService = movieService;
	}

	@ApiOperation(value = "영화 검색", notes = "제목 검색 결과를 리턴합니다.")
	@GetMapping("/movie/search/{title}")
	public ResponseEntity<?> getMovieList(@PathVariable String title){
		try {
			StringBuilder query = new StringBuilder();
			query.append(base_url);
			query.append("/search/movie?api_key=");
			query.append(api_key);
			query.append("&region=KR&language=ko-KR");
			query.append("&query=");
			query.append(title);
			URL url = new URL(query.toString());

			BufferedReader br = new BufferedReader(new InputStreamReader(url.openStream(), "UTF-8"));

			String result = br.readLine();
			JsonParser jsonParser = new JsonParser();
			JsonObject jsonObject = (JsonObject) jsonParser.parse(result);
			logger.info("total_pages {}",jsonObject.get("total_pages").toString());
			logger.info("results {}",jsonObject.get("results").toString());
			JsonArray array = jsonObject.get("results").getAsJsonArray();

			return new ResponseEntity<String>(array.toString(), HttpStatus.OK);
		}catch (Exception e){
			System.out.println(e.getMessage());
		}
		return new ResponseEntity<String>("fail", HttpStatus.INTERNAL_SERVER_ERROR);
	}

	@GetMapping("/movie/genres")
	public ResponseEntity<?> getGenreList(){
		try {
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
			return new ResponseEntity<String>(jsonObject.toString(), HttpStatus.OK);
		}catch (Exception e){
			logger.warn(e.getMessage());
		}
		return new ResponseEntity<String>("fail", HttpStatus.INTERNAL_SERVER_ERROR);
	}

}
