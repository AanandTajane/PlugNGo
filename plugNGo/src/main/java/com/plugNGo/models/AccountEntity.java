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
@Table(name = "TBL_ACCOUNT_ENTITY")
public class AccountEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "FIRST_NAME")
    private String firstName;

    @Column(name="LAST_NAME")
    private String lastName;

    @Column(name="ADDRESS")
    private String address;

    @Column(name="PINCODE")
    private String pincode;

    @Column(name="TYPE_OF_VEHICLE")
    private String typeOfVehicle;

    @Column(name="MODEL_NAME")
    private String model;


}
