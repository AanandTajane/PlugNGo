package com.plugNGo.controller;

import com.plugNGo.dto.AccountDto;
import com.plugNGo.dto.UserCredentials;
import com.plugNGo.dto.UserDetails;
import com.plugNGo.service.AccountService;
import com.plugNGo.service.UserCredentialsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;

@RestController
@CrossOrigin(origins ="*")
public class UserController {

    @Autowired
    private UserCredentialsService userCredentialsService;

    @Autowired
    AccountService accountService;

    @CrossOrigin
    @PostMapping("/register")
    public ResponseEntity<UserCredentials> saveUser(@RequestBody UserDetails userDetails){
        System.out.println(userDetails);
        UserCredentials userCredentials;
        UserCredentials user= null;          // converting userdetailsentity to accountdto
        if(userDetails.getRole().equals("user")){
            AccountDto account = AccountDto.builder() // account dto = new account dto
                    .firstName(userDetails.getFirstName())
                    .lastName(userDetails.getLastName())
                    .address(userDetails.getAddress())
                    .model(userDetails.getModel())
                    .typeOfVehicle(userDetails.getTypeOfVehicle())
                    .pincode(userDetails.getPincode())
                    .build();
            userCredentials = UserCredentials.builder()
                    .username(userDetails.getUsername())
                    .role(userDetails.getRole())
                    .password(userDetails.getPassword())
                    .accountDto(account)
                    .build();
            user = userCredentialsService.saveUser(userCredentials);
            account.setCredentials(user);
            accountService.save(account);
        }else{
            userCredentials = UserCredentials.builder()
                    .username(userDetails.getUsername())
                    .role(userDetails.getRole())
                    .password(userDetails.getPassword())
                    .build();
            userCredentialsService.saveUser(userCredentials);
        }
        return user == null ? new ResponseEntity<>(HttpStatus.NOT_FOUND) :
                new ResponseEntity<UserCredentials>(HttpStatus.OK);

    }

    @CrossOrigin
    @GetMapping("/getUserByEmailAndPassword")
    public  ResponseEntity<UserCredentials> getUserByEmailAndPassword(@RequestParam String username, @RequestParam String password ){

        UserCredentials user = userCredentialsService.findByUserNameAndPassword(username, password);

        if (user == null){
            return new ResponseEntity<UserCredentials>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<UserCredentials>(user,HttpStatus.OK);
    }

    @GetMapping("/test")
    public String getTest(){
        return "Test";
    }
}
