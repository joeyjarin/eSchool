package com.jars.eschool.main.service;

import com.jars.eschool.main.domain.User;

public interface UserService {
	
	User getUser(String userName, String password);

}
