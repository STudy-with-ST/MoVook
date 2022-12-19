package com.movook.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.movook.service.UserService;

import io.swagger.annotations.Api;

@RestController
@CrossOrigin("*")
@Api(value = "회원 정보 API 입니다.")
public class UserRestController {

	@Autowired
	UserService service;
}
