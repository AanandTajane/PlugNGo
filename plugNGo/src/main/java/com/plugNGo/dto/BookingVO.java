package com.plugNGo.dto;

import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BookingVO {
    private Long id;
    private double amount;
    private LocalDateTime bookingDate;
    private String stationName;
    private Long transactionId;
    private int userId;
}
