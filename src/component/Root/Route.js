import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "../Shared/ErrorPage";
import AddTask from "../Pages/AddTask";
import AllTask from "../Pages/AllTask";
import SingleTask from "../Pages/SingleTask";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {

                path: '/',
                element: <AddTask></AddTask>

            },

            {
                path: '/allTask',
                element: <AllTask></AllTask>,
                loader: () => fetch(`http://localhost:5000/AddedFormData`)
            },
            {
                path: '/SingleTask/:id',
                element: <SingleTask></SingleTask>,
                loader: ({ params }) => fetch(`http://localhost:5000/AddedFormData/${params.id}`)
            }


        ]
    }
])