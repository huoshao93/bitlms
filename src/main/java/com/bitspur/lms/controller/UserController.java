package com.bitspur.lms.controller;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bitspur.lms.model.User;

@RestController
@RequestMapping("api/users/")
public class UserController {

	@RequestMapping("/secured/haha")
	public String test() {
		return "haha secured";
	}

	@RequestMapping("/{id}")
	public ResponseEntity<User> test2(@PathVariable("id") String id) {
		User user = new User();
		user.setId(Long.valueOf(id));
		user.setEmail("test@gmail.com");
		user.setFirstName("Jim");
		user.setLastName("Green");
		user.setMobile("12345678");
		user.setStatus("active");
		MultiValueMap<String, String> headers = new HttpHeaders();
		headers.add("Access-Control-Allow-Origin", "*");

		return new ResponseEntity<User>(user, headers, HttpStatus.OK);
	}

}
