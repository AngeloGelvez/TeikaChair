package com.restaurante.demo.controllers;

import com.restaurante.demo.repositories.entities.ReservaEntity;
import com.restaurante.demo.repositories.entities.RestauranteEntity;
import com.restaurante.demo.repositories.entities.UsuarioEntity;
import com.restaurante.demo.services.ReservaService;
import com.restaurante.demo.services.RestauranteService;
import com.restaurante.demo.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/reserva")
public class ReservaController {

    @Autowired
    private ReservaService reservaService;

    @Autowired
    private RestauranteService restauranteService;

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/{idRest}/{idUsu}")
    public Boolean crearReserva(ReservaEntity reserva, @PathVariable Long idRest, @PathVariable Long idUsu) {
        RestauranteEntity restaurante =  restauranteService.buscarPorId(idRest);
        UsuarioEntity usuario =  usuarioService.buscarPorId(idUsu);

        reserva.setRestaurante(restaurante);
        reserva.setUsuario(usuario);

        return reservaService.crearReserva(reserva);
    }

    @PutMapping("/{id}")
    public String cancelarReserva(@PathVariable Long id) {
        return reservaService.desactivarReserva(id);
    }
}
