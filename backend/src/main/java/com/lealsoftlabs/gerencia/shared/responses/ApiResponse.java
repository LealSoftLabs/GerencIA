package com.lealsoftlabs.gerencia.shared.responses;

public record ApiResponse<T>(

        boolean success,

        String message,

        T data

) {
}