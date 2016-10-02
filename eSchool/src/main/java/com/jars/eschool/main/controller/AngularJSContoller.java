package com.jars.eschool.main.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class AngularJSContoller {

	@RequestMapping("/angular")
	public String home() {
        
        return "/angularApp.html";
	}
    
}