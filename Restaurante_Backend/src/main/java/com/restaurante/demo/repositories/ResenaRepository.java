package com.restaurante.demo.repositories;

import com.restaurante.demo.repositories.entities.ResenaEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResenaRepository extends JpaRepository<ResenaEntity, Long> {
}
