package com.movook.mapper;

import com.movook.vo.User;
import org.apache.ibatis.annotations.Mapper;

import java.util.Map;

@Mapper
public interface UserMapper {
    boolean join(User user) throws Exception;
    User loadUser(User user) throws Exception;
    boolean findUser(User user) throws Exception;
    void saveRefreshToken(Map map) throws Exception;
    Object getRefreshToken(String id) throws Exception;
    void delRefreshToken(String id) throws Exception;
    String searchPw(User user) throws Exception;
    boolean changePw(User user) throws Exception;
}
