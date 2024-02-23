package com.restaurante.demo.repositories.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "reserve")
@Data
public class ReservaEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "active", nullable = false)
    private Boolean activo;

    @ManyToOne
    @JoinColumn(name = "id_restaurant")
    @JsonIgnoreProperties("listaResenas")
    private RestauranteEntity restaurante;

    @ManyToOne
    @JoinColumn(name = "id_user")
    @JsonIgnoreProperties("listaReservas")
    private UsuarioEntity usuario;
}
