package com.example.eventpro.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.example.eventpro.model.Register;

public interface RegisterRepo extends JpaRepository<Register,Long>{

}