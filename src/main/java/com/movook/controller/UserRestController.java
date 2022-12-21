package com.movook.controller;

import com.movook.service.JwtService;
import com.movook.vo.User;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.movook.service.UserService;

import io.swagger.annotations.Api;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin("*")
@Api(value = "회원 정보 API 입니다.")
public class UserRestController {

	private final Logger logger = LoggerFactory.getLogger(UserRestController.class);

	private UserService userService;
	private JwtService jwtService;

	private static final String OK = "success";
	private static final String NO = "fail";

	@Autowired
	public UserRestController(UserService userService, JwtService jwtService) {
		this.userService = userService;
		this.jwtService = jwtService;
	}

	@ApiOperation(value = "회원 가입", notes = "사용자 회원가입 후, 성공 여부를 반환해 줍니다.")
	@PostMapping("/join")
	public ResponseEntity<?> join(@RequestBody User user){
		try {
			if (userService.join(user)) {
				return new ResponseEntity<String>(OK, HttpStatus.OK);
			} else {
				return new ResponseEntity<String>(NO, HttpStatus.BAD_REQUEST);
			}
		}catch (Exception e){
			e.printStackTrace();
			return new ResponseEntity<String>(e.getMessage()+" error", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	/* 로그인 */
	@ApiOperation(value = "로그인", notes = "로그인 후, 사용자 정보를 반환해 줍니다.")
	@PostMapping(value = "/login")
	public ResponseEntity<?> login(@RequestBody @ApiParam(value = "로그인 시 필요한 회원정보(user_id, password).", required = true) User user) {
		Map<String, Object> resultMap = new HashMap<>();
		HttpStatus status = null;
		try {
			User nUser = userService.login(user);
			if (nUser != null) {

				// token 생성
				String accessToken = jwtService.createAccessToken("id", nUser.getUser_id());
				String refreshToken = jwtService.createRefreshToken("id", nUser.getUser_id());


				// refresh token을 데이터베이스에 저장
				Map<String, String> map = new HashMap<>();
				map.put("id", nUser.getUser_id());
				map.put("token", refreshToken);
				userService.saveRefreshToken(map);

				// 로그 출력
				logger.debug("로그인 accessToken 정보 : {}", accessToken);
				logger.debug("로그인 refreshToken 정보 : {}", refreshToken);

				// response map
				resultMap.put("access-token", accessToken);
				resultMap.put("refresh-token", refreshToken);
				resultMap.put("message", OK);

				status = HttpStatus.ACCEPTED;
				System.out.println(resultMap);
			} else {
				resultMap.put("message", NO);
				status = HttpStatus.ACCEPTED;
			}
		} catch (Exception e) {
			logger.error("로그인 실패 : {}", e);
			resultMap.put("message", e.getMessage());
			status = HttpStatus.INTERNAL_SERVER_ERROR;
		}
		return new ResponseEntity<Map<String, Object>>(resultMap, status);
	}

	@ApiOperation(value = "로그아웃", notes = "회원 정보를 담은 Token을 제거한다.", response = Map.class)
	@GetMapping("/logout/{user_id}")
	public ResponseEntity<?> logout(@PathVariable String user_id){
		Map<String, Object> resultMap = new HashMap<>();
		HttpStatus status = HttpStatus.ACCEPTED;
		try {
			userService.delRefreshToken(user_id);
			resultMap.put("message", OK);
		} catch (Exception e) {
			logger.error("로그아웃 실패 : {}", e);
			resultMap.put("message", e.getMessage());
			status = HttpStatus.INTERNAL_SERVER_ERROR;
		}
		return new ResponseEntity<Map<String, Object>>(resultMap, status);
	}

	@ApiOperation(value = "비밀번호 찾기", notes = "user_id와 email을 입력받아 비밀번호를 찾는다.")
	@PostMapping("/pw/search")
	public ResponseEntity<?> searchPw(@RequestBody User user){
		try {
			return new ResponseEntity<String>(userService.searchPw(user), HttpStatus.OK);
		} catch (Exception e) {
			logger.error("아이디가 존재하지 않습니다. : {}", e);
			return new ResponseEntity<String>(NO, HttpStatus.NO_CONTENT);
		}
	}

	@ApiOperation(value = "", notes = "user_id와 email을 입력받아 비밀번호를 찾는다.")
	@PostMapping("/pw/change")
	public ResponseEntity<?> changePw(@RequestBody User user){
		try {
			return new ResponseEntity<String>(userService.changePw(user), HttpStatus.OK);
		} catch (Exception e) {
			logger.error("아이디가 존재하지 않습니다. : {}", e);
			return new ResponseEntity<String>(NO, HttpStatus.NO_CONTENT);
		}
	}

}
