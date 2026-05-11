package com.lealsoftlabs.gerencia.modules.ai.integrations;

import org.springframework.stereotype.Component;

@Component
public class OpenAiIntegration {

    public String sendMessage(String message) {

        return "Resposta mockada da IA para: " + message;
    }
}