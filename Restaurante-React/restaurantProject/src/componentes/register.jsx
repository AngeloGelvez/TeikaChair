import "../styles/register.css";
import { useNavigate } from 'react-router-dom';

export const Register = () => {

    let enrutamiento = useNavigate ();
    const url = "http://localhost:8080/registro";
    const crearCuenta = {
        nombre: "",
        telefono: "",
        correoElectronico: "",
        contra: ""
    }

    async function envioRegistro() {
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(crearCuenta)
            });
    
            let bandera = await response.json();
            console.log(bandera);
    
            if(bandera) {
                enrutamiento("/iniciar-sesion")
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
        <div className = 'Register'>
            <main>
                <div className="form-container">
                    <br/>
                    <h1> Registro de usuarios</h1>
                    <br/>
                    <form id="reg-form" className="form-register">
                        <label htmlFor = "user" className="sr-only">USUARIO</label> 
                        <input type = "text" name = "user" id = "user" placeholder="Nombre de usuario" onChange={(e) => {crearCuenta.nombre = e.target.value}}></input>
                        
                        <label htmlFor = "email" className="sr-only">EMAIL</label> 
                        <input type = "email" name = "email" id = "email" placeholder="Correo electronico" onChange={(e) => {crearCuenta.correoElectronico = e.target.value}}></input>

                        <label htmlFor = "email" className="sr-only">TELEFONO</label> 
                        <input type = "number" name = "number" id = "number" placeholder="Telefono" onChange={(e) => {crearCuenta.telefono = e.target.value}}></input>
                        
                        <label htmlFor = "password" className="sr-only">CONTRASEÑA</label> 
                        <input type = "password" name = "password" id = "password" placeholder="Contraseña" onChange={(e) => {crearCuenta.contra = e.target.value}}></input>
                        <br/> 
                        <button className = "rbt" onClick={(e) => {
                            e.preventDefault();

                            envioRegistro();
                        }}> Registrarse </button>    
                    </form>
                    <br/>
                    <p>¿Ya tienes una cuenta? - <a href="/iniciar-sesion">Iniciar Sesion</a></p>
                </div>
            </main>
        </div>
        </>
      );
}