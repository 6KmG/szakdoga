package com.szakdolgozat.szakdoga.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class SampleController {

    @GetMapping("/greeting")
    public String greeting() {
        return "Hello from Spring Boot!";
    }
}
