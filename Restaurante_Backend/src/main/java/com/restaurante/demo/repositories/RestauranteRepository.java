package com.restaurante.demo.repositories;

import com.restaurante.demo.repositories.entities.RestauranteEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RestauranteRepository extends JpaRepository<RestauranteEntity, Long> {

    @Query(value = "SELECT r FROM RestauranteEntity r WHERE r.nombre LIKE %?1%")
    public List<RestauranteEntity> buscarPorNombre(String nombre);
}
