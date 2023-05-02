import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import Blog from "../pages/blog/Blog";



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
            }
        ]
    }
])

export default router;