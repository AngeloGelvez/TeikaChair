package com.restaurante.demo.repositories.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Table(name = "restaurant")
@Data
public class RestauranteEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false)
    private String nombre;

    @Column(name = "address", nullable = false)
    private String direccion;

    @Column(name = "description", nullable = false, length = 400)
    private String descripcion;

    @Column(name = "menu", nullable = false)
    private String menu;

    @OneToMany(mappedBy = "restaurante", cascade = CascadeType.ALL)
    private List<ReservaEntity> listaResenas;
}
