import { Navigate, createBrowserRouter } from 'react-router';

// ** Layouts
import MainLayout from '../layouts/main/index';
import AuthLayout from '../layouts/auth/index';

// ** Pages
import Home from '../pages/home';
import Products from '../pages/products';
import SingleProduct from '../pages/singleProduct';
import NotFound from '../pages/notFound';

import Register from '../pages/register';
import Login from '../pages/login';

const authenticated = false;

export const router = createBrowserRouter([
    {
        path: '/', // ** localhost:port/
        Component: MainLayout,
        children: [
            {
                path: '/', // ** localhost:port/
                Component: Home
            },
            {
                path: 'products', // ** localhost:port/products
                Component: Products
            },
            {
                path: 'products/:id', // ** localhost:port/products/1
                Component: SingleProduct
            }
        ]
    },
    {
        path: 'auth', // ** localhost:port/auth
        element: authenticated ? <Navigate to={'/'} /> : <AuthLayout />, // ** Redirect to home if authenticated
        children: [
            {
                path: '', // ** localhost:port/auth/login
                element: <Navigate to={'/auth/login'} />
            },
            {
                path: 'register', // ** localhost:port/auth/register
                Component: Register
            },
            {
                path: 'login', // ** localhost:port/auth/login
                Component: Login
            }
        ]
    },
    {
        path: '*', // ** localhost:port/*,
        Component: NotFound
    }
]);