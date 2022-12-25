package com.movook.mapper;

import com.movook.vo.User;
import org.apache.ibatis.annotations.Mapper;

import java.util.Map;

@Mapper
public interface UserMapper {
    boolean join(User user) throws Exception;
    User loadUser(User user);
    boolean findUser(User user);
    void saveRefreshToken(Map map) throws Exception;
    Object getRefreshToken(String id) throws Exception;
    void delRefreshToken(String id) throws Exception;
    String searchPw(User user);
    String changePw(User user);

}
