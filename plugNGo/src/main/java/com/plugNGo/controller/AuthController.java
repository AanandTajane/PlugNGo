package com.plugNGo.controller;

import com.plugNGo.config.UserAuthenticationProvider;
import com.plugNGo.dto.CredentialDto;
import com.plugNGo.dto.UserCredentials;
import com.plugNGo.service.UserCredentialsService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class AuthController {

    private final UserCredentialsService userService;
    private final UserAuthenticationProvider userAuthenticationProvider;

    @PostMapping("/login")
    public ResponseEntity<UserCredentials> login(@RequestBody @Valid CredentialDto credentialsDto) {
        UserCredentials userDto = userService.login(credentialsDto);
        userDto.setToken(userAuthenticationProvider.createToken(userDto.getUsername()));
        return ResponseEntity.ok(userDto);
    }

//    @PostMapping("/register")
//    public ResponseEntity<UserCredentials> register(@RequestBody @Valid UserDetails user) {
//        UserDto createdUser = userService.register(user);
//        createdUser.setToken(userAuthenticationProvider.createToken(user.getLogin()));
//        return ResponseEntity.created(URI.create("/users/" + createdUser.getId())).body(createdUser);
//    }

}
