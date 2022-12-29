package com.movook.controller;
import com.movook.service.EmailService;
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

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin("*")
@Api(value = "회원 정보 API 입니다.")
public class UserRestController {

    private final Logger logger = LoggerFactory.getLogger(UserRestController.class);

    private UserService userService;
    private JwtService jwtService;
    private EmailService emailService;

    private static final String OK = "success";
    private static final String NO = "fail";

    @Autowired
    public UserRestController(UserService userService, JwtService jwtService, EmailService emailService) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.emailService = emailService;
    }

    @ApiOperation(value = "아이디 중복 확인", notes = "아이디를 입력받아 이미 사용중인지 판별합니다. 사용 중이라면 'duplicated'를 사용 가능하면 'available'을 리턴합니다.")
    @GetMapping("/id/check/{user_id}")
    public ResponseEntity<?> join(@PathVariable String user_id){
        try {
            if (!userService.joined(user_id)) {
                return new ResponseEntity<String>("available", HttpStatus.OK);
            } else {
                return new ResponseEntity<String>("duplicated", HttpStatus.OK);
            }
        }catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<String>(e.getMessage()+" error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
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
    @ApiOperation(value = "로그인", notes = "로그인 후, 사용자 정보를 반환해 줍니다. 로그인 시 필요한 회원정보(user_id, password).")
    @PostMapping(value = "/login")
    public ResponseEntity<?> login(@RequestBody @ApiParam(value = "로그인 시 필요한 회원정보(user_id, password).", required = true) User user) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = null;
        try {
            System.out.println("???");
            User nUser = userService.login(user);
            System.out.println(nUser);
            if (nUser != null) {

                // token 생성
                String accessToken = jwtService.createAccessToken("user_id", nUser.getUser_id());
                String refreshToken = jwtService.createRefreshToken("user_id", nUser.getUser_id());

                // refresh token을 데이터베이스에 저장
                Map<String, String> map = new HashMap<>();
                map.put("user_id", nUser.getUser_id());
                map.put("refresh_token", refreshToken);
                userService.saveRefreshToken(map);

                // 로그 출력
                logger.debug("로그인 accessToken 정보 : {}", accessToken);
                logger.debug("로그인 refreshToken 정보 : {}", refreshToken);

                // response map
                resultMap.put("access_token", accessToken);
                resultMap.put("refresh_token", refreshToken);
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

    @ApiOperation(value = "비밀번호 찾기(이메일 인증)", notes = "user_id와 email을 입력받아 비밀번호를 찾는다. 해당하는 사용자가 존재한다면 Email로 인증코드를 발송을 수행 한 뒤 인증코드를 문자열의 형태로 리턴한다.")
    @PostMapping("/pw/search/email")
    public ResponseEntity<?> searchPw(@RequestBody User user){
        try {
            String password = userService.searchPw(user);
            if(password != null){
                String confirm = emailService.sendMessage(user.getEmail());
                return new ResponseEntity<String>(confirm, HttpStatus.OK);
            }else{
                return new ResponseEntity<String>(NO, HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
            logger.error("아이디가 존재하지 않습니다. : {}", e);
            return new ResponseEntity<String>(NO, HttpStatus.NO_CONTENT);
        }
    }

    @ApiOperation(value = "비밀번호 찾기(이메일 인증 후 초기화)", notes = "인증코드를 올바르게 입력했을 때 호출한다. user_id와 password를 입력받아 password를 변경한다.")
    @PostMapping("/pw/search/reset")
    public ResponseEntity<?> changePw(@RequestBody User user){
        try {
            if(userService.changePw(user)){
                return new ResponseEntity<String>(OK, HttpStatus.OK);
            }return new ResponseEntity<String>(NO, HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            logger.error("아이디가 존재하지 않습니다. : {}", e);
            return new ResponseEntity<String>(NO, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @ApiOperation(value = "유효 토큰 여부 확인", notes = "Access token의 유효성을 검증해 유효하면 'success' 유효하지 않다면 'fail' ", response = Map.class)
    @GetMapping("/auth")
    public ResponseEntity<?> checkAuth(HttpServletRequest request) {
        HttpStatus status = HttpStatus.UNAUTHORIZED;
        String msg = OK;
        if (jwtService.checkToken(request.getHeader("access_token"))) {
            try {
                status = HttpStatus.ACCEPTED;
            } catch (Exception e) {
                logger.error("정보조회 실패 : {}", e);
                status = HttpStatus.INTERNAL_SERVER_ERROR;
            }
        } else {
            logger.error("사용 불가능 토큰!!!");
            msg = NO;
            status = HttpStatus.UNAUTHORIZED;
        }
        return new ResponseEntity<String>(msg, status);
    }

    @ApiOperation(value = "Access Token 재발급", notes = "만료된 access token을 재발급받는다.", response = Map.class)
    @GetMapping("/auth/refresh/{user_id}")
    public ResponseEntity<?> checkRefresh(@PathVariable String user_id, HttpServletRequest request) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = HttpStatus.ACCEPTED;
        String token = request.getHeader("refresh_token");
        logger.debug("token : {}, memberDto : {}", token, user_id);
        if (jwtService.checkToken(token)) {
            try {
                if (token.equals(userService.getRefreshToken(user_id))) {
                    String accessToken = jwtService.createAccessToken("user_id", user_id);
                    logger.debug("token : {}", accessToken);
                    logger.debug("정상적으로 액세스토큰 재발급!!!");
                    resultMap.put("access_token", accessToken);
                    resultMap.put("message", OK);
                    status = HttpStatus.ACCEPTED;
                }
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        } else {
            logger.debug("리프레쉬토큰도 사용불!!!!!!!");
            status = HttpStatus.UNAUTHORIZED;
        }
        return new ResponseEntity<Map<String, Object>>(resultMap, status);
    }

}
