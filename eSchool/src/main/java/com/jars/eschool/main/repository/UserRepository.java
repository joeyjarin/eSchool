package com.jars.eschool.main.repository;


import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.jars.eschool.main.domain.User;

@RepositoryRestResource(collectionResourceRel = "users", path = "users")
public interface UserRepository extends PagingAndSortingRepository<User, Integer>{
	
	User findByUserName(@Param("userName") String userName);
	
	User findByUserNameAndPassword(@Param("userName") String userName, @Param("password") String password);
	
	
	
}
