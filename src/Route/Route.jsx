import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../pages/home/Home';
import Favourite from '../pages/Favourite/Favourite';
import Login from '../pages/Login/Login';

const myCreatedRoute = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/favourites",
                element:<Favourite></Favourite>
            },
            {
                path:"/login",
                element:<Login></Login>
            }
        ]
    }
]);

export default myCreatedRoute;