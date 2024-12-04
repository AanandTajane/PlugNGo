package com.plugNGo.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "BOOKING_VIEW")
public class BookingVOEntity {

    @Id
    @Column(name="ID")
    private Long id;

    @Column(name="AMOUNT")
    private double amount;

    @Column(name="BOOKING_DATE")
    private LocalDateTime bookingDate;

    @Column(name="STATION_NAME")
    private String stationName;

    @Column(name="TRANSACTION_ID")
    private Long transactionId;

    @Column(name="USER_ID")
    private Long userId;
}
