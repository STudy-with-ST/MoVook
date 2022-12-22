package com.movook.service;

import com.movook.mapper.UserMapper;
import com.movook.vo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class UserServiceImpl implements UserService {

    private UserMapper userMapper;

    @Autowired
    public UserServiceImpl(UserMapper userMapper) {
        this.userMapper = userMapper;
    }

    @Override
    public boolean join(User user) throws Exception {
        return userMapper.join(user);
    }

    @Override
    public User login(User user) throws Exception {
        if(userMapper.findUser(user)){
            return userMapper.loadUser(user);
        }
        return null;
    }

    @Override
    public void saveRefreshToken(Map map) throws Exception {
        userMapper.saveRefreshToken(map);
    }

    @Override
    public Object getRefreshToken(String id) throws Exception {
        return null;
    }

    @Override
    public void delRefreshToken(String id) throws Exception {

    }

    @Override
    public String searchPw(User user) {
        return null;
    }

    @Override
    public String changePw(User user) {
        return null;
    }
}
