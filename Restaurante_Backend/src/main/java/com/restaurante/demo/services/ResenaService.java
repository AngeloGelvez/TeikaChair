package com.restaurante.demo.services;

import com.restaurante.demo.repositories.ResenaRepository;
import com.restaurante.demo.repositories.entities.ResenaEntity;
import com.restaurante.demo.repositories.entities.RestauranteEntity;
import com.restaurante.demo.repositories.entities.UsuarioEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ResenaService {

    @Autowired
    private ResenaRepository resenaRepository;

    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private RestauranteService restauranteService;

    public List<ResenaEntity> buscarTodos() {
        return resenaRepository.findAll();
    }

    public String crear(ResenaEntity resena, Long id, Long idRest) {
        UsuarioEntity usuario = usuarioService.buscarPorId(id);
        RestauranteEntity restaurante = restauranteService.buscarPorId(idRest);

        String mensaje = "";

        try {
            if(usuario == null && restaurante == null) {
                throw new Exception("error");
            }

            resena.setUsuario(usuario);
            resena.setRestaurante(restaurante);
            resena.setFecha(new Date());
            resenaRepository.save(resena);

            mensaje = "Reseña creada con exito.";
        } catch (Exception e) {
            mensaje = "Error, la reseña no pudo ser creada.";
        }

        return mensaje;
    }

    public ResenaEntity buscarPorId(Long id) {
        Optional<ResenaEntity> resena = resenaRepository.findById(id);

        if(resena.isPresent()) {
            return resena.get();
        }

        return null;
    }

    public String actualizar(Long id, ResenaEntity resena) {
        ResenaEntity res = buscarPorId(id);
        String mensaje = "";

        if(res != null) {
            res.setDescripcion(resena.getDescripcion());
            res.setFecha(new Date());

            resenaRepository.save(res);

            mensaje = "La reseña se ha modificado con exito.";
        }else {
            mensaje = "Error, no se pudo modificar la reseña.";
        }

        return mensaje;
    }
}
