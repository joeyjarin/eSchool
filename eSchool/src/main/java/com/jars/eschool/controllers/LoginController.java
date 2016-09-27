package com.jars.eschool.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class LoginController {

  @RequestMapping("/login")
	public String login(ModelAndView modelAndView, @RequestParam("username") String username,
			@RequestParam("password") String password) {
        if (!username.isEmpty() && !username.isEmpty()) {
        	System.out.println("In Test");
        	return "test";
        } else {
        	System.out.println("In /");
            return "/";        	
        }        		
  }
    
}