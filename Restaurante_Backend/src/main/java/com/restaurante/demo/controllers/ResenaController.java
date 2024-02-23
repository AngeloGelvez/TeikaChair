package com.restaurante.demo.controllers;

import com.restaurante.demo.repositories.entities.ResenaEntity;
import com.restaurante.demo.services.ResenaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/comentarios")
public class ResenaController {

    @Autowired
    private ResenaService resenaService;

    @GetMapping("/")
    public List<ResenaEntity> mostrarTodos() {
        return resenaService.buscarTodos();
    }

    @PostMapping("/{idUsu}/{idRes}")
    public String crearResena(@RequestBody ResenaEntity resena, @PathVariable Long idUsu, @PathVariable Long idRes) {
        return resenaService.crear(resena, idUsu, idRes);
    }

    @PutMapping("/{id}")
    public String actualizarResena(@PathVariable Long id, @RequestBody ResenaEntity resena) {
        return resenaService.actualizar(id, resena);
    }
}
