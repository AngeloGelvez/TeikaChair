import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/login.css'

export const Login = () => {

    let enrutamiento = useNavigate ();
    let [ bandera, setBandera ] = useState(false);
    const [ inputCorreo, setInputCorreo ] = useState("");
    const [ inputContra, setInputContra ] = useState("");
    const url = "http://localhost:8080/login";

    const datosSesion = {
        correo: inputCorreo,
        contra: inputContra
    }

    async function envioSesion() {
        console.log(datosSesion);
        try {
            const respuesta = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datosSesion)
            });

            const datos = await respuesta.json();

            console.log(datos);
            
            if(respuesta.ok) {
                //SE GUARDA EL OBJETO EN EL LOCAL STORAGE
                localStorage.setItem('usuario', JSON.stringify(datos));
                enrutamiento("/");
            }else {
                setBandera(true);
            }

        } catch (error) {
            console.log(error);
            setBandera(true);
        }
    }

    const handleInputChange = (e) => {
        setBandera(false); // Restablecer la bandera cuando el usuario comienza a corregir la información
        //datosSesion[e.target.id] = e.target.value;
        if(e.target.id == "correo") {
            setInputCorreo(e.target.value);
        }else {
            setInputContra(e.target.value);
        }
    }

    return(
        <>
            <section className="contenido">
                <div className="container">
                    <div className="inicio">
                        <h2>Inicio De Sesión</h2>
                        <form action="" className="formulario">
                            <label htmlFor="correo" className="form-label">Correo Electrónico:</label>
                            <input type="email" id="correo" className="form-control" onChange={handleInputChange} value={inputCorreo}/>
                            
                            <br />

                            <label htmlFor="contra" className="form-label">Contraseña:</label>
                            <input type="password" id="contra" className="form-control" onChange={handleInputChange} value={inputContra}/>

                            { (bandera)? <small>Error, el Correo o la Contraseña son incorrectos.</small>: <small></small> }

                            <button className="boton-enviar" onClick={(e) => {
                                e.preventDefault();
                                //console.log(datosSesion); 
                                envioSesion();

                                }}>Iniciar Sesión</button>

                            <br />
                            <br />

                            <p>¿No tienes cuenta? - <a href = "/registrarse"> registrate ahora!!</a></p>
                        </form>
                    </div>
                </div>
                <div className="contenido-img">
                    <img src="https://images.pexels.com/photos/2122294/pexels-photo-2122294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="comida-restaurante"/>
                </div>
            </section>
        </>
    );
}