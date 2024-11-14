package com.szakdolgozat.szakdoga.service;

import org.springframework.stereotype.Service;

@Service
public class AuthService {

    // Simple token validation (replace with actual validation logic)
    public boolean isTokenValid(String token) {
        // In a real scenario, validate the JWT or session token
        // For example: return JWTUtil.verifyToken(token);
        return token != null && token.startsWith("Bearer ");
    }
}
