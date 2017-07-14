package com.bitspur.lms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.bitspur.lms.config.JPAConfig;
import com.bitspur.lms.config.SecConfig;

@Import({ JPAConfig.class, SecConfig.class })
@SpringBootApplication
@CrossOrigin
public class LMSApplication {
	public static void main(String[] args) {
		SpringApplication.run(LMSApplication.class, args);
	}
}
