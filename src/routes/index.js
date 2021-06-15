// Templates
import Header from '../templates/Header';

// Pages
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';

// Utils
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
    '/': Home,
    '/:id': Character,
    '/contact': 'Contact',
};

const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    console.log({ hash });
    console.log({ route });
    console.log({ render });

    content.innerHTML = await render();
};

export default router;
