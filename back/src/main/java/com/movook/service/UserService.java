package com.movook.service;

import com.movook.vo.User;

import java.util.Map;

public interface UserService {
    boolean join(User user) throws Exception;
    User login(User user) throws Exception;
    void saveRefreshToken(Map map) throws Exception;
    Object getRefreshToken(String id) throws Exception;
    void delRefreshToken(String id) throws Exception;
    boolean searchPw(User user);
    boolean changePw(User user);
}