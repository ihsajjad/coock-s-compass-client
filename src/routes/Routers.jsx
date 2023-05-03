import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import Blog from "../pages/blog/Blog";
import Recipes from "../pages/home/chef/recipes/Recipes";
import Login from "../user/login/Login";
import Register from "../user/register/Register";
import PrivetRoute from "./privetRoute/PrivetRoute";
import NotFound from "../shared/page_404/NotFound";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: ()=> fetch('https://cook-s-compass-server-ihsajjad.vercel.app/chefs')
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/chefs/:id',
                element: <PrivetRoute><Recipes /></PrivetRoute>,
                loader: ({params})=> fetch(`https://cook-s-compass-server-ihsajjad.vercel.app/chefs/${params.id}`)
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    }
])

export default router;