package com.plugNGo.dto;

import lombok.*;

import java.util.List;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class AccountDto {
    private Long id;
    private String firstName;
    private String lastName;
    private String pincode;
    private String typeOfVehicle;
    private String model;
    private String address;
    private UserCredentials credentials;
}

