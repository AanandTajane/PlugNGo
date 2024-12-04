package com.plugNGo.service;

import com.plugNGo.dto.AccountDto;
import com.plugNGo.dto.CredentialDto;
import com.plugNGo.dto.UserCredentials;
import com.plugNGo.dto.UserDetails;
import com.plugNGo.models.AccountEntity;
import com.plugNGo.models.UserCredentialsEntity;
import com.plugNGo.repository.UserCredentialsRepo;
import jakarta.annotation.Resource;
import lombok.RequiredArgsConstructor;
import org.apache.catalina.User;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.nio.CharBuffer;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserCredentialsService {

    @Resource
    private UserCredentialsRepo userCredentialsRepo;

    private final PasswordEncoder passwordEncoder;
    private final ModelMapper mapper = new ModelMapper();


    public UserCredentials findByUserNameAndPassword(String userName, String password){
        UserCredentialsEntity user = userCredentialsRepo.findByUsernameAndPassword(userName, password);

        UserCredentials userDto = mapper.map(userCredentialsRepo.findByUsernameAndPassword(userName, password),
                UserCredentials.class);
        if(user.getAccountEntity() != null){
            userDto.setAccountDto(mapper.map(user.getAccountEntity(),AccountDto.class));
        }
        return userDto;
    }
    public UserCredentials saveUser(UserCredentials userCredentials){
        UserCredentialsEntity entity = mapper.map(userCredentials, UserCredentialsEntity.class); // dto to entity
        entity.setPassword(passwordEncoder.encode(CharBuffer.wrap(userCredentials.getPassword())));
        if(userCredentials.getAccountDto() != null){
            AccountEntity accountEntity = mapper.map(userCredentials.getAccountDto(), AccountEntity.class);
            entity.setAccountEntity(accountEntity);
        }

        entity = userCredentialsRepo.save(entity);

        return mapper.map(entity, UserCredentials.class);
    }


    public UserCredentials findById(Long id){
        return mapper.map(userCredentialsRepo.findById(id), UserCredentials.class);
    }

    public UserCredentials findByUsername(String username) {
        UserCredentialsEntity entity = userCredentialsRepo.findByUsername(username).orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));
        return mapper.map(entity, UserCredentials.class);
    }
    public UserCredentials login(CredentialDto credentialsDto) {
        UserCredentialsEntity user = userCredentialsRepo.findByUsername(credentialsDto.getUsername())
                .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));

        if (passwordEncoder.matches(credentialsDto.getPassword(), user.getPassword())) {
            return mapper.map(user, UserCredentials.class);
        }
        throw new AppException("Invalid password", HttpStatus.BAD_REQUEST);
    }



}
