import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
// Styles

import './index.css';
import './styles/styles.css'

// Views
import Home from './views/Home';
import Login from './views/Login';
import Detail from './views/Detail';
import About from './views/About';
import Movies from './views/Movies';

import ErrorBoundary from './components/ErrorBoundary';
import HomeCarousel from './components/HomeCarousel';

// Testing React.lazy load and Suspense Component;
const Notfound = React.lazy(() => {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(import('./views/NotFound'));
    }, 3000);
  });
  return myPromise
})

const router = createBrowserRouter([{
  path: '/',
  element: <Home />,
  errorElement:
    <ErrorBoundary>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Notfound />
      </Suspense>
    </ErrorBoundary>,
  children: [{
    index:true,
    element: <HomeCarousel />
  },{
    path: 'login',
    element: <Login />
  }, {
    path: 'movies',
    element: <Movies />,
    errorElement:
    <ErrorBoundary>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Notfound />
      </Suspense>
    </ErrorBoundary>,
  }, {
    path: 'about',
    element: <About />
  }, {
    path: 'detail/:movie_id',
    element: <Detail />,
    errorElement: <Notfound />,
  
  }]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
