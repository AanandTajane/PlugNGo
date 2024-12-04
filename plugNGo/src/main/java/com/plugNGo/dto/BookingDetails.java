package com.plugNGo.dto;

import lombok.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class BookingDetails {
    Long userId;
    String username;
    Long stationId;
    String transactionId;
    String dateTime;
    UserCredentials userCredentials;
}
