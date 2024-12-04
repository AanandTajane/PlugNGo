package com.plugNGo.repository;

import com.plugNGo.dto.BookingDto;
import com.plugNGo.models.BookingEntity;
import com.plugNGo.models.UserCredentialsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookingRepo extends JpaRepository<BookingEntity, Long> {
    List<BookingEntity> findByUserCredentials(UserCredentialsEntity userCredentialsEntity);


}
