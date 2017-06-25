package com.bitspur.lms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bitspur.lms.domain.User;

@RestController
@EnableAutoConfiguration
@CrossOrigin
public class LMSApplication {
	@RequestMapping(value = "/api/users/{id}")
	public User home(@PathVariable("id") String id) {
		User user = new User();
		user.setName(id);
		return user;
	}

	public static void main(String[] args) {
		SpringApplication.run(LMSApplication.class, args);
	}

}
