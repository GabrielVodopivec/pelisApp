import React, { Suspense, useState, useEffect } from 'react';
import { useRoutes, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

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
import { useSelector } from 'react-redux';
import { tokenSelector } from './app/selectors';

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

// Centralized route protection;
const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const [auth, setAuth] = useState(null);
    const token = useSelector(tokenSelector)

    useEffect(() => {
        if (!token) {
            return navigate('/login')
        }
        setAuth(true)
    }, [token, auth, navigate]);

    return (auth ? children : null)
}

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
            element: <SearchResults />
        }, {
            path: 'favorites',
            element: <Favorites />
        }, {
            path: '*',
            element:
                <Suspense fallback={<h1 className='text-center' style={{ color: 'wheat' }}>Loading...</h1>}>
                    <Notfound />
                </Suspense>
        }]
    }])

    const location = useLocation();
    // console.log('re-render');
    if (!element) return null;

    return (
        <ErrorBoundary>
            <AnimatePresence mode='wait'>
                {React.cloneElement(element, { key: location.pathname })}
            </AnimatePresence>
        </ErrorBoundary>
    )
}