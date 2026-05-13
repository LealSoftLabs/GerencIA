package com.lealsoftlabs.gerencia.modules.ai.service;

import com.lealsoftlabs.gerencia.modules.ai.dto.AiChatRequestDTO;
import com.lealsoftlabs.gerencia.modules.ai.dto.AiChatResponseDTO;

import com.lealsoftlabs.gerencia.modules.ai.integrations.OpenAiIntegration;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AiService {

    private final OpenAiIntegration openAiIntegration;

    public AiChatResponseDTO chat(
            AiChatRequestDTO request
    ) {

        String response =
                openAiIntegration.sendMessage(
                        request.message()
                );

        return new AiChatResponseDTO(response);
    }
}