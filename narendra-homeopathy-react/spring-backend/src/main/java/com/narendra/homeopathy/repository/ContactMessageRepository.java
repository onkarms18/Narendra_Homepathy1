package com.narendra.homeopathy.repository;

import com.narendra.homeopathy.model.ContactMessage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactMessageRepository extends JpaRepository<ContactMessage, Long> {
}
