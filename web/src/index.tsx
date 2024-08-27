import './index.css';

import { createRouter, RouterProvider } from '@tanstack/react-router';
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import the generated route tree
import { routeTree } from './routeTree.gen';

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
    // eslint-disable-next-line unused-imports/no-unused-vars
    interface Register {
        router: typeof router;
    }
}

// eslint-disable-next-line no-undef
ReactDOM.createRoot(document.querySelector('#root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
