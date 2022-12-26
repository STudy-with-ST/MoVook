package com.movook.service;

import com.movook.vo.User;

import java.util.Map;

public interface UserService {
    boolean join(User user) throws Exception;
    User login(User user) throws Exception;
    void saveRefreshToken(Map map) throws Exception;
    Object getRefreshToken(String id) throws Exception;
    void delRefreshToken(String id) throws Exception;
    String searchPw(User user) throws Exception;
    boolean changePw(User user) throws Exception;
}