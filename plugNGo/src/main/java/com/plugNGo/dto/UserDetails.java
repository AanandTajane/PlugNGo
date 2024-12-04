package com.plugNGo.dto;

import lombok.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class UserDetails {
    private Long id;

    private String username;
    private String password;
    private String role;
    // public void getRole(){
    //    return Role;
 //}
    // public void
    private String firstName;
    private String lastName;
    private String address;
    private String pincode;
    private String typeOfVehicle;
    private String model;
}
