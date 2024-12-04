package com.plugNGo.dto;

import lombok.*;

import java.util.List;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class UserCredentials {
    private Long id;
    private String username;
    private String password;
    private String role;
    private AccountDto accountDto;

    private String token;

}
