package com.jars.eschool.controllers;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class HelloController {

    @RequestMapping("/")
    public String index() {
        return "Greetings from JARS eSchool!";
    }

    @RequestMapping("/jsontest") 
    public @ResponseBody Map<String, String> callSomething () {
        
        Map<String, String> map = new HashMap<String, String>();
        map.put("url", "http://www.jars.com");
        
        return map;
    }    
}