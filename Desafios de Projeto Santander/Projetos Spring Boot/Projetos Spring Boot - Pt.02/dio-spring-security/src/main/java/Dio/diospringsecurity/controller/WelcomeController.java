package Dio.diospringsecurity.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WelcomeController {

    @GetMapping
    public String welcome() {
        return "Welcome to My Spring Boot Web API";
    }

    @GetMapping("/users")
    //@PreAuthorize("hasAnyRole('MANAGERS','USERS')") // Caso 1
    public String users() {
        return "Authorized user";
    }

    @GetMapping("/managers")
    //@PreAuthorize("hasRole('MANAGERS')") // Caso 1
    public String managers() {
        return "Authorized manager";
    }
}
