import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
// Styles

import './index.css';
import './styles/styles.css'

// Routing animation
import { AnimatePresence, motion } from 'framer-motion';

// Views
import Home from './views/Home';
import HomeCarousel from './components/HomeCarousel';
import Login from './views/Login';
import Detail from './views/Detail';
import Movies from './views/Movies';
import Series from './views/Series';
import Documentals from './views/Documentals';
import SearchResults from './views/SearchResults';
import Favorites from './views/Favorites';
import About from './views/About';

import ErrorBoundary from './components/ErrorBoundary';
import FormikLogin from './views/FormikLogin';
import FormikRegister from './views/FormikRegister';

// Testing React.lazy load and Suspense Component;
const Notfound = React.lazy(() => {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(import('./views/NotFound'));
    }, 3000);
  });
  return myPromise
})

const pageTransition = {
  in: { opacity: 1 },
  out: { opacity: 0 }
}

const router = createBrowserRouter([{
  path: '/',
  loader: () => 'useRouteLoaderData',
  id: 'home',
  element: <Home />,
  errorElement:
    <ErrorBoundary>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Notfound />
      </Suspense>
    </ErrorBoundary>,
  children: [{
    index: true,
    element:
    <motion.div
      className='page'
      initial='out'
      animate='in'
      exit='out'
      transition={{ duration: 1 }}
      variants={pageTransition}>
      <HomeCarousel />
    </motion.div>,
  }, {
    path: 'login',
    element:
      <Login />
  }, {
    path: 'formik-login',
    element: <FormikLogin />
  }, {
    path: 'formik-register',
    element: <FormikRegister />
  }, {
    path: 'movies',
    element:
      <motion.div
        className='page'
        initial='out'
        animate='in'
        exit='out'
        transition={{ duration: 1 }}
        variants={pageTransition}>
        <Movies />
      </motion.div>,
    errorElement:
      <ErrorBoundary>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Notfound />
        </Suspense>
      </ErrorBoundary>,
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
    element:
      <motion.div
        initial='out'
        animate='in'
        exit='out'
        transition={{ duration: 1 }}
        variants={pageTransition}>
        <SearchResults />
      </motion.div>
  }, {
    path: 'favorites',
    element:
      <motion.div
        className='page'
        initial='out'
        animate='in'
        exit='out'
        transition={{ duration: 1 }}
        variants={pageTransition}>
        <Favorites />
      </motion.div>
  }]
}])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AnimatePresence>
        <RouterProvider router={router} />
      </AnimatePresence>
    </Provider>
  </React.StrictMode>
)
