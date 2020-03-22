import Home from '../pages/home'
import Catalogo from '../pages/catalogo' 
import Error404 from '../pages/error404'

import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'

const routes = {
    "/": Home,
    "/error404": Error404,
    "/catalogo": Catalogo
};

const router = async () => {
    const content = document.getElementById("Hola");

    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    
    content.innerHTML = await render();
 };

export default router;