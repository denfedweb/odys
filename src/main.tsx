import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from "./routes/root"

import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom"

import './index.css'
import Login from "./routes/login.tsx"
import Bundles from "./routes/bundles.tsx"
import Loader from "./components/Loader.tsx"
import Domains from "./routes/domains.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "bundles",
                element: <Bundles/>,
            },
            {
                path: "domains",
                element: <Domains/>
            }
        ],
    },
    {
        path: "/login",
        element: <Login/>
    }
])

// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Loader />
        <RouterProvider router={router} />
    </React.StrictMode>
)

