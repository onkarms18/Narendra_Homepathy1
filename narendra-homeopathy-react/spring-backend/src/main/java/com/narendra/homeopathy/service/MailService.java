package com.narendra.homeopathy.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MailService {
    private final JavaMailSender sender;
    @Value("${app.mail.from:}") private String from;
    @Value("${app.mail.to:}") private String to;

    public MailService(JavaMailSender sender) { this.sender = sender; }

    public boolean send(String subject, String text, String replyTo) {
        if (to == null || to.isBlank()) return false;
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(from == null || from.isBlank() ? to : from);
        message.setTo(to);
        if (replyTo != null && !replyTo.isBlank()) message.setReplyTo(replyTo);
        message.setSubject(subject);
        message.setText(text);
        sender.send(message);
        return true;
    }
}
