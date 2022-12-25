package com.movook.service;

import com.movook.mapper.UserMapper;
import com.movook.vo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class UserServiceImpl implements UserService{

    UserMapper userMapper;

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
        return userMapper.getRefreshToken(id);
    }

    @Override
    public void delRefreshToken(String id) throws Exception {
        userMapper.delRefreshToken(id);
    }

    @Override
    public boolean searchPw(User user) {
        return userMapper.searchPw(user);
    }

    @Override
    public boolean changePw(User user) {
        return userMapper.changePw(user);
    }
}