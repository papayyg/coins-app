import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import ProtectedRoute from './components/ProtectedRoute';

import { CoinPage, ErrorPage, HomePage, ListCoinsPage } from './pages';
import AuthorizePage from './pages/AdminPages/AuthorizePage';
import PanelPage from './pages/AdminPages/PanelPage';
import EditPage from './pages/AdminPages/AddOrEditPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/coins',
        element: <ListCoinsPage />,
    },
    {
        path: '/coins/:coinId',
        element: <CoinPage />,
    },
    {
        path: '/admin',
        element: <AuthorizePage />,
    },
    {
        path: '/admin/coins',
        element: <ProtectedRoute element={<PanelPage />} />,
    },{
        path: '/admin/coins/edit',
        element: <ProtectedRoute element={<EditPage />} />,
    },
]);

const queryClient = new QueryClient();

const App: React.FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    );
};

export default App;
