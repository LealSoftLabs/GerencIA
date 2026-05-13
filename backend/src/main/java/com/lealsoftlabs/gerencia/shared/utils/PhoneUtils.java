package com.lealsoftlabs.gerencia.shared.utils;

public class PhoneUtils {

    public static String normalize(
            String phone
    ) {

        return phone.replaceAll("[^0-9]", "");
    }
}