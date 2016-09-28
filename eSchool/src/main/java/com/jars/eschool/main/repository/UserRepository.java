package com.jars.eschool.main.repository;


import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.jars.eschool.main.domain.User;

public interface UserRepository extends CrudRepository<User, Integer>{

	List<User> findByUserName(String userName);
	
	
}
