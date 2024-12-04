package com.plugNGo.repository;

import com.plugNGo.models.UserCredentialsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserCredentialsRepo extends JpaRepository<UserCredentialsEntity, Long> {
    UserCredentialsEntity findByUsernameAndPassword(String username, String password);

//    UserCredentialsEntity findByUsername(String username);

    Optional<UserCredentialsEntity> findByUsername(String username);


}
