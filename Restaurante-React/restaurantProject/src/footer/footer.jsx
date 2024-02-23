import '../styles/footer.css';
//import fb from'../assets/facebook.png';
//import tw from'../assets/twitter.png';
//import insta from'../assets/instagram.png';


export const Footer = () => {
    return(
        <div className="footer">
            <div className="tk__footer section__padding">
                <div className="tk__footer-links">

                    <div className="tk__footer-links-div">
                        <h4>Titulo</h4>
                        <a href="/example"><p>ejemplo</p></a>
                        <a href="/example"><p>ejemplo</p></a>
                        <a href="/example"><p>ejemplo</p></a>
                    </div>

                    <div className="tk__footer-links_div">
                        <h4>Recursos</h4>
                        <a href="/example"><p>ejemplo</p></a>
                        <a href="/example"><p>ejemplo</p></a>
                        <a href="/example"><p>ejemplo</p></a>
                    </div>

                    <div className="tk__fotter-links_div">
                        <h4>Partners</h4>
                        <a href="/example"><p>ejemplo</p></a>
                    </div>

                    <div className="tk__fotter-links_div">
                        <h4>Company</h4>
                        <a href="/example"><p>ejemplo</p></a>
                        <a href="/example"><p>ejemplo</p></a>
                        <a href="/example"><p>ejemplo</p></a>
                    </div>

                    <div className="tk__fotter-links_div">
                        {/*<h4>Proximamente</h4>
                        <div className="socialmedia">
                            <p><img src={fb} alt=""/></p>
                            <p><img src={tw} alt=""/></p>
                            <p><img src={insta} alt=""/></p>
                        </div>*/}
                    </div>
                </div>

        <hr></hr>
        <div className="tk__footer-below">
            <div className="tk__footer-copyright">
                <p>
                    @{new Date().getFullYear()} TeikaChair. Todos los derechos reservados :v
                </p>
            </div>
            <div className="tk__footer-below-links">
                <a href="/terms"><div><p>Terminos y Condiciones</p></div></a>
                <a href="/priv"><div><p>Privacidad</p></div></a>
                <a href="/secu"><div><p>Seguridad</p></div></a>
            </div>
        </div>

            </div>
        </div>
    );
}