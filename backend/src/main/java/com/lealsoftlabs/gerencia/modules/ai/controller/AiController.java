package com.lealsoftlabs.gerencia.modules.ai.controller;

import com.lealsoftlabs.gerencia.modules.ai.dto.AiChatRequestDTO;
import com.lealsoftlabs.gerencia.modules.ai.dto.AiChatResponseDTO;
import com.lealsoftlabs.gerencia.modules.ai.service.AiService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/ai")
@RequiredArgsConstructor
public class AiController {

    private final AiService aiService;

    @PostMapping("/chat")
    public ResponseEntity<AiChatResponseDTO> chat(
            @RequestBody AiChatRequestDTO request
    ) {

        return ResponseEntity.ok(
                aiService.chat(request)
        );
    }
}