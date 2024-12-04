package com.plugNGo.controller;

import com.plugNGo.dto.ChargingStationDTO;
import com.plugNGo.models.ChargingStationEntity;
import com.plugNGo.service.StationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/stations")
@CrossOrigin(origins ="*")
public class StationController {

    @Autowired
    private StationService stationService;

    @GetMapping("/findAll")
    @CrossOrigin
    public ResponseEntity<List<ChargingStationDTO>> findAll(){
        return new ResponseEntity<>(stationService.findAll(), HttpStatus.OK);
    }

    @PostMapping("/saveAll")
    public ResponseEntity<List<ChargingStationDTO>> saveAll(@RequestBody List<ChargingStationDTO> stationDTOs){
        stationService.saveAll(stationDTOs);
        return new ResponseEntity<>( HttpStatus.OK);
    }

    @PostMapping("/save")
    public ResponseEntity<ChargingStationDTO> save(@RequestBody ChargingStationDTO chargingStationDTO){
         stationService.save(chargingStationDTO);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
