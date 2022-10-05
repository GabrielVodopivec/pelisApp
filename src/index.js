import React from 'react';
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
import Notfound from './views/NotFound';
import Detail from './views/Detail';
import About from './views/About';
import Movies from './views/Movies';

const router = createBrowserRouter([{
  path: '/',
  element: <Home />,
  errorElement: <Notfound />,
  children: [{
    path: 'login',
    element: <Login />
  }, {
    path: 'movies',
    element: <Movies />
  }, {
    path: 'detail/:movie_id',
    element: <Detail />,
    errorElement: <Notfound />
  }, {
    path: 'about',
    element: <About />
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
