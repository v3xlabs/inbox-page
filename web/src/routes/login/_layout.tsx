import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/login/_layout')({
    component: () => (
        <div className="p-2 w-full h-full flex justify-center pt-4 md:pt-32">
            <div className="border p-4 rounded-lg h-fit space-y-2 w-full max-w-md">
                <Outlet />
            </div>
        </div>
    ),
});