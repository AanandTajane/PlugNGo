package com.plugNGo.repository;

import com.plugNGo.models.ChargingStationEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StationRepo extends JpaRepository<ChargingStationEntity, Long> {
}
