package com.jars.eschool.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class JSPController {

  @RequestMapping("/jsptest")
    public String test(ModelAndView modelAndView) {
        
        return "test";
  }
    
}