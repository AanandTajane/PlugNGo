package com.plugNGo.dto;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;


@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class BookingDto {
    private String dateTime;
    private Long transactionId;
    private UserCredentials userCredentials;
    private ChargingStationDTO chargingStationDTO;
    private String userName;
    private Double amount;
    private LocalDate bookingDate;
}
