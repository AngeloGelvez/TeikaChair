package com.restaurante.demo.controllers;

import com.restaurante.demo.repositories.entities.InicioSesion;
import com.restaurante.demo.repositories.entities.UsuarioEntity;
import com.restaurante.demo.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/registro")
    public Boolean crearUsuario(@RequestBody UsuarioEntity usuario) {
        return usuarioService.crearUsuario(usuario);
    }

    @GetMapping("/usuario/{id}")
    public UsuarioEntity buscarUsuario(@PathVariable Long id) {
        return usuarioService.buscarPorId(id);
    }

    @PutMapping("/usuario/{id}")
    public UsuarioEntity actualizar(@PathVariable Long id, @RequestBody UsuarioEntity usuarioActualizado) {
        return usuarioService.actualizar(id, usuarioActualizado);
    }

    @PostMapping("/login")
    public UsuarioEntity inicioSesion(@RequestBody InicioSesion inicio) {
        return usuarioService.login(inicio.getCorreo(), inicio.getContra());
    }
}
