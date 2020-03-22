



import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'



const routes = {
    "/": Login,
    "/:home": Home,
};

const router = async () => {
    const content = document.getElementById("content");

    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    
    content.innerHTML = await render();
 };

export default router;