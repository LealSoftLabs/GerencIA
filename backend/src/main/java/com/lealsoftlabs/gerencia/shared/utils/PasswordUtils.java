package com.lealsoftlabs.gerencia.shared.utils;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class PasswordUtils {

    private static final BCryptPasswordEncoder encoder =
            new BCryptPasswordEncoder();

    public static String encrypt(
            String password
    ) {

        return encoder.encode(password);
    }
}