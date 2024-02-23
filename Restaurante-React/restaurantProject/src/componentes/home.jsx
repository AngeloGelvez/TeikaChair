import { Footer } from "../footer/footer.jsx";
import { Navegation } from "./navigator.jsx";

export const Home = () => {
  return (
    <>
      <Navegation />
      <div className="container m-5 d-flex">
        <div className="container m-3 p-5 tarjeta">
          <h1>¿Quiénes Somos?</h1>
          <hr />
          <h5>
            <i>Descubre una Experiencia Gastronómica Inolvidable.</i>
          </h5>
          <p>
            Te damos la bienvenida, donde la exquisitez se encuentra con la
            comodidad.
            <br /> Sumérgete en una experiencia culinaria única, donde cada
            plato es una obra maestra creada con pasión y cuidado.
          </p>
        </div>
        <div className="tarjeta-img">
          <img
            src="https://images.pexels.com/photos/735869/pexels-photo-735869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="imagen-copa-cubiertos-restaurante"
          />
        </div>
      </div>

      <br />
      <br />
      {/*SERVICIOS*/}
      <div className="container px-4 py-5" id="icon-grid">
        <h2 className="pb-2 border-bottom">Servicios</h2>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-body-secondary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            ></svg>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                Cocina Gourmet
              </h3>
              <br />
              <p>
                Disfruta de una selección diversa de platos elaborados por
                nuestros talentosos chefs, utilizando ingredientes frescos y de
                la más alta calidad.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-body-secondary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            ></svg>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                Ambiente Acogedor
              </h3>
              <br />
              <p>
                Sumérgete en un entorno elegante y acogedor que complementa a la
                perfección la experiencia gastronómica. Ya sea una cena íntima o
                una reunión con amigos, nuestro restaurante es el lugar ideal.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-body-secondary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            ></svg>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                Cócteles Creativos
              </h3>
              <br />
              <p>
                Nuestro experimentado equipo de mixólogos te sorprenderá con una
                variedad de cócteles artesanales que complementarán a la
                perfección tu comida.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              className="bi text-body-secondary flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            ></svg>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">
                Servicio Impecable
              </h3>
              <br />
              <p>
                Nuestro personal atento y profesional está comprometido a hacer
                que tu visita sea excepcional. Nos esforzamos por ofrecer un
                servicio impecable y personalizado.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*CARTAS */}
      <div className="container px-4 py-5" id="restaurant-cards">
        <h2 className="pb-2 border-bottom">Descubre Nuestros Restaurantes</h2>

        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1 rs-elegante">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Restaurante Elegante
                </h3>
                <p>
                  Disfruta de una experiencia gastronómica única en nuestro
                  restaurante elegante. Nuestro menú cuidadosamente seleccionado
                  y ambiente sofisticado te esperan.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1 rs-familiar">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Restaurante Familiar
                </h3>
                <p>
                  Nuestro restaurante familiar es el lugar perfecto para
                  disfrutar de comidas deliciosas en un ambiente acogedor. ¡Haz
                  que tus momentos especiales sean aún más memorables con
                  nosotros!
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
              <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1 rs-terraza">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Terraza Panorámica
                </h3>
                <p>
                  Disfruta de tus comidas al aire libre en nuestra terraza
                  panorámica con vistas impresionantes. La combinación perfecta
                  de buena comida y paisajes cautivadores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
};
