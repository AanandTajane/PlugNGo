package com.plugNGo.repository;

import com.plugNGo.dto.BookingVO;
import com.plugNGo.models.BookingVOEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookingViewRepo extends JpaRepository<BookingVOEntity, Long> {
    List<BookingVOEntity> findByUserId(Long userId);
}
