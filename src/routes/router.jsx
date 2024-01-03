import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Create from "../Components/CRUD/Create"
import Read from "../Components/CRUD/Read"
import NotFound from './../Components/NotFound/NotFound';


const routes = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Create/>,
            },
            {
                path:"/read",
                element:<Read/>,
            },
        ]
    },

    {
        path:'*',
        element:<NotFound/>
    }
])

export default routes