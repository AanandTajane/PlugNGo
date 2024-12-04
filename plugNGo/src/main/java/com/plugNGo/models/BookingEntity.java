package com.plugNGo.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "TBL_BOOKING")
public class BookingEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "TRANSACTION_ID")
    private Long transactionId;

    @Column(name = "DATE_TIME")
    private String dateTime;

    @Column(name="STATION_NAME")
    private String stationName;

    @ManyToOne
    @JoinColumn(name="USER_ID")
    private UserCredentialsEntity userCredentials;

    @Column(name="AMOUNT")
    private Double amount;

    @Column(name="BOOKING_DATE")
    private LocalDate bookingDate;

    @ManyToOne
    @JoinColumn(name="STATION_ID")
    private ChargingStationEntity chargingStationEntity;
}
