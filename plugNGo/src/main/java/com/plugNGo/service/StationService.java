package com.plugNGo.service;

import com.plugNGo.dto.ChargingStationDTO;
import com.plugNGo.models.ChargingStationEntity;
import com.plugNGo.repository.StationRepo;
import jakarta.annotation.Resource;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class StationService {

    @Autowired
    private StationRepo stationRepo;

    private final ModelMapper mapper = new ModelMapper();
    public List<ChargingStationDTO> findAll(){
        return stationRepo.findAll().stream()
                .map(chargingStationEntity -> mapper.map(chargingStationEntity, ChargingStationDTO.class))
                .collect(Collectors.toList());
    }

    public void saveAll(List<ChargingStationDTO> dtos){
         stationRepo.saveAll(dtos.stream()
                 .map(dto -> mapper.map(dto, ChargingStationEntity.class)).collect(Collectors.toList()));
    }

    public ChargingStationDTO findById(Long id){
        return mapper.map(stationRepo.findById(id),ChargingStationDTO.class);
    }

    public void save(ChargingStationDTO chargingStationDTO) {
        stationRepo.save(mapper.map(chargingStationDTO, ChargingStationEntity.class));
    }
}
