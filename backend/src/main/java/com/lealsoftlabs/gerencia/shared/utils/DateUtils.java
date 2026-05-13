package com.lealsoftlabs.gerencia.shared.utils;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class DateUtils {

    private static final DateTimeFormatter FORMATTER =
            DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm");

    public static String format(
            LocalDateTime dateTime
    ) {

        return dateTime.format(FORMATTER);
    }
}