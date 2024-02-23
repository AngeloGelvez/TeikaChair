package com.restaurante.demo.repositories.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Table(name = "users")
@Data
public class UsuarioEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, name = "name")
    private String nombre;

    @Column(nullable = false, name = "phone_number", length = 10)
    private String telefono;

    @Column(nullable = false, unique = true, name = "email")
    private String correoElectronico;

    @Column(nullable = false, name = "password")
    private String contra;

    @OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL)
    private List<ReservaEntity> listaReservas;
}
