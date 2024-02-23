package com.restaurante.demo.repositories.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Table(name = "review")
@Data
public class ResenaEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "description", nullable = false)
    private String descripcion;

    @Column(name = "date", nullable = false)
    private Date fecha;

    @ManyToOne
    @JoinColumn(name = "id_restaurant")
    @JsonIgnoreProperties("listaResenas")
    private RestauranteEntity restaurante;

    @ManyToOne
    @JoinColumn(name = "id_user")
    @JsonIgnoreProperties("listaReservas")
    private UsuarioEntity usuario;
}
