package com.narendra.homeopathy.controller;

import com.narendra.homeopathy.model.Appointment;
import com.narendra.homeopathy.model.ContactMessage;
import com.narendra.homeopathy.repository.AppointmentRepository;
import com.narendra.homeopathy.repository.ContactMessageRepository;
import com.narendra.homeopathy.service.MailService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import java.util.Map;
import javax.sql.DataSource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
public class ApiController {
    private final AppointmentRepository appointments;
    private final ContactMessageRepository contacts;
    private final MailService mailService;
    private final DataSource dataSource;

    public ApiController(AppointmentRepository appointments, ContactMessageRepository contacts, MailService mailService, DataSource dataSource) {
        this.appointments = appointments;
        this.contacts = contacts;
        this.mailService = mailService;
        this.dataSource = dataSource;
    }

    @GetMapping("/api/health")
    public ResponseEntity<?> health() {
        boolean connected = false;
        try (var connection = dataSource.getConnection()) { connected = connection.isValid(2); }
        catch (Exception ignored) { }
        return ResponseEntity.ok(Map.of("ok", true, "databaseConfigured", true, "databaseConnected", connected));
    }

    @PostMapping({"/api/appointments", "/appoinment.php"})
    public ResponseEntity<?> appointment(@Valid @RequestBody AppointmentRequest request) {
        Appointment appointment = new Appointment();
        appointment.setName(request.name().trim());
        appointment.setEmail(request.email() == null ? "" : request.email().trim());
        appointment.setPhone(request.phone().trim());
        appointment.setAppointmentDate(request.adate());
        appointment.setComments(request.comments() == null ? "" : request.comments().trim());
        appointments.save(appointment);
        boolean mailed = mailService.send("Appointment Request by " + appointment.getName(), appointment.getName() + " requested an appointment.\nPhone: " + appointment.getPhone() + "\nDate: " + appointment.getAppointmentDate() + "\nSymptoms: " + appointment.getComments(), appointment.getEmail());
        return ResponseEntity.status(HttpStatus.CREATED).body(Map.of("success", true, "message", "Thank you. We will contact you shortly.", "stored", true, "mailed", mailed));
    }

    @PostMapping({"/api/contact", "/mail.php"})
    public ResponseEntity<?> contact(@Valid @RequestBody ContactRequest request) {
        ContactMessage contact = new ContactMessage();
        contact.setName(request.name().trim());
        contact.setEmail(request.email().trim());
        contact.setComments(request.comments() == null ? "" : request.comments().trim());
        contacts.save(contact);
        boolean mailed = mailService.send("Contact request from " + contact.getName(), contact.getComments(), contact.getEmail());
        return ResponseEntity.status(HttpStatus.CREATED).body(Map.of("success", true, "message", "Your message was submitted successfully.", "stored", true, "mailed", mailed));
    }

    public record AppointmentRequest(@NotBlank String name, @Email String email, @NotBlank @Pattern(regexp = "\\d{10}") String phone, @NotBlank String adate, String comments) { }
    public record ContactRequest(@NotBlank String name, @NotBlank @Email String email, String comments) { }
}
