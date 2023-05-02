import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import Blog from "../pages/blog/Blog";
import Recipes from "../pages/home/chef/recipes/Recipes";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
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
                element: <Recipes />,
                loader: ({params})=> fetch(`https://cook-s-compass-server-ihsajjad.vercel.app/chefs/${params.id}`)
            }
        ]
    }
])

export default router;