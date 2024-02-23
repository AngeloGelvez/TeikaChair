package com.restaurante.demo.services;

import com.restaurante.demo.repositories.ReservaRepository;
import com.restaurante.demo.repositories.entities.ReservaEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ReservaService {

    @Autowired
    private ReservaRepository reservaRepository;

    public Boolean crearReserva(ReservaEntity reserva) {
        try {
            reserva.setActivo(true);

            reservaRepository.save(reserva);
            return true;
        }catch (Exception e) {
            return false;
        }
    }

    public ReservaEntity buscarPorId(Long id) {
        Optional<ReservaEntity> reserva = reservaRepository.findById(id);

        if(reserva.isPresent()) {
            return reserva.get();
        }

        return null;
    }

    public String desactivarReserva(Long id) {
        ReservaEntity reservaAnt = buscarPorId(id);
        String mensaje = "";

        if(reservaAnt != null) {
            reservaAnt.setActivo(false);

            reservaRepository.save(reservaAnt);

            mensaje = "Se ha inhabilido la reserva.";
        }else {
            mensaje = "La reserva no pudo ser inhabilitada.";
        }

        return mensaje;
    }
}
