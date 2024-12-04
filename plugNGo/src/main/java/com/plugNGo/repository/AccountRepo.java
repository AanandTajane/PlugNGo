package com.plugNGo.repository;

import com.plugNGo.models.AccountEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestParam;

@Repository
public interface AccountRepo extends JpaRepository<AccountEntity, Long> {

}
