package com.plugNGo.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "TBL_CHARGING_STATION")
public class ChargingStationEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="ID")
    private Long id;

    @Column(name = "STATION_NAME")
    private String stationName;

    @Column(name = "LOCATION")
    private String location;

    @Column(name = "PINCODE")
    private String pincode;

    @Column(name = "TALUKA")
    private String taluka;
    @Column(name = "DISTRICT")
    private String district;
    @Column(name = "LONGITUDE")
    private String longitude;
    @Column(name = "LATITUDE")
    private String latitude;
    @Column(name = "SLOTS_AVAILABLE")
    private Integer slotsAvailable;
    @Column(name = "CHARGING_RATE")
    private Double chargingRate;

    @OneToMany(mappedBy = "chargingStationEntity", cascade=CascadeType.ALL, fetch = FetchType.EAGER)
    private List<BookingEntity> bookingEntities;
}
