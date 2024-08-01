import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { CoinPage, ErrorPage, HomePage, ListCoinsPage } from "./pages";

import "./styles/global.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthorizePage from './pages/AdminPages/AuthorizePage/AuthorizePage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/coins",
        element: <ListCoinsPage />,
    },
    {
        path: "/coins/:coinId",
        element: <CoinPage />,
    },
    {
        path: "/admin",
        element: <AuthorizePage />,
    },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    </React.StrictMode>
);
