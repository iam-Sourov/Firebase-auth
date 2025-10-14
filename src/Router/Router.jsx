import { createBrowserRouter } from "react-router";
import Root from '../layout/Root.jsx';
import Home from '../pages/Home.jsx';
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";



export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: 'login',
                Component: Login,
            },
            {
                path: 'register',
                Component: Register,
            },
        ]
    },
]);