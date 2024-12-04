package com.plugNGo.controller;

import com.plugNGo.dto.*;
import com.plugNGo.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/booking")
@CrossOrigin(origins ="*")
public class BookingController {
    @Autowired
    private BookingService bookingService;
    @GetMapping("/findAll")
    @CrossOrigin
    public ResponseEntity<List<BookingDto>> findAll(){
        return new ResponseEntity<>(bookingService.findAll(), HttpStatus.OK);
    }

    @PostMapping("/save")
    public ResponseEntity<BookingDto> save(@RequestBody BookingDetails bookingDetails){
        bookingService.saveBooking(bookingDetails);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/findByUser")
    @CrossOrigin
    public ResponseEntity<List<BookingVO>> findByUser(@RequestParam Long id){
        return new ResponseEntity<List<BookingVO>>(bookingService.findByUser(id), HttpStatus.OK);
    }
}