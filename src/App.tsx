import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { CoinPage, ErrorPage, HomePage, ListCoinsPage } from './pages';
import AuthorizePage from './pages/AdminPages/AuthorizePage/AuthorizePage';
import ProtectedRoute from './components/ProtectedRoute';
import PanelPage from './pages/AdminPages/PanelPage/PanelPage';

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
