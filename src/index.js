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
import HomeCarousel from './components/HomeCarousel';
import Login from './views/Login';
import Detail from './views/Detail';
import Movies from './views/Movies';
import Series from './views/Series';
import Documentals from './views/Documentals';
import SearchResults from './views/SearchResults';
import About from './views/About';

import ErrorBoundary from './components/ErrorBoundary';

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
    path: 'series',
    element: <Series />
  },  {
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
