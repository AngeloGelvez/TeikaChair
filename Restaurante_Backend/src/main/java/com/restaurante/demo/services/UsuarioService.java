package com.restaurante.demo.services;

import com.restaurante.demo.repositories.UsuarioRepository;
import com.restaurante.demo.repositories.entities.UsuarioEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    /*
    private List<UsuarioEntity> buscarTodos() {
        return usuarioRepository.findAll();
    }
    */

    public UsuarioEntity buscarPorId(Long id) {
        Optional<UsuarioEntity> usuario = usuarioRepository.findById(id);

        if(usuario.isPresent()) {
            return usuario.get();
        }else {
            return null;
        }
    }

    public UsuarioEntity actualizar(Long id, UsuarioEntity usuarioActualizado) {
        UsuarioEntity usuarioAnt = buscarPorId(id);
        String mensaje = "";

        if(usuarioAnt != null) {
            usuarioAnt.setNombre(usuarioActualizado.getNombre());
            usuarioAnt.setTelefono(usuarioActualizado.getTelefono());
            usuarioAnt.setContra(usuarioActualizado.getContra());

            usuarioRepository.save(usuarioAnt);
            return usuarioAnt;
        }else {
            return null;
        }
    }

    public Boolean crearUsuario(UsuarioEntity usuario) {
        try {
            usuarioRepository.save(usuario);
            return true;
        }catch (Exception e) {
            return false;
        }
    }

    public UsuarioEntity login(String correo, String contra) {
        try {
            return usuarioRepository.findByCorreoElectronicoAndContra(correo, contra);
        }catch (Exception e)  {
            return null;
        }
    }
}
