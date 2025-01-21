import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "./layouts/defaultLayout";
import { Home } from "./pages/app/home/__home";

export const router = createBrowserRouter([ 
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {path: "/", element: <Home />}
        ]
    }
])