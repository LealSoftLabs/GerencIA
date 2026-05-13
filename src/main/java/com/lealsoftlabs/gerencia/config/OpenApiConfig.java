package com.lealsoftlabs.gerencia.config;

import io.swagger.v3.oas.models.ExternalDocumentation;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI gerenciaOpenAPI() {

        return new OpenAPI()
                .info(new Info()
                        .title("GerencIA API")
                        .description("API do sistema GerencIA")
                        .version("1.0.0"))
                .externalDocs(new ExternalDocumentation()
                        .description("LealSoft Labs"));
    }
}