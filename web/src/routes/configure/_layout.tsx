import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/configure/_layout')({
    component: () => (
        <div className="p-2 w-full h-full">
            <h1 className="h2">Configuration</h1>
            <Outlet />
        </div>
    ),
});
