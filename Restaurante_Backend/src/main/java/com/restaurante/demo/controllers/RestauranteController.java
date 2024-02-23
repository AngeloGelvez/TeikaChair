package com.restaurante.demo.controllers;

import com.restaurante.demo.repositories.entities.RestauranteEntity;
import com.restaurante.demo.services.RestauranteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/restaurante")
public class RestauranteController {

    @Autowired
    private RestauranteService restauranteService;

    @GetMapping("/")
    public List<RestauranteEntity> mostrarTodos() {
        return restauranteService.buscarTodos();
    }

    @GetMapping("/buscar")
    public List<RestauranteEntity> buscarPorNombre(@RequestParam String nombre) {
        return restauranteService.buscarPorNombre(nombre);
    }

    @GetMapping("/{id}")
    public RestauranteEntity buscarPorNombre(@PathVariable Long id) {
        return restauranteService.buscarPorId(id);
    }

    @PostMapping("/")
    public Boolean registrarRestaurante(@RequestBody RestauranteEntity restaurante) {
        return restauranteService.crearRestaurante(restaurante);
    }

    @PutMapping("/{id}")
    public RestauranteEntity actualizarRestaurante(@PathVariable Long id, @RequestBody RestauranteEntity restaurante) {
        return restauranteService.actualizarRestaurante(id, restaurante);
    }
}
