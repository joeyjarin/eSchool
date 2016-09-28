package com.jars.eschool.main;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.jars.eschool.main.domain.User;
import com.jars.eschool.main.repository.UserRepository;

@SpringBootApplication
public class Application {
	
	private static final Logger log = LoggerFactory.getLogger(Application.class);

	public static void main(String[] args) {
		ApplicationContext ctx = SpringApplication.run(Application.class, args);

		System.out.println("--== MAIN APPLICATION STARTED ==--");

		// String[] beanNames = ctx.getBeanDefinitionNames();
		// Arrays.sort(beanNames);
		// for (String beanName : beanNames) {
		// System.out.println(beanName);
		// }
	}
	
	@Bean
	public CommandLineRunner loadData(UserRepository repository) {
		return (args) -> {
			User newUser = new User();
			newUser.setFirstName("test");
			newUser.setLastName("test");
			newUser.setUserName("test");
			newUser.setPassword("test");
			repository.save(newUser);
			
			// fetch all users
			log.info("users found with findAll():");
			log.info("-------------------------------");
			for (User user : repository.findAll()) {
				log.info(user.toString());
			}
			log.info("");

			User user = repository.findOne(1);
			log.info("user found with findOne(1):");
			log.info("--------------------------------");
			log.info(user.toString());
			log.info("");

			// fetch customers by last name
			log.info("repository.findByUserName(\"test\");");
			log.info("--------------------------------------------");
			List<User> list = repository.findByUserName("test");
			log.info(list.get(0).toString());
		};
	}

}