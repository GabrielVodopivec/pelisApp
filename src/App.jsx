import React, { Suspense } from 'react';
import { useRoutes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import ProtectedRoute from './components/ProtectedRoute';
import ErrorBoundary from './components/ErrorBoundary';
import HomeCarousel from './components/HomeCarousel';

// Views
import Home from './views/Home';
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

// Test React.lazy() and ErrorBoundary;
const Notfound = React.lazy(() => {
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(import('./views/NotFound'));
            // reject('Something went wrong');
        }, 2000);
    });
    return myPromise
})

export default function App() {
    !localStorage.getItem('favs') && localStorage.setItem('favs', JSON.stringify({}));

    // The return value of useRoutes is either a valid React element you can use to render the route tree, or null if nothing matched.
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
            element:
                <ProtectedRoute>
                    <Movies />
                </ProtectedRoute>
        }, {
            path: 'series',
            element:
                <ProtectedRoute>
                    <Series />
                </ProtectedRoute>
        }, {
            path: 'documentals',
            element:
                <ProtectedRoute>
                    <Documentals />
                </ProtectedRoute>
        }, {
            path: 'about',
            element: <About />
        }, {
            path: 'detail/:movie_id',
            element:
                <ProtectedRoute>
                    <Detail />
                </ProtectedRoute>,
            errorElement: <Notfound />,
        }, {
            path: 'results',
            element:
                <ProtectedRoute>
                    <SearchResults />
                </ProtectedRoute>
        }, {
            path: 'favorites',
            element:
                <ProtectedRoute>
                    <Favorites />
                </ProtectedRoute>
        }]
    }])

    const location = useLocation();
    
    if (!element) return (
        <Suspense fallback={<h1 className='text-center' style={{ color: 'wheat' }}>Loading...</h1>}>
            <Notfound />
        </Suspense>
    );
    
    // console.log('re-render');
    
    return (
        <ErrorBoundary>
            <AnimatePresence mode='wait'>
                {React.cloneElement(element, { key: location.pathname })}
            </AnimatePresence>
        </ErrorBoundary>
    )
}