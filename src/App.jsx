import { AnimatePresence } from 'framer-motion';
import React, { Suspense } from 'react';
import { useRoutes, useLocation } from 'react-router-dom';

// Views
import Home from './views/Home';
import ErrorBoundary from './components/ErrorBoundary';
import HomeCarousel from './components/HomeCarousel';
import Login from './views/Login';
import FormikLogin from './views/FormikLogin';
import FormikRegister from './views/FormikRegister';
import Movies from './views/Movies';
import Series from './views/Series';
import Documentals from './views/Documentals';
import About from './views/About';
import SearchResults from './views/SearchResults';
import Favorites from './views/Favorites';
import Detail from './views/Detail';

const Notfound = React.lazy(() => {
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(import('./views/NotFound'));
        }, 3000);
    });
    return myPromise
})

export default function App() {
    !localStorage.getItem('favs') && localStorage.setItem('favs', JSON.stringify({}));

    const element = useRoutes([{
        path: '/',
        element: <Home />,
        children: [{
            index: true,
            element: <HomeCarousel />
        }, {
            path: 'login',
            element: <Login />
        }, {
            path: 'formik-login',
            element: <FormikLogin />
        }, {
            path: 'formik-register',
            element: <FormikRegister />
        }, {
            path: 'movies',
            element: <Movies />
        }, {
            path: 'series',
            element: <Series />
        }, {
            path: 'documentals',
            element: <Documentals />
        }, {
            path: 'about',
            element: <About />
        }, {
            path: 'detail/:movie_id',
            element: <Detail />,
            errorElement: <Notfound />,
        }, {
            path: 'results',
            element: <SearchResults />
        }, {
            path: 'favorites',
            element: <Favorites />
        }, {
            path: '*',
            element:
                <ErrorBoundary>
                    <Suspense fallback={<h1 className='text-center' style={{color: 'wheat'}}>Loading...</h1>}>
                        <Notfound />
                    </Suspense>
                </ErrorBoundary>
        }]
    }])

    const location = useLocation();

    if (!element) return null;


    return (
        <AnimatePresence mode='wait'>
            {React.cloneElement(element, { key: location.pathname })}
        </AnimatePresence>
    )
}