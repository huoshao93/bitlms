package com.bitspur.lms.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.bitspur.lms.constants.ResponseString;
import com.bitspur.lms.model.User;

@RestController
@RequestMapping("api/users/")
public class UserController {

	private final Logger LOG = LoggerFactory.getLogger(UserController.class);

	@RequestMapping("/secured/haha")

	public String test() {
		return ResponseString.SUCCESS;
	}

	@RequestMapping(value = "/reg", method = RequestMethod.POST)
	public User test2(@RequestBody User user) {
		user.setId(Long.valueOf("2"));
		LOG.debug("user saved");
		return user;
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public User test3(@PathVariable("id") String id) {
		User user = new User();
		user.setId(Long.valueOf(id));
		user.setEmail("test@gmail.com");
		user.setFirstName("Alan");
		user.setLastName("Groval");
		user.setMobile("12345678");
		user.setStatus("active");
		return user;
	}

}
