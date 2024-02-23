import { Home } from './componentes/home';
import { Register } from './componentes/register';
import { Restaurants } from './componentes/restaurants';
import { Login } from './componentes/login';
import { Routes, Route } from  'react-router-dom'
import { Profile } from './componentes/profile';
import { Privacy } from './componentes/privacy';
import { Preferences } from './componentes/preferences';
import { Contacto } from './componentes/contact';
import { MoreInfo } from './componentes/restInfo';

export const App = () => {

    return(
        <>
            <Routes>
                <Route path="/" element={<Home />}>
                </Route>
                <Route path='/iniciar-sesion' element={<Login />}>
                </Route>
                <Route path='/registrarse' element={<Register />}> 
                </Route>
                <Route path='/perfil' element={<Profile />}> 
                </Route>
                <Route path='/privacidad' element={<Privacy />}> 
                </Route>
                <Route path='/preferencias' element={<Preferences />}> 
                </Route>
                <Route path='/restaurantes' element={<Restaurants />}> 
                </Route>
                <Route path='/contacto' element={<Contacto />}> 
                </Route>
                <Route path='/nombre-info' element={<MoreInfo />}> 
                </Route>
            </Routes>
        </>
    );
}