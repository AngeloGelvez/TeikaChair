package com.restaurante.demo.services;

import com.restaurante.demo.repositories.RestauranteRepository;
import com.restaurante.demo.repositories.entities.RestauranteEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RestauranteService {

    @Autowired
    private RestauranteRepository restauranteRepository;

    public List<RestauranteEntity> buscarTodos() {
         return restauranteRepository.findAll();
    }

    public List<RestauranteEntity> buscarPorNombre(String nombre) {
        return restauranteRepository.buscarPorNombre(nombre);
    }

    public Boolean crearRestaurante(RestauranteEntity restaurante) {
        try {
            restauranteRepository.save(restaurante);
            return true;
        }catch (Exception e) {
            return false;
        }
    }

    public RestauranteEntity buscarPorId(Long id) {
        Optional<RestauranteEntity> restauranteAnt = restauranteRepository.findById(id);

        if(restauranteAnt.isPresent()) {
            return restauranteAnt.get();
        }
        return null;
    }

    public RestauranteEntity actualizarRestaurante(Long id, RestauranteEntity restaurante) {
        RestauranteEntity restauranteAnt = buscarPorId(id);

        if(restauranteAnt != null) {
            restauranteAnt.setNombre(restaurante.getNombre());
            restauranteAnt.setDireccion(restaurante.getDireccion());
            restauranteAnt.setDescripcion(restaurante.getDescripcion());
            restauranteAnt.setMenu(restaurante.getMenu());

            restauranteRepository.save(restauranteAnt);
            return restauranteAnt;
        }else {
            return null;
        }
    }
}
