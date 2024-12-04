package com.plugNGo.dto;

import lombok.*;

import java.util.List;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ChargingStationDTO {
    private String id;
    private String latitude;
    private String longitude;
    private String district;
    private String taluka;
    private String pincode;
    private String location;
    private String stationName;
    private Integer slotsAvailable;
    private Double chargingRate;
    private List<BookingDto> bookingDtos;
}
