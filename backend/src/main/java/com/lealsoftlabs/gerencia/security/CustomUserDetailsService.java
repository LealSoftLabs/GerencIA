package com.lealsoftlabs.gerencia.security;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;

import org.springframework.security.core.userdetails.UserDetailsService;

import org.springframework.security.core.userdetails.UsernameNotFoundException;

import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Override
    public UserDetails loadUserByUsername(String username)
            throws UsernameNotFoundException {

        /*
         FUTURAMENTE:
         buscar usuário no banco.
        */

        if (!username.equals("admin@gerencia.com")) {

            throw new UsernameNotFoundException(
                    "Usuário não encontrado"
            );
        }

        return User.builder()
                .username("admin@gerencia.com")
                .password(
                        "$2a$10$DowJonesIndexExamplePasswordHash123456789"
                )
                .roles("ADMIN")
                .build();
    }
}