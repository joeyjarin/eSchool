package com.jars.eschool.main.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class AngularTestConroller {

	@RequestMapping("/angulartest")
	public String home() {
        
        return "/angulartest/angulartest.html";
	}
    
}