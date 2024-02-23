import "../styles/contact.css";
import { Navegation } from "../componentes/navigator"
import { Footer } from "../footer/footer";

export const Contacto = () => {
    return (
    <div>
        <Navegation/>
        <div className="contact-container">
            
            <div className="contact-image-container">
                {/* Imagen de fondo y el cuadro "Contactenos" */}
                <h1>CONTACTENOS<br/>
                <h5>Sugerencias, dudas incluso quejas,<br/> <strong>¡¡contactanos ahora mismo!!</strong></h5></h1>
                
            </div>
            <div className="contact-info-container">
                {/* Contenido de información de contacto */}
                <h1>Hector Diaz</h1>
                <br/>
                <br/>
                <p>Estudiante de Tecnologia en desarrollo de sistemas informaticos en las UTS.
                </p>
                <p>Correo: hidiaz@uts.edu.co</p>
                <p></p>

                <br/>
                <br/>
                <hr className="division"/>
                <br/>
                <br></br>

                <h1>Pavel Gelvez</h1>
                <br/>
                <br/>
                <p>Estudiante de Tecnologia en desarrollo de sistemas informaticos en las UTS.
                </p>
                <p>Correo: pagelvez@uts.edu.co</p>
            </div>
        </div>
        <Footer/>
    </div>
    );

}