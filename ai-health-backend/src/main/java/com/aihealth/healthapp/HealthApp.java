package com.aihealth.healthapp;

import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableScheduling
public class HealthApp{

	public static void main(String[] args) throws Exception{
		SpringApplication.run(HealthApp.class, args);
	}
	
}