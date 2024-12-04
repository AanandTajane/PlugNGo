package com.plugNGo.dto;

import lombok.*;

@Data
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class CredentialDto {
    private String username;

    private String password;
}
