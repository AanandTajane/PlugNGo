package com.plugNGo.service;

import com.plugNGo.dto.AccountDto;
import com.plugNGo.models.AccountEntity;
import com.plugNGo.repository.AccountRepo;
import jakarta.annotation.Resource;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class AccountService {

    @Resource
    private AccountRepo accountRepo;
    private final ModelMapper mapper = new ModelMapper();
    public void save(AccountDto accountDto){
        accountRepo.save(mapper.map(accountDto, AccountEntity.class));
    }

}
