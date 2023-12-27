import MainLayout from "admin/layout/MainLayout";
import Home from "admin/pages/Home";
import { useRoutes } from "react-router-dom";

export default function ThemeRoutes(){
    return useRoutes([
        {
            path: '/',
            element: <MainLayout />,
            children: [
                {
                    path: '/',
                    element: <Home />
                }
            ]
        }
    ])
}