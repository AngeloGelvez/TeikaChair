package com.restaurante.demo.repositories;

import com.restaurante.demo.repositories.entities.UsuarioEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends JpaRepository<UsuarioEntity, Long> {

    public UsuarioEntity findByCorreoElectronicoAndContra(String correo, String contra);
}
